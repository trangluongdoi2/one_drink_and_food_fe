import {
  OverviewIcon,
  UserIcon,
  OrderIcon,
  ProductIcon,
  NewsIcon,
  CouponIcon,
  GiftIcon,
  ActiveOverviewIcon,
  ActiveUserIcon,
  ActiveOrderIcon,
  ActiveProductIcon,
  ActiveNewsIcon,
  ActiveGiftIcon,
  ActiveCouponIcon
} from '@/assets/icon'

export type TNavLink = { label: string; link: string }

export type TNavConfig = {
  label: string
  icon: string
  active: string
  links: TNavLink[]
  initiallyOpened?: boolean
}

const navConfig: TNavConfig[] = [
  {
    label: 'Tổng quan',
    icon: OverviewIcon,
    active: ActiveOverviewIcon,
    links: [
      { label: 'Phân tích thị trường', link: '/overview/market' },
      { label: 'Dữ liệu sản phẩm', link: '/overview/product' }
    ]
  },
  {
    label: 'Khách hàng',
    icon: UserIcon,
    active: ActiveUserIcon,
    initiallyOpened: false,
    links: [
      { label: 'Danh sách khách hàng', link: '/users/list' },
      { label: 'Thành viên bạc', link: '/users/silver' },
      { label: 'Thành viên vàng', link: '/users/gold' },
      { label: 'Thành viên ruby', link: '/users/ruby' },
      { label: 'Thông tin đăng ký', link: '/users/register' }
    ]
  },
  {
    label: 'Đơn hàng',
    icon: OrderIcon,
    active: ActiveOrderIcon,
    links: [
      { label: 'Tất cả đơn hàng', link: '/orders/all' },
      { label: 'Chờ thanh toán', link: '/orders/waiting' },
      { label: 'Đang thực hiện', link: '/orders/processing' },
      { label: 'Đang giao', link: '/orders/delivering' },
      { label: 'Đã hoàn tất', link: '/orders/done' },
      { label: 'Đã hủy', link: '/orders/cancel' }
    ]
  },
  {
    label: 'Sản phẩm',
    icon: ProductIcon,
    active: ActiveProductIcon,
    links: [
      { label: 'Danh sách sản phẩm', link: '/products/all' },
      { label: 'Nước ép', link: '/products/juice' },
      { label: 'Sinh tố', link: '/products/smoothy' },
      { label: 'Yogurt', link: '/products/yogurt' },
      { label: 'Trà', link: '/products/tea' },
      { label: 'Cà phê', link: '/products/coffee' },
      { label: 'Vật phẩm', link: '/products/other' }
    ]
  },
  {
    label: 'Tin tức',
    icon: NewsIcon,
    active: ActiveNewsIcon,
    links: [{ label: 'Danh sách tin tức', link: '/news/list' }]
  },
  {
    label: 'Khuyến mãi',
    icon: CouponIcon,
    active: ActiveCouponIcon,
    links: [
      { label: 'Danh sách mã', link: '/coupons/list' },
      { label: 'Thêm mã khuyến mãi', link: '/coupons' }
    ]
  },
  {
    label: 'Quà tặng',
    icon: GiftIcon,
    active: ActiveGiftIcon,
    links: [
      { label: 'Danh sách quà tặng', link: '/gifts/list' },
      { label: 'Thông tin quà đã đổi', link: '/gifts/infor' }
    ]
  }
]

export { navConfig }
