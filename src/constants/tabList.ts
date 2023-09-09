import { ProductGroup } from '@/types/product'

export const tabList = [
  {
    title: 'Tài khoản',
    value: 'account'
  },
  {
    title: 'Thành viên',
    value: 'member'
  },
  {
    title: 'Lịch sử',
    value: 'history'
  },
  {
    title: 'Đổi thưởng',
    value: 'gift'
  },
  {
    title: 'Mã khuyến mãi',
    value: 'coupon'
  }
]

export const checkList = [
  {
    id: 1,
    title: 'Nước ép',
    value: ProductGroup.JUICE
  },
  {
    id: 2,
    title: 'Sinh tố',
    value: ProductGroup.SMOOTHY
  },
  {
    id: 3,
    title: 'Yogurt',
    value: ProductGroup.YOGURT
  },
  {
    id: 4,
    title: 'Trà',
    value: ProductGroup.TEA
  },
  {
    id: 5,
    title: 'Cà phê',
    value: ProductGroup.COFFEE
  },
  {
    id: 6,
    title: 'Vật phẩm',
    value: ProductGroup.ITEM
  }
]
