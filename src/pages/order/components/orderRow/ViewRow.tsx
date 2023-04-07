import { DefaultAvatar, EditIcon } from '@/assets/icon'
import { useUserFormContext } from '@/context/form-context'
import { getStatus } from '@/utils/getStatus'
import { Avatar, Checkbox, ActionIcon, Text, Flex, Stack } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'

interface ViewedRowProps {
  isSelected: boolean
  handleSelectedRow: () => void
  edit: boolean
  setEdit: Dispatch<SetStateAction<boolean>>
}

export const ViewRow = ({ handleSelectedRow, isSelected, edit, setEdit }: ViewedRowProps) => {
  const form = useUserFormContext()

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
        <Flex gap={10} align='center' justify='left' p={20} sx={{ width: '100%' }}>
          {/* ---------------- ID ---------- */}
          <Stack sx={{ width: '15%' }}>
            <Text fw='bolder' lh={1.4}>
              {form.getInputProps('fireBaseId').value.split('-').pop()}
            </Text>
          </Stack>

          {/* ---------------- AVATAR ---------- */}
          <Stack sx={{ width: '8%' }}>
            {!form.getInputProps('avatar').value ? (
              <DefaultAvatar />
            ) : (
              <Avatar src={form.getInputProps('avatar').value} radius='lg' />
            )}
          </Stack>

          {/* ---------------- NAME ------------- */}
          <Stack sx={{ width: '20%' }}>
            <Text fw='bolder' lh={1.4}>
              {form.getInputProps('recipientName').value}
            </Text>
          </Stack>

          {/* ---------------- ADDRESS ---------- */}
          <Stack sx={{ width: '45%', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Text lh={1.4}>{form.getInputProps('address').value}</Text>
          </Stack>

          {/* ---------------- PHONE ---------- */}
          <Stack sx={{ width: '15%' }}>
            <Text lh={1.4}>{form.getInputProps('phone').value}</Text>
          </Stack>

          {/* ---------------- DATE ---------- */}
          <Stack sx={{ width: '15%' }}>
            <Text lh={1.4}>{form.getInputProps('receivedDate').value}</Text>
          </Stack>

          {/* ---------------- STATUS ---------- */}
          <Stack sx={{ width: '10%' }}>
            <Text lh={1.4}>{getStatus(form.getInputProps('status').value)}</Text>
          </Stack>

          {/* ---------------- EDIT ---------- */}
          <Stack sx={{ width: '6%' }}>
            <ActionIcon onClick={() => setEdit(!edit)}>
              <EditIcon />
            </ActionIcon>
          </Stack>
        </Flex>
      </li>
    </ul>
  )
}
