import { EditIcon } from '@/assets/icon'
import { UserProps } from '@/types/user'
import { getDateFirebase } from '@/utils/convertDate'
import { getMemberShip } from '@/utils/getMembership'
import { Avatar, Checkbox, ActionIcon } from '@mantine/core'
import { Dispatch, SetStateAction, useState } from 'react'

interface ITableRow {
  row: UserProps
  selectedRow: string[]
  setSelectedRow: Dispatch<SetStateAction<string[]>>
}

export const TableRow = ({ row, setSelectedRow, selectedRow }: ITableRow) => {
  const dateFormat = getDateFirebase(row.dob)
  const [checked, setChecked] = useState<boolean>(false)
  const { fireBaseId: id } = row

  const handleSelectedRow = () => {
    setChecked(!checked)
    if (!selectedRow.includes(id)) {
      setSelectedRow([...selectedRow, id])
    } else {
      setSelectedRow(selectedRow.filter((row) => row !== id))
    }
  }

  return (
    <tr
      key={row.fireBaseId}
      style={{
        height: 60,
        backgroundColor: '#f5f5f5',
        borderCollapse: 'collapse',
        width: '100%',
        fontSize: '12px'
      }}
    >
      <td style={{ backgroundColor: '#fff' }}>
        <Checkbox
          sx={{ input: { backgroundColor: '#f5f5f5' } }}
          color='gray.8'
          size='lg'
          radius={10}
          checked={checked}
          onChange={handleSelectedRow}
        />
      </td>
      <td
        style={{
          padding: '20px',
          borderRadius: '10px 0 0 10px'
        }}
      >
        <Avatar src={row.avatar} />
      </td>
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.email}</td>
      <td>{row.txtPhone}</td>
      <td>{row.gender === 'Male' ? 'Nam' : 'Nữ'}</td>
      <td>{dateFormat ? JSON.parse(dateFormat) : ''}</td>
      <td style={{ textAlign: 'center' }}>{getMemberShip(row.member)}</td>
      <td
        style={{
          padding: '10px',
          textAlign: 'right',
          borderRadius: '0 10px 10px 0'
        }}
      >
        <ActionIcon>
          <EditIcon />
        </ActionIcon>
      </td>
    </tr>
  )
}
