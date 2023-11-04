import { useQuery } from 'react-query'
import OrderApi, { TGetOrderParams } from './api'

const orderApi = new OrderApi()

export const useGetAllOrders = (params?: TGetOrderParams) => {
  return useQuery({
    queryKey: 'order',
    queryFn: () => orderApi.findWithPagination(params)
  })
}
