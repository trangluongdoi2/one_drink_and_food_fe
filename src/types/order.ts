export enum ORDER_STATUS {
  PAYMENTING = 'paymenting',
  PREPARING = 'preparing',
  PAID = 'paid',
  CANCEL = 'cancel',
  SHIPPING = 'shipping'
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
