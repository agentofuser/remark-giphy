import {
  fetchGiphy,
  transformResourceUrlToGiphyUrl,
  selectPossibleGiphyResourceNodes,
} from './utils'

// For each node this is the process
const processNode = async (giphyApiKey, node) => {
  let mutatedNode = node
  try {
    const query = decodeURIComponent(node.url.replace('giphy:', ''))

    const giphyResponse = await fetchGiphy(giphyApiKey, query)
    mutatedNode = transformResourceUrlToGiphyUrl(node, giphyResponse)
  } catch (error) {
    error.node = node
    throw error
  }
  return mutatedNode
}

function getTransformer(giphyApiKey: string) {
  return async function transformer(tree: any, _file: any) {
    const nodes = selectPossibleGiphyResourceNodes(tree)

    if (nodes.length > 0) {
      await Promise.all(nodes.map(node => processNode(giphyApiKey, node)))
    }

    return tree
  }
}

function attacher({ giphyApiKey }) {
  return getTransformer(giphyApiKey)
}

export default attacher
