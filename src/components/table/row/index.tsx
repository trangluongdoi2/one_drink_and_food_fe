import { EditIcon } from '@/assets/icon'
import { UserProps } from '@/types/user'
import { getDateFirebase } from '@/utils/convertDate'
import { Avatar, Checkbox, ActionIcon } from '@mantine/core'

interface ITableRow {
  row: UserProps
}

export const TableRow = ({ row }: ITableRow) => {
  const dateFormat = getDateFirebase(row.dob)

  return (
    <tr
      key={row.id}
      style={{
        height: 60,
        backgroundColor: '#f5f5f5',
        borderCollapse: 'collapse',
        width: '100%',
        fontSize: '12px'
      }}
    >
      <td style={{ backgroundColor: '#fff' }}>
        <Checkbox color='dark' size='lg' radius={10} />
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
      <td style={{ textAlign: 'center' }}>{row.member}</td>
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
