import { TAppliesTo, TCouponType, TDiscountType } from '@/types/coupon'
import { createFormContext } from '@mantine/form'

export const defaultCoupon = {
  _id: '',
  code: '',
  title: '',
  name: '',
  description: '',
  type: 'fixed' as TDiscountType,
  value: 0,
  productIds: [],
  maxUses: 0,
  mainFunctions: [],
  usesCount: 0,
  usersUsed: [''],
  maxUsesPerUser: 0,
  minOrderValue: 0,
  isActive: false,
  isNoLimit: false,
  appliesTo: 'all' as TAppliesTo
}

type TCouponForm = {
  selectedCoupon: TCouponType
  couponData: TCouponType[]
}

export const [CouponFormProvider, useCouponFormContext, useCouponForm] = createFormContext<TCouponForm>()

export const [CreateCouponFormProvider, useCreateCouponFormContext, useCreateCouponForm] =
  createFormContext<TCouponType>()
