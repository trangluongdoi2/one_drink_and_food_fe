import { ORDER_STATUS } from '@/types/order'
import { CancelIcon, PaymentingIcon, PaidIcon, PreparingIcon, ShippingIcon } from '@/assets/icon'
const { PAID, PAYMENTING, PREPARING, CANCEL, SHIPPING } = ORDER_STATUS

export const getStatus = (type: string) => {
  switch (type) {
    case PAID:
      return <PaidIcon />

    case PAYMENTING:
      return <PaymentingIcon />

    case PREPARING:
      return <PreparingIcon />

    case CANCEL:
      return <CancelIcon />

    case SHIPPING:
      return <ShippingIcon />

    default:
      return null
  }
}
