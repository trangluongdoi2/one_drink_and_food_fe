import { BankingIcon, CashIcon, MomoIcon, ZaloIcon } from '@/assets/icon'
import { PAYMENT_METHOD } from '@/types/order'
import { Flex, Text } from '@mantine/core'

const { CASH, MOMO, ZALO, BANKING } = PAYMENT_METHOD

export const paymentOptions = [
  {
    value: CASH,
    icon: <CashIcon />,
    title: 'Tiền mặt',
    label: (
      <Flex gap={10}>
        <CashIcon />
        <Text>Tiền mặt</Text>
      </Flex>
    )
  },
  {
    value: MOMO,
    icon: <MomoIcon />,
    title: 'Momo',
    label: (
      <Flex gap={10}>
        <MomoIcon />
        <Text>Momo</Text>
      </Flex>
    )
  },
  {
    value: ZALO,
    icon: <ZaloIcon />,
    title: 'ZaloPay',
    label: (
      <Flex gap={10}>
        <ZaloIcon />
        <Text>ZaloPay</Text>
      </Flex>
    )
  },
  {
    value: BANKING,
    icon: <BankingIcon />,
    title: 'Thẻ ngân hàng',
    label: (
      <Flex gap={10}>
        <BankingIcon />
        <Text>Thẻ ngân hàng</Text>
      </Flex>
    )
  }
]
