import BankingIcon from '@/assets/svg/bank.jpg'
import CashIcon from '@/assets/svg/cash.jpg'
import MomoIcon from '@/assets/svg/momo.jpg'
import ZaloIcon from '@/assets/svg/zalo.jpg'
import { PAYMENT_METHOD } from '@/types/order'

const { CASH, MOMO, ZALO, BANKING } = PAYMENT_METHOD

export const paymentOptions = [
  {
    value: CASH,
    icon: CashIcon,
    title: 'Tiền mặt'
  },
  {
    value: MOMO,
    icon: MomoIcon,
    title: 'Momo'
  },
  {
    value: ZALO,
    icon: ZaloIcon,
    title: 'ZaloPay'
  },
  {
    value: BANKING,
    icon: BankingIcon,
    title: 'Thẻ ngân hàng'
  }
]
