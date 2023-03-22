import { useAuthContext } from '@/context/AuthContext/AuthContext'
import { Avatar, Group, UnstyledButton, Text, Stack, Menu } from '@mantine/core'
import { IconSettings, IconSwitchHorizontal } from '@tabler/icons-react'
import { LogoutButton } from '@/components/button'
const UserAvatar = () => {
  const { user } = useAuthContext()

  return (
    <Menu shadow='md' width={250}>
      <Menu.Target>
        <UnstyledButton>
          <Group>
            <Avatar size={32} src={user?.photoURL} color='blue' radius={50} />
            <Stack spacing={0}>
              <Text fz='sm' tt='capitalize' fw={700}>
                {user?.displayName}
              </Text>
              <Text size='xs' color='dimmed'>
                {user?.email}
              </Text>
            </Stack>
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Information</Menu.Label>
        <Stack spacing={1}>
          <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
          <Menu.Item icon={<IconSwitchHorizontal size={14} />}>Switch Account</Menu.Item>
          <Menu.Label>Log out</Menu.Label>
          <Menu.Item>
            <LogoutButton color='red' fullWidth />
          </Menu.Item>
        </Stack>
      </Menu.Dropdown>
    </Menu>
  )
}

export default UserAvatar
