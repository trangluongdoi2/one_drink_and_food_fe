import Api from '@/api'
import { COUPON_URL } from '@/configs/urlConfig'
import { TCouponType, TGetCouponParams } from '@/types/coupon'
import { HttpStatusCode } from 'axios'

type TResponseData<T> = {
  data: T
  statusCode: HttpStatusCode
}

type TUseUpdateCouponService = {
  params: Partial<TCouponType>
  id: string
}

export default class CouponApi extends Api {
  async findAll() {
    const res = await this.get(COUPON_URL)
    return res.data
  }

  async findWithPagination(params: TGetCouponParams): Promise<TCouponType[]> {
    const { data } = await this.get(COUPON_URL, {
      params: params
    })
    return data?.data ?? []
  }

  async createCoupon(params: Partial<TCouponType>): Promise<TCouponType> {
    const res = await this.post(COUPON_URL, {
      ...params
    })
    return res.data
  }

  async updateCoupon({ params, id }: TUseUpdateCouponService): Promise<TCouponType> {
    const res = await this.patch(`${COUPON_URL}/${id}`, {
      ...params
    })
    return res.data
  }
}
