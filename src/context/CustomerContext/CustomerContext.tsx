import { createContext, useContext, useMemo, useReducer, useState } from 'react'
import { IContextProviderProps } from '@/types/context'
import { customerReducer, initialState as initialCustomerState } from '@/reducer/customer'
import { CustomerState, CustomerTypeAction } from '@/reducer/customer/type'
interface CustomerContextDefault extends CustomerState {
  dispatch: React.Dispatch<CustomerTypeAction>
}

const initialCustomerContext: CustomerContextDefault = {
  ...initialCustomerState,
  dispatch: () => null
}

export const CustomerContext = createContext<CustomerContextDefault>(initialCustomerContext)

const CustomerContextProvider = ({ children }: IContextProviderProps) => {
  const [state, dispatch] = useReducer(customerReducer, initialCustomerState)

  const value = useMemo(() => ({ ...state, dispatch }), [state])

  return <CustomerContext.Provider value={value}>{children}</CustomerContext.Provider>
}

export const useCustomerContext = () => useContext(CustomerContext)

export default CustomerContextProvider
