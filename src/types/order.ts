import { TProductAttributeOption, TProductThumbs } from '@/pages/products/type'
import { TCouponType } from './coupon'
import { TUser } from './user'

export enum ORDER_STATUS {
  PAYMENTING = 'pending',
  PREPARING = 'preparing',
  PAID = 'paid',
  CANCEL = 'cancel',
  SHIPPING = 'shipping'
}

export enum PAYMENT_METHOD {
  CASH = 'cash',
  MOMO = 'momo',
  ZALO = 'zalo',
  BANKING = 'banking'
}

export interface OrderProps {
  address: string
  phone: string
  status: ORDER_STATUS
  fireBaseId: string
  recipientName: string
  avatar: string
  receivedDate: string
}

export type TAttributesType = {
  attributeId: string
  options: TProductAttributeOption[]
  value: string
}

export type TCheckoutOrderType = {
  totalPrice: number
  feeShip: number
  totalDiscount: number
  totalCheckout: number
}

export type TItemsType = {
  productId: string
  quantity: number
  attributes: TAttributesType[]
  amount: number
  name: string
  auxiliaryName?: string
  price: number
  productThumbs?: TProductThumbs[]
}

export type TCheckoutType = {
  items: TItemsType[]
  discount: TCouponType[]
  checkoutOrder?: TCheckoutOrderType
}

export type TShippingType = {
  receiverName: string
  receiverAddress: string
  contactPhoneNumber: string
  deliveryTime: string
}

export type TOrder = {
  user: TUser
  checkout: TCheckoutType
  shipping: TShippingType
  trackingText: string
}
