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
    const res = await this.get(PRODUCTS_ALL_URL)
    return res.data
  }

  async getAllProductPublish() {
    const res = await this.get(PRODUCT_ALL_PUBLISH_URL)
    return res.data
  }

  async getProductDetails(input: ProductDetail) {
    const res = await this.get(PRODUCT_DETAIL, input)
    return res.data
  }

  async create(input: TProductCreateNew | any) {
    const res = await this.post(PRODUCT_CREATE_URL, input)
    return res.data
  }

  async getProductByCategoryId(categoryId: string) {
    // const res = await this.get()
  }
}
