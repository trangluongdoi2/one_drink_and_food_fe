import React, { createContext, useContext, useMemo, useState } from 'react'
import { IContextProviderProps, IUserState } from '@/types/context'

const initialUserContext: IUserState = {
  selectedRow: [],
  setSelectedRow: () => []
}

export const UserContext = createContext<IUserState>(initialUserContext)

const UserContextProvider = ({ children }: IContextProviderProps) => {
  const [selectedRow, setSelectedRow] = useState<string[]>([])

  const value = useMemo(() => ({ selectedRow, setSelectedRow }), [selectedRow])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext)

export default UserContextProvider
