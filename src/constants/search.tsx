import { CouponIcon, GiftIcon, NewsIcon, OrderIcon, OverviewIcon, ProductIcon, UserIcon } from '@/assets/icon'

export const dataSearch = [
  {
    label: 'Tổng quan',
    value: '/overview/market',
    icon: OverviewIcon,
    detail: 'Phân tích thị trường',
    link: '/overview/market'
  },
  {
    label: 'Tổng quan',
    value: '/overview/product',
    icon: OverviewIcon,
    detail: 'Dữ liệu sản phẩm',
    link: '/overview/product'
  },
  {
    label: 'Khách hàng',
    value: '/users/list',
    icon: UserIcon,
    detail: 'Danh sách khách hàng',
    link: '/users/list'
  },
  {
    label: 'Khách hàng',
    value: '/users/silver',
    icon: UserIcon,
    detail: 'Thành viên bạc',
    link: '/users/silver'
  },
  {
    label: 'Khách hàng',
    value: '/users/gold',
    icon: UserIcon,
    detail: 'Thành viên vàng',
    link: '/users/gold'
  },
  {
    label: 'Khách hàng',
    value: '/users/ruby',
    icon: UserIcon,
    detail: 'Thành viên ruby',
    link: '/users/ruby'
  },
  {
    label: 'Khách hàng',
    value: '/users/register',
    icon: UserIcon,
    detail: 'Thông tin đăng ký',
    link: '/users/register'
  },
  {
    label: 'Đơn hàng',
    value: '/orders/all',
    icon: OrderIcon,
    detail: 'Tất cả đơn hàng',
    link: '/orders/all'
  },
  {
    label: 'Đơn hàng',
    value: '/orders/waiting',

    icon: OrderIcon,
    detail: 'Chờ thanh toán',
    link: '/orders/waiting'
  },
  {
    label: 'Đơn hàng',
    value: '/orders/processing',

    icon: OrderIcon,
    detail: 'Đang thực hiện',
    link: '/orders/processing'
  },
  {
    label: 'Đơn hàng',
    value: '/orders/delivering',

    icon: OrderIcon,
    detail: 'Đang giao',
    link: '/orders/delivering'
  },
  {
    label: 'Đơn hàng',
    value: '/orders/done',

    icon: OrderIcon,
    detail: 'Đã hoàn tất',
    link: '/orders/done'
  },
  {
    label: 'Đơn hàng',
    value: '/orders/cancel',

    icon: OrderIcon,
    detail: 'Đã hủy',
    link: '/orders/cancel'
  },
  {
    label: 'Sản phẩm',
    value: '/products/all',
    icon: ProductIcon,
    detail: 'Danh sách sản phẩm',
    link: '/products/all'
  },
  {
    label: 'Sản phẩm',
    value: '/products/juice',

    icon: ProductIcon,
    detail: 'Nước ép',
    link: '/products/juice'
  },
  {
    label: 'Sản phẩm',
    value: '/products/smoothy',

    icon: ProductIcon,
    detail: 'Sinh tố',
    link: '/products/smoothy'
  },
  {
    label: 'Sản phẩm',
    value: '/products/yogurt',

    icon: ProductIcon,
    detail: 'Yogurt',
    link: '/products/yogurt'
  },
  {
    label: 'Sản phẩm',
    value: '/products/tea',

    icon: ProductIcon,
    detail: 'Trà',
    link: '/products/tea'
  },
  {
    label: 'Sản phẩm',
    value: '/products/coffee',

    icon: ProductIcon,
    detail: 'Cà phê',
    link: '/products/coffee'
  },
  {
    label: 'Sản phẩm',
    value: '/products/other',

    icon: ProductIcon,
    detail: 'Vật phẩm',
    link: '/products/other'
  },
  {
    label: 'Tin tức',
    value: '/news/list',

    icon: NewsIcon,
    detail: 'Danh sách tin tức',
    link: '/news/list'
  },
  {
    label: 'Mã khuyến mãi',
    value: '/coupon/list',

    icon: CouponIcon,
    detail: 'Danh sách khuyến mãi',
    link: '/coupons/list'
  },
  {
    label: 'Quà tặng',
    value: '/gift/list',
    icon: GiftIcon,
    detail: 'Danh sách quà tặng',
    link: '/gifts/list'
  },
  {
    label: 'Quà tặng',
    value: '/gift/infor',
    icon: GiftIcon,
    detail: 'Thông tin quà đã đổi',
    link: '/gifts/infor'
  }
]
