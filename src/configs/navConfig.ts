import { OverviewIcon, UserIcon, OrderIcon, ProductIcon, NewsIcon, CouponIcon, GiftIcon } from '@/assets'

export const navConfig = [
  {
    label: 'Tổng quan',
    icon: OverviewIcon,

    links: [
      { label: 'Phân tích thị trường', link: '/overview/market' },
      { label: 'Dữ liệu sản phẩm', link: '/overview/product' }
    ]
  },
  {
    label: 'Khách hàng',
    icon: UserIcon,
    initiallyOpened: true,
    links: [{ label: 'Danh sách khách hàng', link: '/users/list' }]
  },
  {
    label: 'Đơn hàng',
    icon: OrderIcon,
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
    links: [{ label: 'Danh sách tin tức', link: '/news/list' }]
  },
  { label: 'Mã khuyến mãi', icon: CouponIcon, links: [{ label: 'Danh sách khuyến mãi', link: '/coupons/list' }] },
  {
    label: 'Quà tặng',
    icon: GiftIcon,
    links: [
      { label: 'Danh sách quà tặng', link: '/gifts/list' },
      { label: 'Thông tin quà đã đổi', link: '/gifts/infor' }
    ]
  }
]
