import { Gender } from '@/reducer/customer/type'
import { TUser } from '@/types/user'

export const defaultUser: TUser = {
  firstName: '',
  lastName: '',
  email: '',
  mobilePhoneNumber: '',
  birthDay: '',
  gender: Gender.MALE,
  referCode: '',
  defaultIdHomeAddress: '',
  defaultIdCompanyAddress: '',
  listAddress: []
}
