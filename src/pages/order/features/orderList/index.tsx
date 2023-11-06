import { ActiveDeleteIcon, DeleteIcon } from '@/assets/icon'
import CustomModal from '@/components/modal'
import ScreenLoader from '@/components/screenLoader'
import { useOrderContext } from '@/context/OrderContext/OrderContext'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { FirebaseService } from '@/firebase/handler'
import { setSelectedRow } from '@/reducer/order/action'
import { ActionIcon, Flex, Paper, Stack, Title } from '@mantine/core'
import { v4 as uuidv4 } from 'uuid'
import OrderTable from '../../components/OrderTable'
import { OrderFormProvider, defaultOrder, useOrderForm } from '../../form'
import { useGetAllOrders } from '../../services/hook'

const id = uuidv4()
interface OrderListProps {
  title: string
  query: string
}

const OrderList = ({ title }: OrderListProps) => {
  const { deleteById } = FirebaseService
  const { data: orderData, isLoading } = useGetAllOrders()

  console.log({ orderData })

  const form = useOrderForm({
    initialValues: {
      selectedDataRow: defaultOrder,
      dataForm: []
    }
  })
  const { selectedRow, dispatch } = useOrderContext()
  const isEmpty = selectedRow.length === 0

  const openDeleteModal = () =>
    CustomModal({
      title: 'Xoá thông tin',
      content: 'Bạn có muốn xoá thông tin đã được chọn không ?',
      onConfirm: () => {
        handleDeleteOrder(selectedRow)
      }
    })

  const openNothingModal = () =>
    CustomModal({
      title: 'Thông báo',
      content: 'Không có đơn hàng nào được chọn',
      // onConfirm: () => handleAddItem()
      onConfirm: () => null
    })

  const handleDeleteOrder = (list: string[]) => {
    list.forEach((item) => deleteById(FIREBASE_COLLECTION.ORDERS, item))
    dispatch(setSelectedRow([]))
  }

  if (isLoading) return <ScreenLoader visible={isLoading} />

  return (
    <Paper p={40} sx={(theme) => ({ backgroundColor: theme.colors.dark[0] })}>
      <Stack spacing={20}>
        <Flex mr={10} justify='space-between'>
          <Title variant='h3' size={24}>
            {title}
          </Title>
          <Flex gap={20}>
            <ActionIcon onClick={!isEmpty ? openDeleteModal : openNothingModal} disabled={isEmpty}>
              {isEmpty ? <DeleteIcon /> : <ActiveDeleteIcon />}
            </ActionIcon>
          </Flex>
        </Flex>
        <OrderFormProvider form={form}>
          <Paper p={40} radius={10} shadow='md'>
            <OrderTable data={orderData ?? []} />
          </Paper>
        </OrderFormProvider>
      </Stack>
    </Paper>
  )
}

export default OrderList
