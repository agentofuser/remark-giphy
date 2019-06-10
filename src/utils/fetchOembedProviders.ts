import axios from 'axios'

const giphy_PROVIDERS_URL = 'https://giphy.com/providers.json'

const fetchgiphyedProviders = async () => {
  const response = await axios.get(giphy_PROVIDERS_URL)
  return response.data
}

export default fetchgiphyedProviders
