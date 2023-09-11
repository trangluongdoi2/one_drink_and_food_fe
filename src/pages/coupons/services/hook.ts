import { MutationConfig } from '@/configs/react-query'
import { TGetCouponParams } from '@/types/coupon'
import { useQuery } from 'react-query'
import CouponApi from './api'

const couponApi = new CouponApi()

type CouponMutation = typeof couponApi.findWithPagination

type TCouponConfig = {
  config?: MutationConfig<CouponMutation>
}

const useGetCoupon = (params: TGetCouponParams) => {
  return useQuery({
    queryKey: 'coupon',
    queryFn: () => couponApi.findWithPagination(params)
  })
}

export { useGetCoupon }
