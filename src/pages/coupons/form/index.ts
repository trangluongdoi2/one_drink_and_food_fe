import { TCouponType } from '@/types/coupon'
import { createFormContext } from '@mantine/form'

export const defaultCoupon = {
  couponCode: '',
  couponTitle: '',
  couponEndDate: {
    date: '',
    time: ''
  },
  couponFreeShipping: false,
  couponNote: '',
  couponOptions: '',
  couponProductDetails: '',
  couponProductType: [],
  couponQuantity: 0,
  couponStartDate: {
    date: '',
    time: ''
  },
  couponValue: 0,
  image: ''
}

export const [CouponFormProvider, useCouponFormContext, useCouponForm] = createFormContext<TCouponType>()
