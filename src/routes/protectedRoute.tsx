import { Outlet } from 'react-router-dom'
import { Box, Flex } from '@mantine/core'
import HeaderMenu from '@/components/header'
import NavbarHeader from '@/components/navbar'

const ProtectedRoute = () => {
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
