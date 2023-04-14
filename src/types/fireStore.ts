import { MEMBERSHIP } from './user'

export interface FirebaseUserProps {
  address: string
  dob: {
    nanoseconds: number
    seconds: number
  }
  email: string
  firstName: string
  lastName: string
  gender: string
  member: MEMBERSHIP
  txtPhone: string
}

export interface QueryType {
  key: string
  params: string
}
