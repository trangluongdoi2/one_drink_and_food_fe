import { DefaultAvatar } from '@/assets/icon'
import Table from '@/components/table/table'
import RowInput from '@/components/table/table/rowInput'
import { TColumnsProps } from '@/components/table/table/type'
import { TOrder } from '@/types/order'
import { getStatus } from '@/utils/getStatus'
import { Avatar } from '@mantine/core'
import { FC, useEffect, useState } from 'react'
import { useOrderFormContext } from '../../form'

interface TOrderTableProps {
  data: TOrder[]
}

const OrderTable: FC<TOrderTableProps> = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const form = useOrderFormContext()
  const { selectedDataRow, dataForm } = form.values

  const handleSubmitChange = async () => {
    const newArr = dataForm.map((data: any) => (data._id === selectedDataRow._id ? { ...selectedDataRow } : data))

    form.setValues({ dataForm: newArr })
  }

  const handleChangeInput = (key: keyof TOrder, value: string) => {
    form.setValues({ selectedDataRow: { ...selectedDataRow, [key]: value } })
  }

  const columns: TColumnsProps[] = [
    {
      id: 'fireBaseId',
      title: 'Mã',
      width: '15%',
      position: 'left',
      render: (data) => (
        <RowInput
          value={data?.trackingText}
          name='trackingText'
          onChange={(value) => handleChangeInput('trackingText', value)}
          textStyle={{ fw: 'bolder' }}
        />
      )
    },
    {
      id: 'avatar',
      title: 'Avatar',
      width: '10%',
      position: 'left',
      render: (data) => (!data.avatar ? <DefaultAvatar /> : <Avatar src={data.avatar} radius='lg' />)
    },
    {
      id: 'recipientName',
      title: 'Người nhận',
      width: '15%',
      position: 'left',
      render: (data, isEdit) => (
        <RowInput
          isEditing={isEdit}
          value={data?.shipping.receiverName}
          name='recipientName'
          // onChange={(value) => handleChangeInput('', value)}
        />
      )
    },
    {
      id: 'address',
      title: 'Địa chỉ giao hàng',
      width: '20%',
      position: 'left',
      render: (data, isEdit) => (
        <RowInput
          isEditing={isEdit}
          value={data?.shipping.receiveAddress}
          name='address'
          // onChange={(value) => handleChangeInput('address', value)}
        />
      )
    },
    {
      id: 'receivedDate',
      title: 'Thời gian',
      width: '15%',
      position: 'center',
      render: (data, isEdit) => (
        <RowInput
          isEditing={isEdit}
          value={data?.shipping?.deliveryTime}
          name='receivedDate'
          // onChange={(value) => handleChangeInput('receivedDate', value)}
        />
      )
    },
    {
      id: 'status',
      title: 'Trạng thái',
      width: '20%',
      position: 'center',
      render: (data, isEdit) => <>{getStatus(data?.status)?.icon}</>
    }
  ]

  useEffect(() => {
    form.setValues({ dataForm: data })
  }, [data])

  return (
    <Table
      data={data}
      columns={columns}
      searchKey={'trackingText'}
      selectedRows={selectedRows}
      onSubmitChange={handleSubmitChange}
      onSelectRows={setSelectedRows}
      onEdit={(value: TOrder) => form.setValues({ selectedDataRow: value })}
    />
  )
}

export default OrderTable
