export const DOMAIN_SERVER = 'abcd.com'

export const API_URL = import.meta.env.PROD ? DOMAIN_SERVER : (import.meta.env.VITE_REACT_APP_API_URL as string)

export const ADMIN_LOGIN_URL = `${API_URL}/auth/admins/login`

export const ADMIN_LOGOUT_URL = `${API_URL}/auth/admins/logout`

export const PRODUCTS_ALL_URL = `${API_URL}/products/all`

export const PRODUCT_ALL_PUBLISH_URL = `${API_URL}/products/publishes`

export const PRODUCT_DETAIL = `${API_URL}/products/detail/:type/:id`
