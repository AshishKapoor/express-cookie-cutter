import Axios from 'axios'

export const NODE_API_BASE_URL = 'http://localhost:3000'

export const AXIOS_INSTANCE = Axios.create({
  baseURL: NODE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

AXIOS_INSTANCE.interceptors.request.use(async function (config) {
  // const token = await getToken()
  // config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})

AXIOS_INSTANCE.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error)
    if (error.response?.status === 403) {
      logout()
    }
    const errorResponseMessage = error.response?.data?.messages
    if (errorResponseMessage) {
      if ([400, 401, 404, 405].includes(error.response?.status)) {
        // Sentry.captureException(errorResponseMessage)
        throw { errorMessage: errorResponseMessage }
      }
    }
    // Sentry.captureException(error)
    throw { errorMessage: 'An error occured' }
  },
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const httpNode = async (config) => {
  const { data } = await AXIOS_INSTANCE(config)
  return data
}

export default httpNode
