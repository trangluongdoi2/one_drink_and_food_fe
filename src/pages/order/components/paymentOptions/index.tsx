import { paymentOptions } from '@/constants/order'
import { PAYMENT_METHOD } from '@/types/order'
import { Flex, Image, Radio, Text } from '@mantine/core'
import { useState } from 'react'

const { CASH } = PAYMENT_METHOD

interface IPaymentSelectionProps {
  value: PAYMENT_METHOD
  icon: string
  title: string
}

const PaymentSelection = ({ value, icon, title }: IPaymentSelectionProps) => {
  return (
    <Radio
      value={value}
      color='dark'
      label={
        <Flex gap={10} w='100%' justify='center' align='center'>
          <Image alt='logo' src={icon} w={25} fit='contain' />
          <Text transform='full-width' style={{ whiteSpace: 'nowrap' }} size='md' lh={1}>
            {title}
          </Text>
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
