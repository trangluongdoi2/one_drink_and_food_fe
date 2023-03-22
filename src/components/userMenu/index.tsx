import { Button, Group } from '@mantine/core'
import { useStyles } from './index.style'
import UserAvatar from './userAvatar'

const UserMenu = () => {
  const isAuthenticated = localStorage.getItem('accessToken')
  const handleLoginButton = () => console.log('uioafhiad', isAuthenticated)
  const { classes } = useStyles()

  return !isAuthenticated ? (
    <Group position='center' grow pb='xl' px='md'>
      <Button variant='default' onClick={handleLoginButton}>
        Log in
      </Button>
      <Button>Sign up</Button>
    </Group>
  ) : (
    <Group className={classes.hiddenMobile}>
      <UserAvatar />
    </Group>
  )
}

export default UserMenu
