import { MEMBERSHIP } from '@/types/user'

export const getMemberName = (type: string) => {
  switch (type) {
    case MEMBERSHIP.SILVER:
      return 'Thành viên bạc'
    case MEMBERSHIP.GOLD:
      return 'Thành viên vàng'
    case MEMBERSHIP.RUBY:
      return 'Thành viên ruby'
    default:
      return 'Danh sách khách hàng'
  }
}
