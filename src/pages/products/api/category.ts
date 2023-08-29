import Api from '@/api'
import { API_URL, CATEGORY_CREATE_URL, CATEGORY_FIND_ALL_URL } from '@/configs/urlConfig'
import { ProductType, TCategoryCreate } from '../type'

export default class CategoryApi extends Api {
  async create(input: TCategoryCreate) {
    const res = await this.post(CATEGORY_CREATE_URL, input)
    return res.data
  }

  async findByProductType(productType: ProductType) {
    const url = `${API_URL}/categories/${productType}`
    const res = await this.get(url)
    return res.data
  }

  async findAll() {
    const res = await this.get(CATEGORY_FIND_ALL_URL)
    return res.data
  }

  async findById(id: string) {
    const url = `${API_URL}/categories/detail/${id}`
    const res = await this.get(url)
    return res.data
  }
}
