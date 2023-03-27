import { Navigate, Outlet } from 'react-router-dom'
import HeaderMenu from '@/components/header'
import NavbarHeader from '@/components/navbar'
import { Box } from '@mantine/core'

const ProtectedRoute = () => {
  if (!localStorage.getItem('accessToken')) {
    return <Navigate to='/login' />
  }
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <NavbarHeader />
      <Box sx={{ width: '100%' }}>
        <HeaderMenu />
        <Outlet />
      </Box>
    </Box>
  )
}

export default ProtectedRoute
