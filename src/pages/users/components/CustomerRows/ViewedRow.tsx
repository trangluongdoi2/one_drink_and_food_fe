import { DefaultAvatar, EditIcon } from '@/assets/icon'
import { useUserFormContext } from '@/context/form-context'
import { UserProps } from '@/types/user'
import { getDateFirebase } from '@/utils/convertDate'
import { getMemberShip } from '@/utils/getMembership'
import { Avatar, Checkbox, ActionIcon, Text, Stack, Flex } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'

interface ViewRowProps {
  row: UserProps
  isSelected: boolean
  handleSelectedRow: () => void
  editMode: boolean
  setEditMode: Dispatch<SetStateAction<boolean>>
  onOpenModal: () => void
}

export const ViewRow = ({ handleSelectedRow, isSelected, onOpenModal, setEditMode, editMode }: ViewRowProps) => {
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
          <Flex
            onClick={() => onOpenModal()}
            gap={5}
            align='center'
            justify='left'
            sx={{ cursor: 'pointer', width: '100%' }}
          >
            <Stack sx={{ width: '7%' }}>
              {!form.getInputProps('avatar').value ? (
                <DefaultAvatar />
              ) : (
                <Avatar src={form.getInputProps('avatar').value} size='sm' />
              )}
            </Stack>

            <Stack sx={{ width: '10%' }}>
              <Text fw='bolder' lh={1.4}>
                {form.getInputProps('firstName').value}
              </Text>
            </Stack>

            <Stack sx={{ width: '14%' }}>
              <Text fw='bolder' lh={1.4}>
                {form.getInputProps('lastName').value}
              </Text>
            </Stack>

            <Stack sx={{ width: '25%' }}>
              <Text lh={1.4}>{form.getInputProps('email').value}</Text>
            </Stack>

            <Stack sx={{ width: '15%' }}>
              <Text lh={1.4}>{form.getInputProps('txtPhone').value}</Text>
            </Stack>

            <Stack sx={{ width: '9%' }}>
              <Text>{form.getInputProps('gender').value === 'male' ? 'Nam' : 'Nữ'}</Text>
            </Stack>

            <Stack sx={{ width: '16%' }}>
              <Text lh={1.4}>
                <Text>{dateFormat ? JSON.parse(dateFormat) : ''}</Text>
              </Text>
            </Stack>

            <Stack sx={{ width: '9%' }}>
              <Text lh={1.4}>{getMemberShip(form.getInputProps('member').value)}</Text>
            </Stack>

            <Stack sx={{ width: 'auto' }}>
              <ActionIcon
                onClick={(e) => {
                  e.stopPropagation()
                  setEditMode(!editMode)
                }}
              >
                <EditIcon />
              </ActionIcon>
            </Stack>
          </Flex>
        </ul>
      </li>
    </ul>
  )
}
