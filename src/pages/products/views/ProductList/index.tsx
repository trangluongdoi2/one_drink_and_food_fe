import { ActionIcon, Center, Flex, Loader, Paper, Stack, Title, Text, Grid } from '@mantine/core'
import { DeleteIcon, ActiveDeleteIcon } from '@/assets/icon'
import ProductTable from '../../components/ProductTable'
import CustomModal from '@/components/modal'
import { useOrderContext } from '@/context/OrderContext/OrderContext'
import { FirebaseService } from '@/firebase/handler'
import { setSelectedRow } from '@/reducer/order/action'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import CustomCheckBox from '@/components/checkBox'
import { useEffect, useState } from 'react'
import { ProductGroup } from '@/types/product'
import { useFetchProduct } from '../../services/useFetchProduct'
import { v4 as uuidv4 } from 'uuid'
import { checkList } from '@/constants/tabList'

interface ProductListProps {
  title: string
  query: string
}
const id = uuidv4()

const mock = {
  amount: 400,
  code: 'EL-D',
  group: ProductGroup.COFFEE,
  mlAndPrice: [
    {
      ml: '250ml',
      price: {
        import: 30000,
        sale: 35000
      }
    },
    {
      ml: '350ml',
      price: {
        import: 30000,
        sale: 35000
      }
    }
  ],
  name: 'Cà phê',
  photo: [''],
  status: '',
  type: 'Cà phê đen'
}

const ProductList = ({ title, query }: ProductListProps) => {
  const { deleteById, createWithCustomKey } = FirebaseService

  const { selectedRow, dispatch } = useOrderContext()
  const [selectedOption, setSelectedOption] = useState<string[]>([])
  const isEmpty = selectedRow.length === 0
  const { loading, productData } = useFetchProduct({
    key: 'group',
    params: selectedOption,
    selectedOption: selectedOption
  })

  const openDeleteModal = () =>
    CustomModal({
      title: 'Xoá thông tin',
      content: 'Bạn có muốn xoá thông tin đã được chọn không ?',
      onConfirm: () => {
        handleDeleteProduct(selectedRow)
      }
    })

  const handleAddItem = async () => {
    createWithCustomKey(FIREBASE_COLLECTION.PRODUCTS, mock, id)
  }

  const openNothingModal = () =>
    CustomModal({
      title: 'Thông báo',
      content: 'Không có sản phẩm nào được chọn',
      onConfirm: () => handleAddItem()
      // onConfirm: () => null
    })

  const handleDeleteProduct = (list: string[]) => {
    list.forEach((item) => deleteById(FIREBASE_COLLECTION.PRODUCTS, item))
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
            <ActionIcon onClick={!isEmpty ? openDeleteModal : openNothingModal}>
              {isEmpty ? <DeleteIcon /> : <ActiveDeleteIcon />}
            </ActionIcon>
          </Flex>
        </Flex>

        <Grid>
          {checkList.map(({ title, value }, index) => (
            <Grid.Col span={6} key={index}>
              <CustomCheckBox
                title={title}
                value={value}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </Grid.Col>
          ))}
        </Grid>

        {loading ? (
          <Paper p={40} radius={10} shadow='md'>
            <Center>
              <Loader variant='dots' />
            </Center>
          </Paper>
        ) : (
          <Paper p={40} radius={10} shadow='md'>
            {productData && productData.length > 0 ? (
              <ProductTable data={productData} />
            ) : (
              <Center>
                <Stack justify='center'>
                  <Text align='center'>Danh sách sản phẩm trống</Text>
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
