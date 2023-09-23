import { ActiveDeleteIcon, DeleteIcon } from '@/assets/icon'
import { DragDropGridHandler } from '@/components/DragDropGridHandler'
import CustomCheckBox from '@/components/checkBox'
import CustomModal from '@/components/modal'
import { checkList } from '@/constants/tabList'
import { useOrderContext } from '@/context/OrderContext/OrderContext'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { FirebaseService } from '@/firebase/handler'
import { setSelectedRow } from '@/reducer/order/action'
import { ProductGroup } from '@/types/product'
import { ActionIcon, Box, Center, Flex, Loader, Paper, Stack, Text, Title } from '@mantine/core'
import { useState } from 'react'
import { GridItem, swap } from 'react-grid-dnd'
import { v4 as uuidv4 } from 'uuid'
import ProductTable from '../../components/ProductTable'
import { useFetchProduct } from '../../services/useFetchProduct'
import { DragDropGridConfigs } from '@/components/DragDropGridHandler/type'

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
  const [items, setItems] = useState<Array<Record<string, any>>>(checkList)

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

  const configs: DragDropGridConfigs = {
    boxesPerRow: 2,
    height: 100,
    totalItems: items.length
  }

  const onChange = (sourceId: string, sourceIndex: number, targetIndex: number) => {
    const nextState = swap(items, sourceIndex, targetIndex)
    setItems(nextState)
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
        <DragDropGridHandler configs={configs} onChange={onChange}>
          {items.map((item: any, index: number) => (
            <GridItem key={index}>
              <Box sx={{ height: '80px', marginRight: '20px', marginBottom: '20px' }}>
                <CustomCheckBox
                  key={item.id}
                  title={item.title}
                  value={item.value}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              </Box>
            </GridItem>
          ))}
        </DragDropGridHandler>
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
