import { EditIcon } from '@/assets/icon'
import { UserProps } from '@/types/user'
import { getDateFirebase } from '@/utils/convertDate'
import { getMemberShip } from '@/utils/getMembership'
import { Avatar, Checkbox, ActionIcon, Text } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'

interface ViewedRowProps {
  row: UserProps
  isSelected: boolean
  handleSelectedRow: () => void
  edit: boolean
  setEdit: Dispatch<SetStateAction<boolean>>
}

export const ViewedRow = ({ row, handleSelectedRow, isSelected, edit, setEdit }: ViewedRowProps) => {
  const dateFormat = getDateFirebase(row.dob)

  return (
    <ul
      style={{
        margin: 0,
        padding: 0,
        display: 'flex',
        width: '100%',
        fontSize: 12
      }}
      key={row.fireBaseId}
    >
      <li style={{ float: 'left', marginRight: 20, alignItems: 'center', display: 'flex' }}>
        <Checkbox
          sx={{ input: { backgroundColor: '#f5f5f5' } }}
          checked={isSelected}
          color='gray.8'
          size='lg'
          radius={10}
          onChange={handleSelectedRow}
        />
      </li>
      <li
        style={{
          width: '100%',
          height: 60,
          alignItems: 'center',
          display: 'flex',
          backgroundColor: isSelected ? '#fff' : '#f5f5f5',
          boxShadow: isSelected ? '2px 2px 10px 1px #ccc' : '',
          borderRadius: 10
        }}
      >
        <ul
          style={{
            textDecoration: 'none',
            listStyleType: 'none',
            padding: 20,
            display: 'flex',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <li
            style={{
              width: '7%'
            }}
          >
            <Avatar src={row.avatar} />
          </li>
          <li
            style={{
              width: '10%'
            }}
          >
            <Text tt='uppercase' fw='bolder' lh={1.4}>
              {row.firstName}
            </Text>
          </li>
          <li
            style={{
              width: '15%'
            }}
          >
            <Text tt='uppercase' fw='bolder' lh={1.4}>
              {row.lastName}
            </Text>
          </li>
          <li
            style={{
              width: '25%'
            }}
          >
            <Text>{row.email}</Text>
          </li>
          <li
            style={{
              width: '15%'
            }}
          >
            <Text>{row.txtPhone}</Text>
          </li>
          <li
            style={{
              width: '10%'
            }}
          >
            <Text>{row.gender === 'male' ? 'Nam' : 'Nữ'}</Text>
          </li>
          <li
            style={{
              width: '15%'
            }}
          >
            <Text>{dateFormat ? JSON.parse(dateFormat) : ''}</Text>
          </li>
          <li
            style={{
              width: '10%'
            }}
          >
            {getMemberShip(row.member)}
          </li>
          <li
            style={{
              width: 'auto'
            }}
          >
            <ActionIcon onClick={() => setEdit(!edit)}>
              <EditIcon />
            </ActionIcon>
          </li>
        </ul>
      </li>
    </ul>
  )
}
