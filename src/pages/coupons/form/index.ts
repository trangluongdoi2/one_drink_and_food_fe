import { TCouponType } from '@/types/coupon'
import { createFormContext } from '@mantine/form'

export const [CouponFormProvider, useCouponFormContext, useCouponForm] = createFormContext<TCouponType>()
