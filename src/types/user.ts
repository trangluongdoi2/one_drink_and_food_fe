import { SortingProps } from './table'
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
  dob: {
    seconds: number
    nanoseconds: number
  }
  member: MEMBERSHIP
}

export interface SortUserProps {
  firstName: string
  lastName: string
  email: string
  txtPhone: string
  gender: string
}

export interface UserHeaderProps extends UserProps {
  checkbox: string
  tool: string
}

export interface UserListHeaderProps extends SortingProps {
  header: {
    id: keyof UserProps | ''
    title: string
    width: string
    value: keyof SortUserProps
    position?: 'left' | 'center' | 'right'
  }[]
}
