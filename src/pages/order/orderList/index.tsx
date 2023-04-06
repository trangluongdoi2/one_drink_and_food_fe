import { ActionIcon, Center, Flex, Loader, Paper, Stack, Title, Text } from '@mantine/core'
import { DeleteIcon } from '@/assets/icon'
import { useFetchOrder } from '@/hook/useFetchOrder'
import OrderTable from '../components/orderTable'

const OrderList = ({ title, query }: { title: string; query: string }) => {
  const { loading, orderData } = useFetchOrder(query)

  return (
    <Paper p={40} sx={{ backgroundColor: '#f5f5f5' }}>
      <Stack spacing={20}>
        <Flex mr={10} justify='space-between'>
          <Title variant='h3' size={24}>
            {title}
          </Title>
          <Flex gap={20}>
            <ActionIcon>
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
