import Api from '@/api'
import { PRODUCTS_ALL_URL, PRODUCT_ALL_PUBLISH_URL, PRODUCT_CREATE_URL, PRODUCT_DETAIL } from '@/configs/urlConfig'
import { TProductCreateNew } from '../type'

interface ProductDetail {
  id: string
  type: string
}

export default class ProductsApi extends Api {
  getProduct() {
    console.log('getProduct....')
  }

  async getAllProducts() {
    const data = await this.get(PRODUCTS_ALL_URL)
    return data
  }

  async getAllProductPublish() {
    const data = await this.get(PRODUCT_ALL_PUBLISH_URL)
    return data
  }

  async getProductDetails(input: ProductDetail) {
    const data = await this.get(PRODUCT_DETAIL, input)
    return data
  }

  async createProduct(input: TProductCreateNew) {
    const data = await this.post(PRODUCT_CREATE_URL, input)
    return data
  }
}
