import { TPaginationParams } from './global'

type TDiscountType = 'fixed' | 'percent'

type TAppliesTo = 'all' | 'specific'

type TCouponType = {
  _id: string
  code: string
  title: string
  description: string
  name: string
  image?: string
  type: TDiscountType
  value: number
  startDate?: string
  endDate?: string
  productIds: string[]
  maxUses: number
  mainFunctions: string[]
  usesCount: number
  usersUsed: string[]
  maxUsesPerUser: number
  minOrderValue: number
  isActive: boolean
  isNoLimit: boolean
  appliesTo: TAppliesTo
}

type TGetCouponParams = TPaginationParams & {
  sort: keyof TCouponType
}

export type { TAppliesTo, TCouponType, TDiscountType, TGetCouponParams }
