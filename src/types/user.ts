import { Gender } from '@/reducer/customer/type'

export enum MEMBERSHIP {
  SILVER = 'silver',
  GOLD = 'gold',
  RUBY = 'ruby'
}

export interface UserProps {
  fireBaseId: string
  avatar: string
  firstName: string
  lastName: string
  email: string
  txtPhone: string
  gender: string
  address: string
  addressName: string
  floor: string
  note: string
  dob: {
    seconds: number
    nanoseconds: number
  }
  member: MEMBERSHIP
  usedCoupon: string[]
  usedGift: string[]
}

export interface SortUserProps {
  firstName: string
  lastName: string
  email: string
  txtPhone: string
  gender: string
}

export interface UserListHeaderProps {
  header: {
    id: keyof UserProps | ''
    title: string
    width: string
    value: keyof SortUserProps
    position?: 'left' | 'center' | 'right'
  }[]
}

type TAddressList = {
  addressId: string
  addressType: string
  addressName: string
  address: string
  receiver: string
  receiverMobilePhoneNumber: string
  building: string
  note: string
}

export type TUser = {
  firstName: string
  lastName: string
  email: string
  mobilePhoneNumber: string
  gender?: Gender
  birth: string
  referCode: string
  defaultIdHomeAddress: string
  defaultIdCompanyAddress: string
  listAddress?: TAddressList[]
}

export type TUserForm = {
  selectedDataRow: TUser
  dataForm: []
}
