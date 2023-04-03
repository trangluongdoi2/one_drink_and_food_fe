import { UserProps } from '@/types/user'
import { Fragment, useEffect, useState } from 'react'
import { useCustomerContext } from '@/context/CustomerContext/CustomerContext'
import { setSelectedRow } from '@/reducer/customer/action'
import { ViewedRow } from './ViewedRow'
import { EditableRow } from './EditableRow'
import { UserFormProvider, useUserForm } from '@/context/form-context'
import { updateItem } from '@/firebase/handler'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { notifications } from '@mantine/notifications'

interface ITableRow {
  row: UserProps
  selectedRow: string[]
}

export const TableRow = ({ row, selectedRow }: ITableRow) => {
  const { dispatch } = useCustomerContext()
  const [edit, setEdit] = useState<boolean>(false)
  const { fireBaseId: id } = row
  const form = useUserForm({
    initialValues: row,

    validate: {
      // firstName: (value) => (value.length < 2 ? 'At least 2 letters' : null),
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

  // console.log('data', form.values)
  // console.log('touch', form.isTouched())
  // console.log('dirty', form.isDirty())
  // console.log('change', isChanged)

  const successNotification = () => {
    notifications.show({
      title: 'Chỉnh sửa thành công',
      message: 'Thông tin khách hàng đã được cập nhật',
      autoClose: 3000,
      color: 'green',
      withCloseButton: true
    })
  }

  useEffect(() => {
    if (isChanged) {
      updateItem(FIREBASE_COLLECTION.USERS, form.values, form.getInputProps('fireBaseId').value)
      console.log('update')
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
            <EditableRow edit={edit} setEdit={setEdit} isSelected={isSelected} handleSelectedRow={handleSelectedRow} />
          </form>
        ) : (
          <ViewedRow
            edit={edit}
            setEdit={setEdit}
            isSelected={isSelected}
            row={row}
            handleSelectedRow={handleSelectedRow}
          />
        )}
      </UserFormProvider>
    </Fragment>
  )
}
