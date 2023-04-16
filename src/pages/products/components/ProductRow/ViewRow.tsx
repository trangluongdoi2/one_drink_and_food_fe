import { DefaultAvatar, EditIcon, OneActiveIcon } from '@/assets/icon'
import { useUserFormContext } from '@/context/form-context'
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

  const importPrice = form.getInputProps('mlAndPrice').value[0]?.price.import
  const salePrice = form.getInputProps('mlAndPrice').value[0]?.price.sale

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
          sx={(theme) => ({ input: { backgroundColor: theme.colors.dark[0] } })}
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
          <Stack sx={{ width: '8%' }}>
            <Text fw='bolder' lh={1.4}>
              {form.getInputProps('code').value}
            </Text>
          </Stack>

          {/* ---------------- AVATAR ---------- */}
          <Stack sx={{ width: '8%' }}>
            {!form.getInputProps('photo').value[0] ? (
              <ActionIcon
                style={{
                  border: '4px solid #ccc'
                }}
                radius={50}
                size={36}
              >
                <DefaultAvatar />
              </ActionIcon>
            ) : (
              <Avatar
                src={form.getInputProps('photo').value[0]}
                radius={50}
                style={{
                  border: '4px solid #ccc'
                }}
              />
            )}
          </Stack>

          {/* ---------------- NAME ------------- */}
          <Stack sx={{ width: '15%' }}>
            <Text fw='bolder' lh={1.4}>
              {form.getInputProps('name').value}
            </Text>
          </Stack>

          {/* ---------------- ADDRESS ---------- */}
          <Stack sx={{ width: '10%', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Text lh={1.4}>{importPrice}</Text>
          </Stack>

          {/* ---------------- PHONE ---------- */}
          <Stack sx={{ width: '10%' }}>
            <Text lh={1.4}>{salePrice}</Text>
          </Stack>

          {/* ---------------- DATE ---------- */}
          <Stack sx={{ width: '10%' }}>
            <Text lh={1.4}>{form.getInputProps('amount').value}</Text>
          </Stack>

          {/* ---------------- STATUS ---------- */}
          <Stack sx={{ width: '20%' }}>
            <Text lh={1.4}>{form.getInputProps('type').value}</Text>
          </Stack>

          <Stack sx={{ width: '10%' }}>
            <OneActiveIcon />
            {/* <Text lh={1.4}>{form.getInputProps('status').value}</Text> */}
          </Stack>

          {/* ---------------- EDIT ---------- */}
          <Stack sx={{ width: 'auto' }}>
            <ActionIcon onClick={() => setEdit(!edit)}>
              <EditIcon />
            </ActionIcon>
          </Stack>
        </Flex>
      </li>
    </ul>
  )
}
