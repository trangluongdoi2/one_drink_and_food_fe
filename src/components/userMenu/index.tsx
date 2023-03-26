import { Button, Flex, Grid, Group, Stack, Text, ActionIcon } from '@mantine/core'
import { useStyles } from './index.style'
import { LogOutIcon } from '@/assets/icon'
import { logout } from '@/firebase/authenticate'
import { useAuthContext } from '@/context/AuthContext/AuthContext'

const UserMenu = () => {
  const isAuthenticated = localStorage.getItem('accessToken')
  const { classes } = useStyles()
  const { user } = useAuthContext()

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
