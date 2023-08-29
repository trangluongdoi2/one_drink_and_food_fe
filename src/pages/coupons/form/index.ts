import { TCouponType } from '@/types/coupon'
import { createFormContext } from '@mantine/form'

export const defaultCoupon = {
  couponCode: '',
  couponTitle: '',
  couponEndDate: '',
  couponFreeShipping: false,
  couponNote: '',
  couponOptions: '',
  couponProductDetails: '',
  couponProductType: [],
  couponQuantity: 0,
  couponStartDate: '',
  couponValue: 0,
  image: '',
  fireBaseId: ''
}

type TCouponForm = {
  selectedCoupon: TCouponType
  couponData: TCouponType[]
}

export const [CouponFormProvider, useCouponFormContext, useCouponForm] = createFormContext<TCouponForm>()
