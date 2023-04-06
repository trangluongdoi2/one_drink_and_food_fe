import { OrderType, SetSelectedRow } from './type'

const { SET_SELECTED_ROW } = OrderType

export const setSelectedRow = (value: string[]): SetSelectedRow => ({
  type: SET_SELECTED_ROW,
  payload: value
})
