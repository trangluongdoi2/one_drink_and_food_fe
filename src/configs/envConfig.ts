import { ENVIRONMENT } from '@/constants/env'

const dev = {
  API_ENDPOINT_URL: ''
}

const prod = {
  API_ENDPOINT_URL: ''
}

const test = {
  API_ENDPOINT_URL: ''
}

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case ENVIRONMENT.DEVELOPMENT:
      return dev
    case ENVIRONMENT.PRODUCTION:
      return prod
    case ENVIRONMENT.TEST:
      return test
    default:
      return test
  }
}

export const env = getEnv()
