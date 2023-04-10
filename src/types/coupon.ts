export interface CouponProps {
  couponCode: string
  couponTitle: string
  couponEndDate: {
    date: string
    time: string
  }
  couponFreeShipping: boolean
  couponNote: string
  couponOptions: string
  couponProductDetails: string
  couponProductType: string[]
  couponQuantity: number
  couponStartDate: {
    date: string
    time: string
  }
  couponValue: number
  image: string
}
