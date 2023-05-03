import { ORDER_STATUS } from '@/types/order'
const { CANCEL, PAID, PAYMENTING, PREPARING, SHIPPING } = ORDER_STATUS

export const tabHeader = [
  {
    title: 'Chờ thanh toán',
    value: PAYMENTING
  },
  {
    title: 'Đang thực hiện',
    value: PREPARING
  },
  {
    title: 'Đang giao',
    value: SHIPPING
  },
  {
    title: 'Đã hoàn tất',
    value: PAID
  },
  {
    title: 'Đã huỷ',
    value: CANCEL
  }
]
