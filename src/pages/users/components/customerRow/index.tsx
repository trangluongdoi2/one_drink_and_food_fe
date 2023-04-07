import { UserProps } from '@/types/user'
import { Fragment, useEffect, useState } from 'react'
import { useCustomerContext } from '@/context/CustomerContext/CustomerContext'
import { setSelectedRow } from '@/reducer/customer/action'
import { ViewRow } from './ViewedRow'
import { EditRow } from './EditableRow'
import { UserFormProvider, useUserForm } from '@/context/form-context'
import { FirebaseService } from '@/firebase/handler'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { notifications } from '@mantine/notifications'
import DetailModal from '../detailModal'
import { useDisclosure } from '@mantine/hooks'

interface ITableRow {
  row: UserProps
  selectedRow: string[]
}

export const CustomerRow = ({ row, selectedRow }: ITableRow) => {
  const { dispatch } = useCustomerContext()
  const [opened, { open, close }] = useDisclosure(false)
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
      FirebaseService.updateById(FIREBASE_COLLECTION.USERS, form.values, form.getInputProps('fireBaseId').value)
      console.log('update')
      form.resetDirty()
      form.resetTouched()
      successNotification()
    }
  }, [form, isChanged])

  return (
    <Fragment>
      <UserFormProvider form={form}>
        <DetailModal opened={opened} close={close} />
        {edit ? (
          <form>
            <EditRow edit={edit} setEdit={setEdit} isSelected={isSelected} handleSelectedRow={handleSelectedRow} />
          </form>
        ) : (
          <ViewRow
            edit={edit}
            setEdit={setEdit}
            isSelected={isSelected}
            row={row}
            handleSelectedRow={handleSelectedRow}
            onOpenModal={open}
          />
        )}
      </UserFormProvider>
    </Fragment>
  )
}
