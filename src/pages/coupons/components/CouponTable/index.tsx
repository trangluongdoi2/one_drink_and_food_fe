import { ActiveEditIcon, DefaultAvatar } from '@/assets/icon'
import Table from '@/components/table/table'
import { TColumnsProps } from '@/components/table/table/type'
import { TCouponType } from '@/types/coupon'
import { ActionIcon, Avatar, Text } from '@mantine/core'
import { FC } from 'react'
import { CouponFormProvider, useCouponForm } from '../../form'

const mock = [
  {
    couponCode: 'abc',
    couponTitle: 'Coupon 1',
    couponEndDate: {
      date: '',
      time: ''
    },
    couponFreeShipping: false,
    couponNote: '',
    couponOptions: '',
    couponProductDetails: '',
    couponProductType: [],
    couponQuantity: 0,
    couponStartDate: {
      date: '',
      time: ''
    },
    couponValue: 0,
    image: ''
  },
  {
    couponCode: 'abccd',
    couponTitle: 'Coupon 2',
    couponEndDate: {
      date: '',
      time: ''
    },
    couponFreeShipping: false,
    couponNote: '',
    couponOptions: '',
    couponProductDetails: '',
    couponProductType: [],
    couponQuantity: 0,
    couponStartDate: {
      date: '',
      time: ''
    },
    couponValue: 0,
    image: ''
  }
]

type TCouponTableProps = {
  data: TCouponType[]
}

const CouponTable: FC<TCouponTableProps> = ({ data }) => {
  const form = useCouponForm({
    initialValues: {
      couponCode: '',
      couponTitle: '',
      couponEndDate: {
        date: '',
        time: ''
      },
      couponFreeShipping: false,
      couponNote: '',
      couponOptions: '',
      couponProductDetails: '',
      couponProductType: [],
      couponQuantity: 0,
      couponStartDate: {
        date: '',
        time: ''
      },
      couponValue: 0,
      image: ''
    }
  })

  const columns: TColumnsProps[] = [
    {
      id: '1111',
      title: 'Mã',
      width: '10%',
      position: 'left',
      render: (
        <Text fw='bolder' lh={1.4}>
          UUID
        </Text>
      )
    },
    {
      id: '1111222',
      title: 'Avatar',
      width: '10%',
      position: 'left',
      render: !form.getInputProps('image').value ? (
        <DefaultAvatar />
      ) : (
        <Avatar src={form.getInputProps('image').value} radius='lg' />
      )
    },
    {
      id: '1113',
      title: 'Ngày bắt đầu',
      width: '15%',
      position: 'left',
      render: <Text lh={1.4}>1/4/2023</Text>
    },
    {
      id: '1114',
      title: 'Ngày kết thúc',
      width: '15%',
      position: 'left',
      render: <Text lh={1.4}>UUID</Text>
    },
    {
      id: '1115',
      title: 'Đã sử dụng',
      width: '15%',
      position: 'left',
      render: <Text lh={1.4}>UUID</Text>
    },
    {
      id: '1116',
      title: 'Số lượng phát hành',
      width: '15%',
      position: 'left',
      render: <Text lh={1.4}>UUID</Text>
    },
    {
      id: '1117',
      title: 'Trạng thái',
      width: '10%',
      position: 'left',
      render: <Text lh={1.4}>UUID</Text>
    },
    {
      id: '1118',
      title: 'Công cụ',
      width: '5%',
      position: 'left',
      render: (
        <ActionIcon>
          <ActiveEditIcon />
        </ActionIcon>
      )
    }
  ]

  return (
    <CouponFormProvider form={form}>
      <Table data={data} columns={columns} />
    </CouponFormProvider>
  )
}

export default CouponTable
