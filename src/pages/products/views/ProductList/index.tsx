import { ActionIcon, Center, Flex, Loader, Paper, Stack, Title, Text, Grid } from '@mantine/core'
import { DeleteIcon, ActiveDeleteIcon } from '@/assets/icon'
import { useFetchOrder } from '@/pages/order/services/useFetchOrder'
import ProductTable from '../../components/ProductTable'
import CustomModal from '@/components/modal'
import { useOrderContext } from '@/context/OrderContext/OrderContext'
import { FirebaseService } from '@/firebase/handler'
import { setSelectedRow } from '@/reducer/order/action'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { v4 as uuidv4 } from 'uuid'
import CustomCheckBox from '@/components/checkBox'
import { useState } from 'react'
import { ProductGroup } from '@/types/product'

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

const ProductList = ({ title, query }: OrderListProps) => {
  const { loading, orderData } = useFetchOrder({ key: 'status', params: query })
  const { createWithCustomKey, deleteById } = FirebaseService

  const { selectedRow, dispatch } = useOrderContext()
  const [selectedOption, setSelectedOption] = useState<string[]>([])
  const isEmpty = selectedRow.length === 0
  console.log(selectedOption)

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
    list.forEach((item) => deleteById(FIREBASE_COLLECTION.ORDERS, item))
    dispatch(setSelectedRow([]))
  }

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

        <Grid>
          <Grid.Col span={6}>
            <CustomCheckBox
              title='Nước ép'
              value={ProductGroup.JUICE}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <CustomCheckBox
              title='Cà phê'
              value={ProductGroup.COFFEE}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <CustomCheckBox
              title='Vật phẩm'
              value={ProductGroup.ITEM}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <CustomCheckBox
              title='Sinh tố'
              value={ProductGroup.SMOOTHY}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <CustomCheckBox
              title='Trà'
              value={ProductGroup.TEA}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <CustomCheckBox
              title='Yogurt'
              value={ProductGroup.YOGURT}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <CustomCheckBox
              title='Nước ép'
              value={ProductGroup.JUICE}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </Grid.Col>
        </Grid>

        {loading ? (
          <Paper p={40} radius={10} shadow='md'>
            <Center>
              <Loader variant='dots' />
            </Center>
          </Paper>
        ) : (
          <Paper p={40} radius={10} shadow='md'>
            {orderData && orderData.length > 0 ? (
              <ProductTable data={orderData} />
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

export default ProductList
