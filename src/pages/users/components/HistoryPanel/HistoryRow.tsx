import { getStatus } from '@/utils/getStatus'
import { Divider, Flex, Stack, Text } from '@mantine/core'
import { FC } from 'react'

interface IHistoryRowProps {
  id: string
  price: number
  date: string
  status: string
}

export const HistoryRow: FC<IHistoryRowProps> = ({ id, price, date, status }) => {
  const historyStatus = getStatus(status)
  return (
    <Stack spacing={10} px={20} py={10}>
      <Flex justify='space-between'>
        <Text size={14} fw={700}>
          MÃ ĐƠN: {id}
        </Text>
        <Text size='xs'>{price} đ</Text>
      </Flex>
      <Flex justify='space-between'>
        <Text size='xs'>{date}</Text>
        <Text size='xs' fw='bold' color='red'>
          {historyStatus?.title}
        </Text>
      </Flex>
      <Divider />
    </Stack>
  )
}
