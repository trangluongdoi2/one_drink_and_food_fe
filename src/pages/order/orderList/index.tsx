import { ActionIcon, Flex, Paper, Stack, Title } from '@mantine/core'
import { DeleteIcon } from '@/assets/icon'

const OrderList = () => {
  return (
    <Paper p={40} sx={{ backgroundColor: '#f5f5f5' }}>
      <Stack spacing={20}>
        <Flex mr={10} justify='space-between'>
          <Title variant='h3' size={24}>
            Danh sách đơn hàng
          </Title>
          <Flex gap={20}>
            <ActionIcon>
              <DeleteIcon />
            </ActionIcon>
          </Flex>
        </Flex>

        <Paper p={40} radius={10} shadow='md'>
          <Stack spacing={15}></Stack>
        </Paper>
      </Stack>
    </Paper>
  )
}

export default OrderList
