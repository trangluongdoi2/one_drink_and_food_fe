export enum OrderType {
  SET_SELECTED_ROW = 'SET_SELECTED_ROW'
}

export interface SetSelectedRow {
  type: OrderType.SET_SELECTED_ROW
  payload: string[]
}

type OrderTypeAction = SetSelectedRow

interface OrderState {
  selectedRow: string[]
}

export type { OrderTypeAction, OrderState }
