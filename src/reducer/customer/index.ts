import { CustomerState, CustomerType, CustomerTypeAction, Gender } from './type'

const { SET_FIRST_NAME, SET_LAST_NAME, SET_EMAIL, SET_DOB, SET_SELECTED_ROW, SET_GENDER, SET_TXT_PHONE } = CustomerType

export const initialState: CustomerState = {
  firstName: '',
  lastName: '',
  email: '',
  txtPhone: '',
  gender: Gender.FEMALE,
  dob: {
    seconds: 0,
    nanoseconds: 0
  },
  selectedRow: []
}

export interface CustomerReducer {
  state: CustomerState
  dispatch: React.Dispatch<CustomerState>
}

export const customerReducer = (state: CustomerState, { type, payload }: CustomerTypeAction) => {
  switch (type) {
    case SET_FIRST_NAME:
      return {
        ...state,
        firstName: payload
      }
    case SET_LAST_NAME:
      return {
        ...state,
        lastName: payload
      }
    case SET_EMAIL:
      return {
        ...state,
        email: payload
      }
    case SET_TXT_PHONE:
      return {
        ...state,
        txtPhone: payload
      }
    case SET_GENDER:
      return {
        ...state,
        gender: payload
      }
    case SET_DOB:
      return {
        ...state,
        dob: payload
      }
    case SET_SELECTED_ROW:
      return {
        ...state,
        selectedRow: payload
      }
  }
}
