import Axios, { AxiosHeaders, AxiosRequestConfig } from 'axios'

import storage from '@/utils/storage'
import { API_URL } from './urlConfig'

const authRequestInterceptor = (config: AxiosRequestConfig) => {
  const token = storage.getToken()
  if (token) {
    ;(config.headers as AxiosHeaders).set('authorization', `${token}`)
  }

  return config
}

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Cookie: 'connect.sid=s%3AEtsGSTK0205yTxSfWlkjy45Fh4JCIUTn.E13oe2G4i7bgmrMp5pyX9Nlu0RH3%2B4Y6mKC2IPVUIJU'
  }
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
