import { Navigate, Outlet } from 'react-router-dom'
import HeaderMenu from '@/components/header'
import NavbarHeader from '@/components/navbar'
import { Box, Flex } from '@mantine/core'

const ProtectedRoute = () => {
  if (!localStorage.getItem('accessToken')) {
    return <Navigate to='/login' />
  }
  return (
    <Flex w='100%'>
      <NavbarHeader />
      <Box sx={{ width: '100%' }}>
        <HeaderMenu />
        <Outlet />
      </Box>
    </Flex>
  )
}

export default ProtectedRoute
