import { OrderProps } from '@/types/order'

interface OrderHeaderProps {
  id: keyof OrderProps | ''
  title: string
  width: string
  value: 'recipientName' | ''
  position?: 'left' | 'center' | 'right'
}

export const orderHeader: OrderHeaderProps[] = [
  {
    id: 'fireBaseId',
    title: 'Mã đơn',
    width: '11%',
    position: 'center',
    value: 'recipientName'
  },
  {
    id: 'avatar',
    title: 'Avatar',
    width: '6%',
    value: ''
  },
  {
    id: 'recipientName',
    title: 'Người nhận',
    width: '14%',
    value: 'recipientName'
  },
  {
    id: 'address',
    title: 'Địa chỉ giao hàng',
    width: '31%',
    value: 'recipientName'
  },
  {
    id: 'phone',
    title: 'Số điện thoại',
    width: '11%',
    value: 'recipientName'
  },
  {
    id: 'receivedDate',
    title: 'Thời gian',
    width: '9%',
    value: 'recipientName'
  },
  {
    id: 'status',
    title: 'Trạng thái',
    width: '8%',
    value: 'recipientName'
  },
  {
    id: '',
    title: 'Công cụ',
    width: '7%',
    value: 'recipientName'
  }
]
