import { Fragment, useEffect, useState } from 'react'
import { setSelectedRow } from '@/reducer/order/action'
import { UserFormProvider, useUserForm } from '@/context/form-context'
import { FirebaseService } from '@/firebase/handler'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { notifications } from '@mantine/notifications'
import { EditRow } from './EditRow'
import { ViewRow } from './ViewRow'
import { OrderProps } from '@/types/order'
import { useOrderContext } from '@/context/OrderContext/OrderContext'

interface IOrderRow {
  row: OrderProps
  selectedRow: string[]
}

export const ProductRow = ({ row, selectedRow }: IOrderRow) => {
  const { dispatch } = useOrderContext()
  const [edit, setEdit] = useState<boolean>(false)
  const { fireBaseId: id } = row
  const form = useUserForm({
    initialValues: row,
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    },
    validateInputOnBlur: true
  })

  const isSelected = selectedRow.includes(id)
  const isChanged = form.isTouched() && form.isDirty() && !edit

  const handleSelectedRow = () => {
    if (!selectedRow.includes(id)) {
      dispatch(setSelectedRow([...selectedRow, id]))
    } else {
      dispatch(setSelectedRow(selectedRow.filter((row) => row !== id)))
    }
  }

  const successNotification = () => {
    notifications.show({
      title: 'Chỉnh sửa thành công',
      message: 'Thông tin đơn hàng đã được cập nhật',
      autoClose: 3000,
      color: 'green',
      withCloseButton: true
    })
  }

  useEffect(() => {
    if (isChanged) {
      FirebaseService.updateById(FIREBASE_COLLECTION.ORDERS, form.values, form.getInputProps('fireBaseId').value)
      form.resetDirty()
      form.resetTouched()
      successNotification()
    }
  }, [form, isChanged])

  return (
    <Fragment>
      <UserFormProvider form={form}>
        {edit ? (
          <form>
            <EditRow edit={edit} setEdit={setEdit} isSelected={isSelected} handleSelectedRow={handleSelectedRow} />
          </form>
        ) : (
          <ViewRow edit={edit} setEdit={setEdit} isSelected={isSelected} handleSelectedRow={handleSelectedRow} />
        )}
      </UserFormProvider>
    </Fragment>
  )
}
