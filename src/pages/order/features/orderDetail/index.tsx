import { Modal, Paper, Stack, Text, clsx } from '@mantine/core'
import { useUserFormContext } from '@/context/form-context'
import CustomModal from '@/components/modal'
import { useState } from 'react'
import { useStyles } from './index.style'

interface DetailModalProps {
  opened: boolean
  close: () => void
}

const OrderDetail = ({ opened, close }: DetailModalProps) => {
  const form = useUserFormContext()
  const { classes } = useStyles()

  // Modal check saved state, if not reset state and close modal
  const openNotSubmitModal = () =>
    CustomModal({
      title: 'Thông báo',
      content: 'Bạn chưa cập nhật những thay đổi',
      labels: { confirm: 'Tiếp tục', cancel: 'Trở về' },
      onConfirm: () => {
        close()
        form.reset()
      }
    })

  return (
    <Modal
      opened={opened}
      onClose={() => {
        form.isDirty() ? openNotSubmitModal() : close()
      }}
      centered
      padding={0}
      size='75%'
      withCloseButton={false}
      radius={10}
      shadow='md'
    >
      <Paper px={50} pt={7} pb={45}>
        <Stack spacing={40}>
          <Paper p={50}>
            <Text>Giỏ hàng của bạn</Text>
          </Paper>

          <Text>Giao hàng</Text>
        </Stack>
      </Paper>
    </Modal>
  )
}

export default OrderDetail
