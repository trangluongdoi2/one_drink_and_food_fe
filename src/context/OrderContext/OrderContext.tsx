import { createContext, useContext, useMemo, useReducer } from 'react'
import { IContextProviderProps } from '@/types/context'
import { orderReducer, initialState as initialOrderState } from '@/reducer/order'
import { OrderState, OrderTypeAction } from '@/reducer/order/type'
interface OrderContextDefault extends OrderState {
  dispatch: React.Dispatch<OrderTypeAction>
}

const initialOrderContext: OrderContextDefault = {
  ...initialOrderState,
  dispatch: () => null
}

export const OrderContext = createContext<OrderContextDefault>(initialOrderContext)

const OrderContextProvider = ({ children }: IContextProviderProps) => {
  const [state, dispatch] = useReducer(orderReducer, initialOrderState)

  const value = useMemo(() => ({ ...state, dispatch }), [state])

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}

export const useOrderContext = () => useContext(OrderContext)

export default OrderContextProvider
