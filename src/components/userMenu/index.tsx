import { useNavigate } from 'react-router-dom'
import { Flex, Group, Text, ActionIcon } from '@mantine/core'
import { logout } from '@/firebase/authenticate'
import { LogOutIcon } from '@/assets/icon'
import AuthApi from '@/features/auth'
import { useAuthContext } from '@/context/AuthContext/AuthContext'
import { useStyles } from './index.style'

const UserMenu = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const authApi = new AuthApi()

  const { user } = useAuthContext()
  const isAuthenticated = localStorage.getItem('accessToken')

  // const handleLogOut = () => {
  //   authApi.logoutAdmin()
  //   navigate('/login')
  // }

  // revert to firebase
  const handleLogOut = () => logout(user)

  return isAuthenticated ? (
    <Group className={classes.hiddenMobile}>
      <Flex gap={20} align='center'>
        <Text variant='h4' size='sm' fw={700}>
          Chào Admin!
        </Text>
        <ActionIcon onClick={handleLogOut}>
          <LogOutIcon />
        </ActionIcon>
      </Flex>
    </Group>
  ) : null
}

export default UserMenu
