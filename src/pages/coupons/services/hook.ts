import { MutationConfig, queryClient } from '@/configs/react-query'
import { TCouponType, TGetCouponParams } from '@/types/coupon'
import { useMutation, useQuery } from 'react-query'
import CouponApi from './api'

const couponApi = new CouponApi()

type CouponMutation = typeof couponApi.createCoupon

type TCouponConfig = {
  config?: MutationConfig<CouponMutation>
}

const useGetCoupon = (params: TGetCouponParams) => {
  return useQuery({
    queryKey: 'coupon',
    queryFn: () => couponApi.findWithPagination(params)
  })
}

const useCreateCoupon = ({ config }: TCouponConfig = {}) => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['coupon'] })
    },
    ...config,
    mutationFn: (input: Partial<TCouponType>) => couponApi.createCoupon(input)
  })
}

type TUseUpdateCouponService = {
  params: Partial<TCouponType>
  id: string
}

const useUpdateCoupon = () => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['coupon'] })
    },
    mutationFn: ({ params, id }: TUseUpdateCouponService) => couponApi.updateCoupon({ params, id })
  })
}

export { useGetCoupon, useCreateCoupon, useUpdateCoupon }
