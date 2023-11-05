import { modals } from '@mantine/modals'
import { Text } from '@mantine/core'

interface CustomModalProps {
  labels?: {
    confirm: string
    cancel: string
  }
  title: string
  content: string
  confirmColor?: { color: string }
  children?: any
  onCancel?: () => undefined
  onConfirm: () => void
}

const CustomModal = ({
  labels = {
    confirm: 'Đồng ý',
    cancel: 'Hủy bỏ'
  },
  title,
  content,
  children,
  confirmColor = { color: 'dark' },
  onCancel = () => undefined,
  onConfirm
}: CustomModalProps) => {
  modals.openConfirmModal({
    title: title,
    centered: true,
    children: children ? children : <Text size='sm'>{content}</Text>,
    labels: labels,
    confirmProps: confirmColor,
    closeOnCancel: true,
    onCancel: onCancel,
    onConfirm: onConfirm
  })
}

export default CustomModal
