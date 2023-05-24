import { Divider, Flex, Text } from '@mantine/core'

interface IOrderTotalRowProps {
  title: string
  value: number
  withDivider?: boolean
}

const OrderTotalRow = ({ title, value, withDivider = false, ...props }: IOrderTotalRowProps) => {
  return (
    <>
      <Flex justify='space-between' my={13}>
        <Text {...props}>{title}</Text>
        <Text {...props}>{value}đ</Text>
      </Flex>
      {withDivider && <Divider color='gray.3' />}
    </>
  )
}

const OrderTotal = () => {
  const orderSummary = [
    {
      title: 'Tổng tiền sản phẩm',
      value: 200000,
      withDivider: true
    },
    {
      title: 'Phí vận chuyển',
      value: 200000,
      withDivider: true
    },
    {
      title: 'Thẻ khuyến mãi',
      value: 200000
    },
    {
      title: 'Giảm 20% giá trị đơn hàn',
      value: 200000,
      color: 'red'
    },
    {
      title: 'Giảm 50% phí ship',
      value: 200000,
      color: 'red'
    },
    {
      title: 'Thành tiền',
      value: 190000,
      size: 'lg',
      fw: 'bold'
    }
  ]
  return (
    <>
      {orderSummary.map((item, index) => (
        <OrderTotalRow key={index} {...item} />
      ))}
    </>
  )
}

export default OrderTotal
