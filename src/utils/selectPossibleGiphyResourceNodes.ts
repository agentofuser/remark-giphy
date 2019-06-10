import { selectAll } from 'unist-util-select'

const selectPossibleGiphyResourceNodes = (markdownAST: any) => {
  const nodes = selectAll('image', markdownAST).filter(node =>
    node.url.startsWith('giphy:')
  )
  return nodes
}

export default selectPossibleGiphyResourceNodes
