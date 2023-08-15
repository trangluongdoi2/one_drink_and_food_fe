import Api from '@/api'
import axios from '@/configs/axios'
import { PRODUCTS_ALL_URL, PRODUCT_ALL_PUBLISH_URL, PRODUCT_DETAIL } from '@/configs/urlConfig'
import { ProductCreateNew } from '../type'

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

  async createProduct(input: ProductCreateNew) {
    const data = await this.patch(PRODUCT_DETAIL, input)
    return data
  }
}
