import Api from '@/api'
import { API_URL, PRODUCTS_ALL_URL, PRODUCT_ALL_PUBLISH_URL, PRODUCT_CREATE_URL } from '@/configs/urlConfig'
import { ProductType, TProductCreateNew, TProductUpdate } from '../type'

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

  async getProductDetails(productId: string) {
    const PRODUCT_DETAIL_URL = `${API_URL}/products/detail/${productId}`
    const res = await this.get(PRODUCT_DETAIL_URL)
    return res.data
  }

  async create(input: TProductCreateNew | any) {
    const res = await this.post(PRODUCT_CREATE_URL, input)
    return res.data
  }

  async getProductByCategoryId(categoryId: string) {
    // const res = await this.get()
  }

  async update(input: TProductUpdate, productType: ProductType) {
    const PRODUCT_UPDATE_URL = `${API_URL}/products/${productType}/${input._id}`
    const res = await this.patch(PRODUCT_UPDATE_URL, input)
    return res.data
  }

  deleteProduct(productId: string) {
    // this.delete(PRODUCT_DELETE_URL, )
  }

  async uploadProductThumbs(input: { id: string; thumbs: any }) {
    const PRODUCT_UPLOAD_THUMBS_URL = `${API_URL}/products/${input.id}/thumbs`
    const res = await this.post(PRODUCT_UPLOAD_THUMBS_URL, input.thumbs, 'form')
    return res.data
  }

  removeProductThumbs(input: { id: string; thumbsKeys: { keys: string[] } }) {
    const PRODUCT_REMOVE_THUMBS_URL = `${API_URL}/products/${input.id}/thumbs`
    this.delete(PRODUCT_REMOVE_THUMBS_URL, input.thumbsKeys)
  }

  async uploadInformationImages(input: { id: string; inforImages: any }) {
    const PRODUCT_UPLOAD_INFOS_IMAGE_THUMBS_URL = `${API_URL}/products/${input.id}/information-images`
    await this.post(PRODUCT_UPLOAD_INFOS_IMAGE_THUMBS_URL, input.inforImages)
  }
}
