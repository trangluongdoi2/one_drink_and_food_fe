import { Modal, useMantineTheme, Text } from '@mantine/core'
import { SetStateAction } from 'react'

interface ErrorModalProps {
  opened: boolean
  setOpened: React.Dispatch<SetStateAction<boolean>>
  message: string
}

const ErrorModal = ({ opened, setOpened, message }: ErrorModalProps) => {
  const theme = useMantineTheme()

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title='Notifications'
      overlayProps={{
        color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3
      }}
    >
      <Text variant='h6' color='red'>
        {message}
      </Text>
    </Modal>
  )
}

export default ErrorModal
