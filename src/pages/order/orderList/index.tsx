import { ActionIcon, Center, Flex, Loader, Paper, Stack, Title, Text } from '@mantine/core'
import { DeleteIcon } from '@/assets/icon'
import { useFetchOrder } from '@/hook/useFetchOrder'
import OrderTable from '../components/orderTable'
import CustomModal from '@/components/modal'
import { useOrderContext } from '@/context/OrderContext/OrderContext'
import { deleteItem, setItem } from '@/firebase/handler'
import { setSelectedRow } from '@/reducer/order/action'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { v4 as uuidv4 } from 'uuid'

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

const OrderList = ({ title, query }: { title: string; query: string }) => {
  const { loading, orderData } = useFetchOrder(query)

  const { selectedRow, dispatch } = useOrderContext()

  const handleAddItem = async () => {
    setItem(FIREBASE_COLLECTION.ORDERS, mockData, id)
  }

  const openDeleteModal = () =>
    CustomModal({
      title: 'Xoá thông tin',
      content: 'Bạn có muốn xoá thông tin các đơn hàng được chọn không ?',
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
    list.forEach((item) => deleteItem(FIREBASE_COLLECTION.ORDERS, item))
    dispatch(setSelectedRow([]))
  }

  return (
    <Paper p={40} sx={{ backgroundColor: '#f5f5f5' }}>
      <Stack spacing={20}>
        <Flex mr={10} justify='space-between'>
          <Title variant='h3' size={24}>
            {title}
          </Title>
          <Flex gap={20}>
            <ActionIcon onClick={selectedRow.length ? openDeleteModal : openNothingModal}>
              <DeleteIcon />
            </ActionIcon>
          </Flex>
        </Flex>

        {loading ? (
          <Paper p={40} radius={10} shadow='md'>
            <Center>
              <Loader variant='dots' />
            </Center>
          </Paper>
        ) : (
          <Paper p={40} radius={10} shadow='md'>
            {orderData && orderData.length > 0 ? (
              <OrderTable data={orderData} />
            ) : (
              <Center>
                <Stack justify='center'>
                  <Text align='center'>Danh sách khách hàng trống</Text>
                </Stack>
              </Center>
            )}
          </Paper>
        )}
      </Stack>
    </Paper>
  )
}

export default OrderList
