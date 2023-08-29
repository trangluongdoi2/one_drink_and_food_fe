import { DefaultAvatar, OneActiveIcon } from '@/assets/icon'
import Table from '@/components/table/table'
import RowInput from '@/components/table/table/rowInput'
import { TColumnsProps } from '@/components/table/table/type'
import { TCouponType } from '@/types/coupon'
import { Avatar } from '@mantine/core'
import { FC, useState } from 'react'
import { CouponFormProvider, defaultCoupon, useCouponForm } from '../../form'

type TCouponTableProps = {
  data: TCouponType[]
}

const CouponTable: FC<TCouponTableProps> = ({ data }) => {
  const form = useCouponForm({ initialValues: defaultCoupon })
  const [edit, setEdit] = useState<boolean>(false)
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  console.log('🚀 ~ file: index.tsx:17 ~ selectedRows:', selectedRows)

  const columns: TColumnsProps[] = [
    {
      id: 'code',
      title: 'Mã',
      width: '15%',
      position: 'left',
      render: (data, isEdit) => (
        <RowInput
          isEditing={isEdit}
          value={data?.couponCode}
          name='startDate'
          onChange={(value) => console.log(value)}
          textStyle={{ fw: 'bolder' }}
        />
      )
    },
    {
      id: 'avatar',
      title: 'Avatar',
      width: '10%',
      position: 'left',
      render: (data) => (!data.image ? <DefaultAvatar /> : <Avatar src={data.image} radius='lg' />)
    },
    {
      id: 'startDate',
      title: 'Ngày bắt đầu',
      width: '15%',
      position: 'left',
      render: (data, isEdit) => (
        <RowInput
          isEditing={isEdit}
          value={data?.couponStartDate?.date}
          name='startDate'
          onChange={(value) => console.log(value)}
        />
      )
    },
    {
      id: 'endDate',
      title: 'Ngày kết thúc',
      width: '15%',
      position: 'left',
      render: (data, isEdit) => (
        <RowInput
          isEditing={isEdit}
          value={data?.couponEndDate?.date}
          name='startDate'
          onChange={(value) => console.log(value)}
        />
      )
    },
    {
      id: 'usedCoupon',
      title: 'Đã sử dụng',
      width: '15%',
      position: 'center',
      render: (data, isEdit) => (
        <RowInput
          isEditing={isEdit}
          value={data?.couponQuantity}
          name='startDate'
          onChange={(value) => console.log(value)}
        />
      )
    },
    {
      id: 'quantity',
      title: 'Số lượng phát hành',
      width: '15%',
      position: 'center',
      render: (data, isEdit) => (
        <RowInput
          isEditing={isEdit}
          value={data?.couponQuantity}
          name='startDate'
          onChange={(value) => console.log(value)}
        />
      )
    },
    {
      id: 'status',
      title: 'Trạng thái',
      width: '10%',
      position: 'center',
      render: (data) => (data.couponQuantity ? <OneActiveIcon /> : <DefaultAvatar />)
    }
  ]

  return (
    <CouponFormProvider form={form}>
      <Table
        data={data}
        columns={columns}
        editMode={edit}
        onChangeEditMode={setEdit}
        selectedRows={selectedRows}
        onSelectRows={setSelectedRows}
      />
    </CouponFormProvider>
  )
}

export default CouponTable
