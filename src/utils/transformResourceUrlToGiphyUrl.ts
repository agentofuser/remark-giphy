const transformResourceUrlToGiphyUrl = (node, giphyId) => {
  const imgSrc = `https://media.giphy.com/media/${giphyId}/giphy.gif`
  const mutatedNode = node
  mutatedNode.url = imgSrc

  return mutatedNode
}

export default transformResourceUrlToGiphyUrl
