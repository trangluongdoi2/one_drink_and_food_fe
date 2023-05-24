import { paymentOptions } from '@/constants/order'
import { PAYMENT_METHOD } from '@/types/order'
import { Flex, Radio, Text } from '@mantine/core'
import { useState } from 'react'

const { CASH } = PAYMENT_METHOD

interface IPaymentSelectionProps {
  value: PAYMENT_METHOD
  icon: React.ReactNode
  title: string
}

const PaymentSelection = ({ value, icon: Icon, title }: IPaymentSelectionProps) => {
  return (
    <Radio
      value={value}
      color='dark'
      label={
        <Flex gap={10}>
          {Icon}
          <Text>{title}</Text>
        </Flex>
      }
    />
  )
}

const PaymentOptions = () => {
  const [value, setValue] = useState<string>(CASH)

  return (
    <Radio.Group withAsterisk value={value} onChange={setValue}>
      <Flex justify='space-between'>
        {paymentOptions.map((item, index) => (
          <PaymentSelection key={index} {...item} />
        ))}
      </Flex>
    </Radio.Group>
  )
}

export default PaymentOptions
