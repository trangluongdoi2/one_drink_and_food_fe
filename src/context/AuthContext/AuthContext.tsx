import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import AuthApi from '@/features/auth'

const initialAuthContext = {
  user: {
    username: 'admin',
    password: '1'
  }
}
export const AuthContext = createContext(initialAuthContext)

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null)

  const value = useMemo(() => ({ user, setUser }), [user])

  const loginAdmin = async () => {
    const authApi = new AuthApi()
    const data = await authApi.loginAdmin(initialAuthContext.user as any)
  }

  useEffect(() => {
    loginAdmin().catch((err) => console.error(err))
  }, [])

  // @ts-ignore
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthProvider
