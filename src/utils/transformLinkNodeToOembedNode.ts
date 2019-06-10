const transformLinkNodeTogiphyNode = (node, giphyResult) => {
  if (giphyResult.html) {
    node.type = 'html'
    node.value = giphyResult.html
    delete node.children
  } else if (giphyResult.type === 'photo') {
    node.type = 'html'
    node.value = `
      <img src="${giphyResult.url}"
        class="gatsby-remark-giphy-photo"
        width="${giphyResult.width}"
        height="${giphyResult.width}"
        title="${giphyResult.title}"/>
    `
    delete node.children
  }

  return node
}

export default transformLinkNodeTogiphyNode
