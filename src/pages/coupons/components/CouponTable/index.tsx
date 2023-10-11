import { DefaultAvatar, OneActiveIcon } from '@/assets/icon'
import Table from '@/components/table/table'
import RowInput from '@/components/table/table/rowInput'
import { TColumnsProps } from '@/components/table/table/type'
import { TCouponType } from '@/types/coupon'
import { convertFormat, prettyDate } from '@/utils/convertDate'
import { notify } from '@/utils/notification'
import { Avatar } from '@mantine/core'
import dayjs from 'dayjs'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { defaultCoupon, useCouponFormContext } from '../../form'
import { useUpdateCoupon } from '../../services/hook'

type TCouponTableProps = {
  data: TCouponType[]
  loading?: boolean
}

const CouponTable: FC<TCouponTableProps> = ({ data, loading = false }) => {
  const { t } = useTranslation()
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const form = useCouponFormContext()
  const { selectedDataRow, dataForm } = form.values
  const updateCouponMutation = useUpdateCoupon()

  const handleSubmitChange = async () => {
    const dataSend = {
      ...selectedDataRow,
      startDate: dayjs(convertFormat(selectedDataRow.startDate)).toISOString(),
      endDate: dayjs(convertFormat(selectedDataRow.endDate)).toISOString(),
      usesCount: Number(selectedDataRow.usesCount),
      maxUsesPerUser: Number(selectedDataRow.maxUsesPerUser)
    }

    await updateCouponMutation.mutateAsync(
      { params: dataSend, id: selectedDataRow._id ?? '' },
      {
        onSuccess: () => {
          notify({ message: t('message.coupon.updateSuccess') })
          form.setValues({ selectedDataRow: defaultCoupon })
        },
        onError: () => notify({ message: t('message.coupon.updateFailed') })
      }
    )
  }

  const handleChangeInput = (key: keyof TCouponType, value: string) => {
    form.setValues({ selectedDataRow: { ...selectedDataRow, [key]: value } })
  }

  console.log(form.values.selectedDataRow)

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
    form.setValues({ dataForm: data })
  }, [data])

  return (
    <Table
      data={dataForm}
      columns={columns}
      searchKey={'code'}
      selectedRows={selectedRows}
      onSubmitChange={handleSubmitChange}
      onSelectRows={setSelectedRows}
      onEdit={(value: TCouponType) => form.setValues({ selectedDataRow: value })}
      loading={loading}
    />
  )
}

export default CouponTable
