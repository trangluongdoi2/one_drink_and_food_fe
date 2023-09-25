import { ActionIcon, Center, Flex, Loader, Paper, Stack, Title, Text } from '@mantine/core'
import { DeleteIcon, ActiveDeleteIcon } from '@/assets/icon'
import OrderTable from '../../components/OrderTable'
import CustomModal from '@/components/modal'
import { useOrderContext } from '@/context/OrderContext/OrderContext'
import { FirebaseService } from '@/firebase/handler'
import { setSelectedRow } from '@/reducer/order/action'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { v4 as uuidv4 } from 'uuid'
import { OrderFormProvider, defaultOrder, useOrderForm } from '../../form'
import { useEffect } from 'react'
import { useGetOrder } from '../../services/hook'
import ScreenLoader from '@/components/screenLoader'

const id = uuidv4()

const mockData = {
  receivedDate: '07/04/2023',
  createOn: 'Thu Apr 06 2023 15:34:16 GMT+0700 (Indochina Time)',
  receivedTime: 'Buổi sáng (8:00-12:00)',
  paymentMethods: 'Bank',
  note: '',
  phone: '1515161461467',
  recipientName: 'Ngụy Tài ' + id.slice(0, 3),
  address: 'Nguyễn Thị Thâp, Quận 7, Tân Thuận, TP. Hồ Chí Minh',
  productList: {
    totalOrderValue: 90000,
    productList: [
      {
        mlAndPrice: {
          '350ml': {
            price: 45000,
            ml: '350ml'
          }
        },
        totalPrice: 45000,
        amount: 1,
        name: 'Cà Phê Đen',
        id: '0BgoOIh4CkaOHZm7ERB0',
        optionPicked: {
          cooldess: 'Ủ Lạnh',
          moreCombina: '',
          ice: '100% Đá (Bình Thường)',
          sugar: '100% Đường (Ngọt Ngây)',
          size: '350ml',
          note: ''
        }
      },
      {
        name: 'Matcha Latte',
        mlAndPrice: {
          '350ml': {
            price: 45000,
            ml: '350ml'
          }
        },
        amount: 1,
        optionPicked: {
          note: '',
          sugar: '100% Đường (Ngọt Ngây)',
          size: '350ml',
          cooldess: 'Ủ Lạnh',
          moreCombina: '',
          ice: '100% Đá (Bình Thường)'
        },
        totalPrice: 45000,
        id: '92FUmp7n4n5ZsuosLZms'
      }
    ],
    totalProductList: 2,
    _persist: {
      rehydrated: true,
      version: -1
    }
  },
  fireBaseId: id,
  status: 'paymenting',
  termsOfService: true
}

interface OrderListProps {
  title: string
  query: string
}

const OrderList = ({ title, query }: OrderListProps) => {
  const { data, loading } = useGetOrder({ key: 'status', params: query })
  const { createWithCustomKey, deleteById } = FirebaseService

  const form = useOrderForm({
    initialValues: {
      selectedOrder: defaultOrder,
      orderData: []
    }
  })
  const { selectedRow, dispatch } = useOrderContext()
  const isEmpty = selectedRow.length === 0

  const handleAddItem = async () => {
    createWithCustomKey(FIREBASE_COLLECTION.ORDERS, mockData, id)
  }

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
    // list.forEach((item) => deleteById(FIREBASE_COLLECTION.ORDERS, item))
    // dispatch(setSelectedRow([]))
  }

  if (loading) return <ScreenLoader visible={loading} />

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
          <form
            onSubmit={form.onSubmit(() => {
              console.log('submit...')
            })}
          >
            <Paper p={40} radius={10} shadow='md'>
              <OrderTable data={data ?? []} />
            </Paper>
          </form>
        </OrderFormProvider>
      </Stack>
    </Paper>
  )
}

export default OrderList
