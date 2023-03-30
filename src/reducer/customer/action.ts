import {
  CustomerType,
  SetFirstName,
  SetLastName,
  SetEmail,
  SetTxtPhone,
  SetGender,
  SetDob,
  Gender,
  SetSelectedRow
} from './type'

const { SET_FIRST_NAME, SET_LAST_NAME, SET_DOB, SET_EMAIL, SET_GENDER, SET_TXT_PHONE, SET_SELECTED_ROW } = CustomerType

export const setFirstName = (value: string): SetFirstName => ({
  type: SET_FIRST_NAME,
  payload: value
})

export const setLastName = (value: string): SetLastName => ({
  type: SET_LAST_NAME,
  payload: value
})

export const setTxtPhone = (value: string): SetTxtPhone => ({
  type: SET_TXT_PHONE,
  payload: value
})

export const setEmail = (value: string): SetEmail => ({
  type: SET_EMAIL,
  payload: value
})

export const setGender = (value: Gender): SetGender => ({
  type: SET_GENDER,
  payload: value
})

export const setDob = (value: SetDob['payload']): SetDob => ({
  type: SET_DOB,
  payload: value
})

export const setSelectedRow = (value: string[]): SetSelectedRow => ({
  type: SET_SELECTED_ROW,
  payload: value
})
