import React from 'react'

interface IAppContextProps {
  children: React.ReactNode
}

export const AppContext = ({ children }: IAppContextProps) => {
  return <React.Suspense fallback={<div>Loading</div>}>{children}</React.Suspense>
}
