import { Dispatch, SetStateAction } from 'react'

export interface ICustomerState {
  selectedRow: string[]
  setSelectedRow: Dispatch<SetStateAction<string[]>>
}

export interface ICustomerContext {
  state: Partial<ICustomerState>
  dispatch: React.Dispatch<string[]>
}
