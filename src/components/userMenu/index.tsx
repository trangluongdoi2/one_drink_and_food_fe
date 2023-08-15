import { useNavigate } from 'react-router-dom'
import { Flex, Group, Text, ActionIcon } from '@mantine/core'
import { useStyles } from './index.style'
import { LogOutIcon } from '@/assets/icon'
import AuthApi from '@/features/auth'

const UserMenu = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const authApi = new AuthApi()

  const handleLogOut = () => {
    authApi.logoutAdmin()
    navigate('/login')
  }

  return (
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
  )
}

export default UserMenu
