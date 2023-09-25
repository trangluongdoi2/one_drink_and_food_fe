import { DefaultAvatar, OneActiveIcon } from '@/assets/icon'
import Table from '@/components/table/table'
import RowInput from '@/components/table/table/rowInput'
import { TColumnsProps } from '@/components/table/table/type'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { FirebaseService } from '@/firebase/handler'
import { TCouponType } from '@/types/coupon'
import { prettyDate } from '@/utils/convertDate'
import { notify } from '@/utils/notification'
import { Avatar } from '@mantine/core'
import { FC, useEffect, useState } from 'react'
import { useCouponFormContext } from '../../form'

type TCouponTableProps = {
  data: TCouponType[]
}

const CouponTable: FC<TCouponTableProps> = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const form = useCouponFormContext()
  const { selectedCoupon, couponData } = form.values

  const handleSubmitChange = async () => {
    const newArr = couponData.map((data) => (data._id === selectedCoupon._id ? { ...selectedCoupon } : data))

    form.setValues({ couponData: newArr })
    try {
      await FirebaseService.updateById(FIREBASE_COLLECTION.DISCOUNT, selectedCoupon, selectedCoupon._id)
      notify({ message: 'Thông tin đơn hàng đã được cập nhật' })
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
          value={data?.code}
          name='code'
          onChange={(value) => handleChangeInput('code', value)}
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
          value={prettyDate(data?.startDate)}
          name='startDate'
          onChange={(value) => handleChangeInput('startDate', value)}
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
          value={prettyDate(data?.endDate)}
          name='endDate'
          onChange={(value) => handleChangeInput('endDate', value)}
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
          value={data?.usesCount}
          name='usesCount'
          onChange={(value) => handleChangeInput('usesCount', value)}
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
          value={data?.maxUsesPerUser}
          name='maxUsesPerUser'
          onChange={(value) => handleChangeInput('maxUsesPerUser', value)}
        />
      )
    },
    {
      id: 'status',
      title: 'Trạng thái',
      width: '10%',
      position: 'center',
      render: (data) => (data.isActive ? <OneActiveIcon /> : <DefaultAvatar />)
    }
  ]

  useEffect(() => {
    const dataTest = [
      {
        _id: '',
        code: '',
        title: '',
        name: '',
        description: '',
        type: 'fixed',
        value: 0,
        productIds: [],
        maxUses: 0,
        mainFunctions: [],
        usesCount: 0,
        usersUsed: [''],
        maxUsesPerUser: 0,
        minOrderValue: 0,
        isActive: false,
        isNoLimit: false,
        appliesTo: 'all'
      }
    ]
    // @ts-ignore
    form.setValues({ couponData: dataTest })
  }, [data])

  return (
    <Table
      data={couponData}
      columns={columns}
      searchKey={'code'}
      onSubmitChange={handleSubmitChange}
      selectedRows={selectedRows}
      onSelectRows={setSelectedRows}
    />
  )
}

export default CouponTable
