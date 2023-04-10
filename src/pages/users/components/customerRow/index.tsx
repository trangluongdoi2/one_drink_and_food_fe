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
import DetailModal from '@/pages/users/components/DetailModal'
import { useDisclosure } from '@mantine/hooks'

interface ITableRow {
  row: UserProps
  selectedRow: string[]
}

export const CustomerRow = ({ row, selectedRow }: ITableRow) => {
  const { dispatch } = useCustomerContext()
  const [opened, { open, close }] = useDisclosure(false)
  const [editMode, setEditMode] = useState<boolean>(false)

  const { fireBaseId: id } = row

  const form = useUserForm({
    initialValues: row,

    validate: {
      firstName: (value) => (value.length < 2 ? 'At least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    },
    validateInputOnBlur: true
  })

  const isSelected = selectedRow.includes(id)
  const isChanged = form.isTouched() && form.isDirty() && form.isValid()

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
      message: 'Thông tin khách hàng đã được cập nhật',
      autoClose: 3000,
      color: 'green',
      withCloseButton: true
    })
  }

  useEffect(() => {
    // There are two options to change form data: quick change and detailed change
    // 1 - Detailed change: submit when pressing submit button in the detailed modal
    if (opened) {
      console.log('modal mode')
    }
    // 2 - Quick change: submit after typing input field
    else {
      if (isChanged && !editMode) {
        FirebaseService.updateById(FIREBASE_COLLECTION.USERS, form.values, form.getInputProps('fireBaseId').value)
        form.resetDirty()
        form.resetTouched()
        successNotification()
      }
    }
  }, [editMode, form, isChanged, opened])

  return (
    <Fragment>
      <UserFormProvider form={form}>
        <form>
          <DetailModal opened={opened} close={close} />
          {editMode ? (
            <EditRow
              isSelected={isSelected}
              handleSelectedRow={handleSelectedRow}
              editMode={editMode}
              setEditMode={setEditMode}
            />
          ) : (
            <ViewRow
              editMode={editMode}
              setEditMode={setEditMode}
              isSelected={isSelected}
              row={row}
              handleSelectedRow={handleSelectedRow}
              onOpenModal={open}
            />
          )}
        </form>
      </UserFormProvider>
    </Fragment>
  )
}
