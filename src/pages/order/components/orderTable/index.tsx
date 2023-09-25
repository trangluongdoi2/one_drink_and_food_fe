import { DefaultAvatar } from '@/assets/icon'
import Table from '@/components/table/table'
import RowInput from '@/components/table/table/rowInput'
import { TColumnsProps } from '@/components/table/table/type'
import { ORDER_STATUS, TOrderType } from '@/types/order'
import { prettyDate } from '@/utils/convertDate'
import { Avatar } from '@mantine/core'
import { FC, useEffect, useState } from 'react'
import { useOrderFormContext } from '../../form'

interface TOrderTableProps {
  data: TOrderType[]
}

const OrderTable: FC<TOrderTableProps> = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const form = useOrderFormContext()
  const { selectedOrder, orderData } = form.values

  const handleSubmitChange = async () => {
    const newArr = orderData.map((data: any) => (data._id === selectedOrder._id ? { ...selectedOrder } : data))

    form.setValues({ orderData: newArr })
  }

  const handleChangeInput = (key: keyof TOrderType, value: string) => {
    form.setValues({ selectedOrder: { ...selectedOrder, [key]: value } })
  }

  const columns: TColumnsProps[] = [
    {
      id: 'fireBaseId',
      title: 'Mã',
      width: '15%',
      position: 'left',
      render: (data) => (
        <RowInput
          value={data?.fireBaseId}
          name='fireBaseId'
          onChange={(value) => handleChangeInput('fireBaseId', value)}
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
          value={prettyDate(data?.recipientName)}
          name='recipientName'
          onChange={(value) => handleChangeInput('recipientName', value)}
        />
      )
    },
    {
      id: 'address',
      title: 'Địa chỉ giao hàng',
      width: '15%',
      position: 'left',
      render: (data, isEdit) => (
        <RowInput
          isEditing={isEdit}
          value={prettyDate(data?.address)}
          name='address'
          onChange={(value) => handleChangeInput('address', value)}
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
          value={data?.receivedDate}
          name='receivedDate'
          onChange={(value) => handleChangeInput('receivedDate', value)}
        />
      )
    },
    {
      id: 'status',
      title: 'Trạng thái',
      width: '15%',
      position: 'center',
      render: (data, isEdit) => (
        <RowInput
          isEditing={isEdit}
          value={data?.status}
          name='status'
          onChange={(value) => handleChangeInput('status', value)}
        />
      )
    }
  ]

  useEffect(() => {
    const dataTest = [
      {
        _id: '',
        address: '',
        phone: '',
        status: ORDER_STATUS.PREPARING,
        fireBaseId: '',
        recipientName: '',
        avatar: '',
        receivedDate: ''
      }
    ]
    form.setValues({ orderData: dataTest })
  }, [data])

  useEffect(() => {
    console.log(selectedOrder, orderData, 'selectedOrder, orderData....')
    console.log(form.getInputProps('orderData'), 'order get input')
  }, [])

  return (
    <Table
      data={orderData}
      columns={columns}
      searchKey={'address'}
      onSubmitChange={handleSubmitChange}
      selectedRows={selectedRows}
      onSelectRows={setSelectedRows}
    />
  )
}

export default OrderTable
