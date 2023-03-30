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
  confirmColor = { color: 'blue' },
  onCancel = () => undefined,
  onConfirm
}: CustomModalProps) => {
  modals.openConfirmModal({
    title: title,
    centered: true,
    children: <Text size='sm'>{content}</Text>,
    labels: labels,
    confirmProps: confirmColor,
    onCancel: onCancel,
    onConfirm: onConfirm
  })
}

export default CustomModal
