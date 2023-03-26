export enum MEMBERSHIP {
  SILVER = 'silver',
  GOLD = 'gold',
  RUBY = 'ruby'
}

export interface UserProps {
  id: string
  avatar: string
  firstName: string
  lastName: string
  email: string
  phone: string
  gender: string
  dob: string
  member: MEMBERSHIP
}
