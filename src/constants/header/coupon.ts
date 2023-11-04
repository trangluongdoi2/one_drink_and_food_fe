import { TCouponType } from '@/types/coupon'

type TCouponHeaderProps = {
  id: keyof TCouponType | string
  title: string
  width: string
  value: keyof TCouponType | string
  position?: 'left' | 'center' | 'right'
}

export const couponHeader: TCouponHeaderProps[] = [
  {
    id: 'couponCode',
    title: 'Mã',
    width: '10%',
    position: 'center',
    value: 'couponCode'
  },
  {
    id: 'avatar',
    title: 'Avatar',
    width: '10%',
    value: ''
  },
  {
    id: 'endDate',
    title: 'Ngày bắt đầu',
    width: '10%',
    value: 'recipientName'
  },
  {
    id: 'startDate',
    title: 'Ngày kết thúc',
    width: '15%',
    value: 'recipientName'
  },
  {
    id: 'usedCoupons',
    title: 'Đã sử dụng',
    width: '15%',
    value: 'usedCoupons'
  },
  {
    id: 'quantity',
    title: 'Số lượng phát hành',
    width: '15%',
    value: 'quantity'
  },
  {
    id: 'status',
    title: 'Trạng thái',
    width: '10%',
    value: 'status'
  },
  {
    id: 'tool',
    title: 'Công cụ',
    width: 'auto',
    value: 'tool'
  }
]
