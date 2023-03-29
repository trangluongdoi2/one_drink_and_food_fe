import { Dispatch, SetStateAction } from 'react'

export interface IContextProviderProps {
  children: React.ReactNode
}

export interface IUserState {
  selectedRow: string[]
  setSelectedRow: Dispatch<SetStateAction<string[]>>
}

export interface IUserContext {
  state: Partial<IUserState>
  dispatch: React.Dispatch<string[]>
}
