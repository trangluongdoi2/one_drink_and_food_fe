import Api from '@/api'
import { ORDER_URL } from '@/configs/urlConfig'
import { TPaginationParams } from '@/types/global'
import { ORDER_STATUS, TOrder } from '@/types/order'

export type TGetOrderParams = TPaginationParams & {
  status: ORDER_STATUS
}

export default class OrderApi extends Api {
  async findWithPagination(params?: TGetOrderParams): Promise<TOrder[]> {
    const { data } = await this.get(ORDER_URL, {
      params: params
    })
    return data ?? []
  }
}
