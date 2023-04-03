import { UserProps } from '@/types/user'
import { Fragment, useEffect, useState } from 'react'
import { useCustomerContext } from '@/context/CustomerContext/CustomerContext'
import { setSelectedRow } from '@/reducer/customer/action'
import { ViewedRow } from './ViewedRow'
import { EditableRow } from './EditableRow'
import { useForm, createFormContext } from '@mantine/form'
import { UserFormProvider, useUserForm } from '@/context/form-context'
import { updateItem } from '@/firebase/handler'
import { FIREBASE_COLLECTION } from '@/firebase/collection'

interface ITableRow {
  row: UserProps
  selectedRow: string[]
}

// export const TableRow = ({ row, selectedRow }: ITableRow) => {
//   const { classes } = useStyles()
//   const dateFormat = getDateFirebase(row.dob)
//   const { dispatch } = useCustomerContext()
//   const [edit, setEdit] = useState<boolean>(false)
//   const { fireBaseId: id } = row

//   const isSelected = selectedRow.includes(id)

//   const handleSelectedRow = () => {
//     // setChecked(!checked)
//     if (!selectedRow.includes(id)) {
//       dispatch(setSelectedRow([...selectedRow, id]))
//     } else {
//       dispatch(setSelectedRow(selectedRow.filter((row) => row !== id)))
//     }
//   }

//   return (
//     <tr
//       key={row.fireBaseId}
//       style={{
//         height: 60,
//         backgroundColor: '#f5f5f5',
//         borderCollapse: 'collapse',
//         width: '100%',
//         fontSize: '12px'
//       }}
//     >
//       <td style={{ backgroundColor: '#fff' }}>
//         <Checkbox
//           sx={{ input: { backgroundColor: '#f5f5f5' } }}
//           color='gray.8'
//           size='lg'
//           radius={10}
//           checked={isSelected}
//           onChange={handleSelectedRow}
//         />
//       </td>
//       <td
//         style={{
//           padding: '20px',
//           borderRadius: '10px 0 0 10px'
//         }}
//       >
//         <Avatar src={row.avatar} />
//       </td>

//       {edit ? (
//         <>
//           <td>
//             <TextInput className={classes.td}></TextInput>
//           </td>
//           <td>
//             <TextInput className={classes.td}></TextInput>
//           </td>
//           <td>
//             <TextInput className={classes.td}></TextInput>
//           </td>
//           <td>
//             <TextInput className={classes.td}></TextInput>
//           </td>
//           <td>
//             <Select
//               label=''
//               nothingFound='No options'
//               placeholder={row.gender === 'male' ? 'Nam' : 'Nữ'}
//               data={[
//                 {
//                   value: 'female',
//                   label: 'Nữ'
//                 },
//                 {
//                   value: 'male',
//                   label: 'Nam'
//                 }
//               ]}
//               rightSection={<IconChevronDown color='gray' size={14} />}
//               rightSectionWidth={30}
//             />
//           </td>
//           <td>
//             <TextInput className={classes.td}></TextInput>
//           </td>
//           <td style={{ textAlign: 'center' }}>{getMemberShip(MEMBERSHIP.SILVER)}</td>
//           <td
//             style={{
//               padding: '10px',
//               textAlign: 'right',
//               borderRadius: '0 10px 10px 0'
//             }}
//           >
//             <ActionIcon onClick={() => setEdit(!edit)}>
//               <ActiveEditIcon />
//             </ActionIcon>
//           </td>
//         </>
//       ) : (
//         <>
//           <td>
//             <Text tt='uppercase' fw='bolder' lh={1.4}>
//               {row.firstName}
//             </Text>
//           </td>
//           <td>
//             <Text tt='uppercase' fw='bolder' lh={1.4}>
//               {row.lastName}
//             </Text>
//           </td>
//           <td>
//             <Text>{row.email}</Text>
//           </td>
//           <td>{row.txtPhone}</td>
//           <td>
//             <Text>{row.gender === 'male' ? 'Nam' : 'Nữ'}</Text>
//           </td>
//           <td>{dateFormat ? JSON.parse(dateFormat) : ''}</td>
//           <td style={{ textAlign: 'center' }}>{getMemberShip(row.member)}</td>
//           <td
//             style={{
//               padding: '10px',
//               textAlign: 'right',
//               borderRadius: '0 10px 10px 0'
//             }}
//           >
//             <ActionIcon onClick={() => setEdit(!edit)}>
//               <EditIcon />
//             </ActionIcon>
//           </td>
//         </>
//       )}
//     </tr>
//   )
// }

export const TableRow = ({ row, selectedRow }: ITableRow) => {
  const { dispatch } = useCustomerContext()
  const [edit, setEdit] = useState<boolean>(false)
  // const [rowData, setRowData] = useState(row)
  const { fireBaseId: id } = row
  const form = useUserForm({
    initialValues: row,

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    }
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

  console.log('data', form.values)
  console.log('touch', form.isTouched())
  console.log('dirty', form.isDirty())
  console.log('change', isChanged)

  useEffect(() => {
    // isChanged ? updateItem(FIREBASE_COLLECTION.USERS, form.values, form.getInputProps('fireBaseId').value) : ''
    isChanged && console.log('update')
  }, [isChanged])

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
