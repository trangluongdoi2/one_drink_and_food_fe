import { notifications } from '@mantine/notifications'

type TNotify = {
  message: string | null
  type: 'success' | 'error'
  title: string
}

export const notify = ({ message, type = 'success', title = '' }: Partial<TNotify>) => {
  notifications.show({
    title: title,
    message: message,
    autoClose: 3000,
    color: type === 'success' ? 'dark' : 'red',
    withCloseButton: true
  })
}
