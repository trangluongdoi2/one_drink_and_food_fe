import { ProductProps } from '@/types/product'

interface ProductHeaderProps {
  id: string
  title: string
  width: string
  value: 'recipientName' | ''
  position?: 'left' | 'center' | 'right'
}

export const productHeader: ProductHeaderProps[] = [
  {
    id: 'code',
    title: 'Mã',
    width: '8%',
    position: 'center',
    value: 'recipientName'
  },
  {
    id: 'photo',
    title: 'Avatar',
    width: '6%',
    value: ''
  },
  {
    id: 'name',
    title: 'Tên sản phẩm',
    width: '20%',
    value: 'recipientName'
  },
  {
    id: 'import',
    title: 'Giá vốn',
    width: '11%',
    value: 'recipientName'
  },
  {
    id: 'sale',
    title: 'Giá bán',
    width: '11%',
    value: 'recipientName'
  },
  {
    id: 'amount',
    title: 'Số lượng',
    width: '9%',
    value: 'recipientName'
  },
  {
    id: 'group',
    title: 'Danh mục',
    width: '18%',
    value: 'recipientName'
  },
  {
    id: 'status',
    title: 'Trạng thái',
    width: '8%',
    value: 'recipientName'
  },
  {
    id: 'tool',
    title: 'Công cụ',
    width: 'auto',
    value: 'recipientName'
  }
]
