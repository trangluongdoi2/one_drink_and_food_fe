import Api from '..'
import { API_URL } from '@/configs/urlConfig'

export class AdminApi extends Api {
  async publishProductById(productId: string) {
    const PUBLISH_PRODUCT_BY_ID = `${API_URL}/admins/product-publish/${productId}`
    const res = await this.post(PUBLISH_PRODUCT_BY_ID)
    return res.data
  }

  async unPublishProductById(productId: string) {
    const UN_PUBLISH_PRODUCT_BY_ID = `${API_URL}/admins/product-unpublish/${productId}`
    const res = await this.post(UN_PUBLISH_PRODUCT_BY_ID)
    return res.data
  }
}
