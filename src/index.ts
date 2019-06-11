import {
  fetchGiphyId,
  transformResourceUrlToGiphyUrl,
  selectPossibleGiphyResourceNodes,
} from './utils'

// For each node this is the process
const processNode = async (options, node) => {
  let mutatedNode = node
  try {
    const query = decodeURIComponent(node.url.replace('giphy:', ''))

    const giphyId = await fetchGiphyId(options, query)
    mutatedNode = transformResourceUrlToGiphyUrl(node, giphyId)
  } catch (error) {
    error.node = node
    throw error
  }
  return mutatedNode
}

function getTransformer(options) {
  return async function transformer(tree: any, _file: any) {
    const nodes = selectPossibleGiphyResourceNodes(tree)

    if (nodes.length > 0) {
      await Promise.all(nodes.map(node => processNode(options, node)))
    }

    return tree
  }
}

function attacher(options) {
  return getTransformer(options)
}

export default attacher
