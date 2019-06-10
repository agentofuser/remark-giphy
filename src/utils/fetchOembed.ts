import axios from 'axios'

const fetchgiphy = async (endpoint: { url: any; params: any }) => {
  const response = await axios.get(endpoint.url, {
    params: {
      format: 'json',
      ...endpoint.params,
    },
  })
  return response.data
}

export default fetchgiphy
