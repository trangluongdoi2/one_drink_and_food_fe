import React, { Fragment } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import HeaderMenu from '@/components/header'

const ProtectedRoute = () => {
  if (!localStorage.getItem('accessToken')) {
    return <Navigate to='/login' />
  }
  return (
    <Fragment>
      <HeaderMenu />
      <Outlet />
    </Fragment>
  )
}

export default ProtectedRoute
