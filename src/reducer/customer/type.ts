export enum CustomerType {
  SET_FIRST_NAME = 'SET_FIRST_NAME',
  SET_LAST_NAME = 'SET_LAST_NAME',
  SET_EMAIL = 'SET_EMAIL',
  SET_TXT_PHONE = 'SET_TXT_PHONE',
  SET_GENDER = 'SET_GENDER',
  SET_DOB = 'SET_DOB',
  SET_SELECTED_ROW = 'SET_SELECTED_ROW'
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}

export interface SetFirstName {
  type: CustomerType.SET_FIRST_NAME
  payload: string
}

export interface SetLastName {
  type: CustomerType.SET_LAST_NAME
  payload: string
}

export interface SetEmail {
  type: CustomerType.SET_EMAIL
  payload: string
}

export interface SetTxtPhone {
  type: CustomerType.SET_TXT_PHONE
  payload: string
}

export interface SetGender {
  type: CustomerType.SET_GENDER
  payload: Gender
}

export interface SetDob {
  type: CustomerType.SET_DOB
  payload: {
    seconds: number
    nanoseconds: number
  }
}

export interface SetSelectedRow {
  type: CustomerType.SET_SELECTED_ROW
  payload: string[]
}

type CustomerTypeAction = SetFirstName | SetLastName | SetEmail | SetTxtPhone | SetGender | SetDob | SetSelectedRow

interface CustomerState {
  firstName: string
  lastName: string
  gender: Gender
  txtPhone: string
  email: string
  dob: {
    seconds: number
    nanoseconds: number
  }
  selectedRow: string[]
}

export type { CustomerTypeAction, CustomerState }
