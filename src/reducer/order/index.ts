import { OrderState, OrderType, OrderTypeAction } from './type'

const { SET_SELECTED_ROW } = OrderType

export const initialState: OrderState = {
  selectedRow: []
}

export interface CustomerReducer {
  state: OrderState
  dispatch: React.Dispatch<OrderState>
}

export const orderReducer = (state: OrderState, { type, payload }: OrderTypeAction) => {
  switch (type) {
    case SET_SELECTED_ROW:
      return {
        ...state,
        selectedRow: payload
      }
    default:
      return {
        ...state
      }
  }
}
