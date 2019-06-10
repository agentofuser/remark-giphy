const transformResourceUrlToGiphyUrl = (node, giphyResult) => {
  const giphyId = giphyResult[0].id
  const imgSrc = `https://media.giphy.com/media/${giphyId}/giphy.gif`
  const mutatedNode = node
  mutatedNode.url = imgSrc

  return mutatedNode
}

export default transformResourceUrlToGiphyUrl
