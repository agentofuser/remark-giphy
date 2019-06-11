import GiphyApiClient from 'giphy-js-sdk-core'

const fetchGiphyId = async (
  { giphyApiKey, notFoundGiphyId = '14uQ3cOFteDaU' },
  query: string
) => {
  const giphyClient = GiphyApiClient(giphyApiKey)
  const response = await giphyClient.search('gifs', {
    q: query,
    limit: 1,
    sort: 'relevant',
  })
  const results = response.data
  return results.length > 0 ? results[0].id : notFoundGiphyId
}

export default fetchGiphyId
