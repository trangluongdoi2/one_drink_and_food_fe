import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import AuthApi from '@/features/auth'

type User = {
  username: string
  photoURL?: string
  displayName?: string
  email?: string
}

const initialAuthContext = {
  user: {
    username: 'admin',
    photoURL: ''
  } as User
}
export const AuthContext = createContext(initialAuthContext)

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>()

  const value = useMemo(() => ({ user, setUser }), [user])

  const loginAdmin = async () => {
    const authApi = new AuthApi()
    const input = {
      username: 'admin',
      password: '1'
    }
    const data = await authApi.loginAdmin(input)
    const user = { ...data.adminInfo } as User
    setUser(user)
  }

  useEffect(() => {
    loginAdmin().catch((err) => console.error(err))
  }, [])

  // @ts-ignore
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthProvider
