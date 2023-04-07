import { DefaultAvatar, EditIcon } from '@/assets/icon'
import { useUserFormContext } from '@/context/form-context'
import { UserProps } from '@/types/user'
import { getDateFirebase } from '@/utils/convertDate'
import { getMemberShip } from '@/utils/getMembership'
import { Avatar, Checkbox, ActionIcon, Text } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'

interface ViewRowProps {
  row: UserProps
  isSelected: boolean
  handleSelectedRow: () => void
  edit: boolean
  setEdit: Dispatch<SetStateAction<boolean>>
}

export const ViewRow = ({ handleSelectedRow, isSelected, edit, setEdit }: ViewRowProps) => {
  const form = useUserFormContext()
  const dateFormat = getDateFirebase(form.getInputProps('dob').value)

  return (
    <ul
      style={{
        margin: 0,
        padding: 0,
        display: 'flex',
        width: '100%',
        fontSize: 12
      }}
      key={form.getInputProps('fireBaseId').value}
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
            {!form.getInputProps('avatar').value ? (
              <DefaultAvatar />
            ) : (
              <Avatar src={form.getInputProps('avatar').value} radius='lg' />
            )}{' '}
          </li>
          <li
            style={{
              width: '10%'
            }}
          >
            <Text tt='uppercase' fw='bolder' lh={1.4}>
              {form.getInputProps('firstName').value}
            </Text>
          </li>
          <li
            style={{
              width: '15%'
            }}
          >
            <Text tt='uppercase' fw='bolder' lh={1.4}>
              {form.getInputProps('lastName').value}
            </Text>
          </li>
          <li
            style={{
              width: '25%'
            }}
          >
            <Text> {form.getInputProps('email').value}</Text>
          </li>
          <li
            style={{
              width: '15%'
            }}
          >
            <Text>{form.getInputProps('txtPhone').value}</Text>
          </li>
          <li
            style={{
              width: '10%'
            }}
          >
            <Text>{form.getInputProps('gender').value === 'male' ? 'Nam' : 'Nữ'}</Text>
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
            {getMemberShip(form.getInputProps('member').value)}
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
