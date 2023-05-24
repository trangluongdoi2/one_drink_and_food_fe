import { PaymentIcon, StatusIcon, TruckIcon } from '@/assets/icon'
import CustomModal from '@/components/modal'
import { useUserFormContext } from '@/context/form-context'
import { Flex, Modal, Paper, Stack, Title } from '@mantine/core'
import OrderOption from '../../components/orderOption'
import OrderTotal from '../../components/orderTotal'
import PaymentOptions from '../../components/paymentOptions'
import ShippingSection from '../../components/shippingSection'
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
      <Stack spacing={40} px={50} py={45}>
        <Paper p={50} shadow='md' radius={10}>
          <Title size={24} mb={20}>
            Giỏ hàng của bạn
          </Title>
          <Stack spacing={20}>
            <OrderOption />
            <OrderOption />
          </Stack>
          <Title size={24} mb={20} mt={10}>
            Tổng cộng
          </Title>
          <OrderTotal />
        </Paper>

        <Stack pl={50} spacing={20}>
          <Stack spacing={10}>
            <Flex gap={10} align='center'>
              <TruckIcon />
              <Title size={24}>Tổng cộng</Title>
            </Flex>

            <ShippingSection />
          </Stack>
          <Flex gap={10} align='center'>
            <PaymentIcon />
            <Title size={24}>Phương thức thanh toán</Title>
          </Flex>
          <PaymentOptions />
          <Flex gap={10} align='center'>
            <StatusIcon />
            <Title size={24}>Trạng thái</Title>
          </Flex>
          Đã huỷ
        </Stack>
      </Stack>
    </Modal>
  )
}

export default OrderDetail
