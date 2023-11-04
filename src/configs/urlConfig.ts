export const DOMAIN_SERVER = 'http://18.141.230.66:3051'

export const API_URL = import.meta.env.PROD ? DOMAIN_SERVER : (import.meta.env.VITE_REACT_APP_API_URL as string)

// export const API_URL = DOMAIN_SERVER

export const ADMIN_LOGIN_URL = `${API_URL}/auth/admins/login`

export const ADMIN_LOGOUT_URL = `${API_URL}/auth/admins/logout`

export const PRODUCTS_ALL_URL = `${API_URL}/products/all`

export const PRODUCT_ALL_PUBLISH_URL = `${API_URL}/products/publishes`

export const PRODUCT_DETAIL = `${API_URL}/products/detail/:type/:id`

export const PRODUCT_CREATE_URL = `${API_URL}/products`

export const CATEGORY_CREATE_URL = `${API_URL}/categories`

// export const CATEGORY_FIND_BY_PRODUCT_TYPE = `${API_URL}/categories`

export const CATEGORY_FIND_ALL_URL = `${API_URL}/categories`

export const COUPON_URL = `${API_URL}/discounts`

export const ORDER_URL = `${API_URL}/admins/orders`

export const USER_ADMIN_URL = `${API_URL}/admins/users`
