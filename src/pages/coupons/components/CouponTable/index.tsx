import { DefaultAvatar, OneActiveIcon } from '@/assets/icon'
import Table from '@/components/table/table'
import RowInput from '@/components/table/table/rowInput'
import { TColumnsProps } from '@/components/table/table/type'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { FirebaseService } from '@/firebase/handler'
import { TCouponType } from '@/types/coupon'
import { Avatar } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { FC, useEffect, useState } from 'react'
import { useCouponFormContext } from '../../form'

type TCouponTableProps = {
  data: TCouponType[]
}

const CouponTable: FC<TCouponTableProps> = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const form = useCouponFormContext()
  const { selectedCoupon, couponData } = form.values

  const successNotification = () => {
    notifications.show({
      title: 'Chỉnh sửa thành công',
      message: 'Thông tin đơn hàng đã được cập nhật',
      autoClose: 3000,
      color: 'dark',
      withCloseButton: true
    })
  }

  const handleSubmitChange = async () => {
    const newArr = couponData.map((data) =>
      data.fireBaseId === selectedCoupon.fireBaseId ? { ...selectedCoupon } : data
    )

    form.setValues({ couponData: newArr })
    try {
      await FirebaseService.updateById(FIREBASE_COLLECTION.DISCOUNT, selectedCoupon, selectedCoupon.fireBaseId)
      successNotification()
    } catch (err) {
      console.error(err)
    }
  }

  const handleChangeInput = (key: keyof TCouponType, value: string) => {
    form.setValues({ selectedCoupon: { ...selectedCoupon, [key]: value } })
  }

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
          name='couponCode'
          onChange={(value) => handleChangeInput('couponCode', value)}
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
          value={data?.couponStartDate}
          name='couponStartDate'
          onChange={(value) => handleChangeInput('couponStartDate', value)}
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
          value={data?.couponEndDate}
          name='couponEndDate'
          onChange={(value) => handleChangeInput('couponEndDate', value)}
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
          name='couponQuantity'
          onChange={(value) => handleChangeInput('couponQuantity', value)}
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
          name='couponQuantity'
          onChange={(value) => handleChangeInput('couponQuantity', value)}
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

  useEffect(() => {
    form.setValues({ couponData: data })
  }, [data])

  return (
    <Table
      data={couponData}
      columns={columns}
      searchKey={'couponCode'}
      onSubmitChange={handleSubmitChange}
      selectedRows={selectedRows}
      onSelectRows={setSelectedRows}
    />
  )
}

export default CouponTable
