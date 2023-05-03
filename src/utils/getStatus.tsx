import { ORDER_STATUS } from '@/types/order'
import { CancelIcon, PaymentingIcon, PaidIcon, PreparingIcon, ShippingIcon } from '@/assets/icon'
const { PAID, PAYMENTING, PREPARING, CANCEL, SHIPPING } = ORDER_STATUS

export const getStatus = (type: string) => {
  switch (type) {
    case PAID:
      return {
        title: 'Đã hoàn tất',
        icon: <PaidIcon />
      }

    case PAYMENTING:
      return {
        title: 'Chờ thanh toán',
        icon: <PaymentingIcon />
      }

    case PREPARING:
      return {
        title: 'Đang thực hiện',
        icon: <PreparingIcon />
      }

    case CANCEL:
      return {
        title: 'Đã huỷ',
        icon: <CancelIcon />
      }

    case SHIPPING:
      return {
        title: 'Đang giao',
        icon: <ShippingIcon />
      }

    default:
      return null
  }
}
