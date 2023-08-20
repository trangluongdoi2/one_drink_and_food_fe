import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios'
import storage from '@/utils/storage'
import { API_URL } from './urlConfig'

const authRequestInterceptor = (config: AxiosRequestConfig) => {
  const token = storage.getToken()
  if (token) {
    ;(config.headers as AxiosHeaders).set('authorization', `${token}`)
  }

  return config
}

export default axios.create({
  baseURL: API_URL
})

export const customAxios = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

// axios.interceptors.response.use(
//   (response) => {
//     return response.data
//   },
//   (error) => {
//     const message = error.response?.data?.message || error.message
//     console.warn(message)
//     return Promise.reject(error)
//   }
// )
