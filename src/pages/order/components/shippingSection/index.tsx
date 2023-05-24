import { Divider, Text } from '@mantine/core'
import AddressRow from '../addressRow'

const ShippingSection = () => {
  const inforList = [
    {
      title: 'Họ tên người nhận',
      content: 'Nguyễn Trung Tín'
    },
    {
      title: 'Điện thoại liên hệ',
      content: '0933220078'
    },
    {
      title: 'Ghi chú thêm',
      content: 'Giao hàng qua địa chỉ, gọi trước khi giao 30ph giúp em!'
    }
  ]
  return (
    <>
      <Text fw='bold' size='lg'>
        Địa chỉ giao hàng
      </Text>
      <Text size='lg'>1002 Tạ Quang Bửu, Phường 6, Quận 8, Thành phố Hồ Chí Minh</Text>
      <Divider />
      <Text fw='bold' size='lg'>
        Thời gian nhận hàng
      </Text>
      <Text size='lg'>2/1/2023 - Khung trưa chiều (13:00 - 16:00)</Text>
      {inforList.map((item, index) => (
        <AddressRow {...item} key={index} />
      ))}
    </>
  )
}

export default ShippingSection
