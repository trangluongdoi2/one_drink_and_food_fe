import Api from '@/api'
import { COUPON_URL } from '@/configs/urlConfig'
import { TCouponType, TGetCouponParams } from '@/types/coupon'
import { AxiosResponse, HttpStatusCode } from 'axios'

type TResponseData<T> = {
  data: T
  statusCode: HttpStatusCode
}

export default class CouponApi extends Api {
  async findAll() {
    const res = await this.get(COUPON_URL)
    return res.data
  }

  async findWithPagination(params: TGetCouponParams): Promise<TCouponType[]> {
    const url = `${COUPON_URL}`
    const { data } = await this.get(url, {
      params: params
    })
    return data?.data ?? []
  }
}
