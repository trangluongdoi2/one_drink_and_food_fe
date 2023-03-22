import { useAuthContext } from '@/context/AuthContext/AuthContext'
import { Button, ButtonProps } from '@mantine/core'
import { IconLogout } from '@tabler/icons-react'
import { logout } from '@/firebase/authenticate'

export const LogoutButton = (props: ButtonProps) => {
  const { user } = useAuthContext()
  const handleLogout = () => logout(user)

  return (
    <Button onClick={handleLogout} leftIcon={<IconLogout size={16} />} {...props}>
      Log out
    </Button>
  )
}
