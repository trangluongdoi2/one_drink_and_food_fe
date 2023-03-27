import { UserListHeaderProps } from '@/types/user'

export const headerContent: UserListHeaderProps['header'] = [
  {
    id: 'checkbox',
    title: '',
    width: 35
  },
  {
    id: 'avatar',
    title: 'Avatar',
    width: 60,
    position: 'center'
  },
  {
    id: 'firstName',
    title: 'Họ',
    width: 60
  },
  {
    id: 'lastName',
    title: 'Tên',
    width: 60
  },
  {
    id: 'email',
    title: 'Email',
    width: 150
  },
  {
    id: 'phone',
    title: 'Số điện thoại',
    width: 100
  },
  {
    id: 'gender',
    title: 'Giới tính',
    width: 60
  },
  {
    id: 'dob',
    title: 'Ngày sinh',
    width: 60
  },
  {
    id: 'member',
    title: 'Thành viên',
    width: 60,
    position: 'center'
  },
  {
    id: 'tool',
    title: 'Công cụ',
    width: 30
  }
]
