import { selectAll } from 'unist-util-select'

const selectPossibleGiphyResourceNodes = (markdownAST: any) => {
  const nodes = selectAll('*', markdownAST).filter(
    node => node.url && node.url.startsWith('giphy:')
  )
  return nodes
}

export default selectPossibleGiphyResourceNodes
