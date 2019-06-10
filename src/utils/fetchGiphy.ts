import GiphyApiClient from 'giphy-js-sdk-core'

const fetchGiphy = async (giphyApiKey, query: string) => {
  const giphyClient = GiphyApiClient(giphyApiKey)
  const response = await giphyClient.search('gifs', {
    q: query,
    limit: 1,
    sort: 'relevant',
  })
  return response.data
}

export default fetchGiphy
