import { ActiveEditIcon, DefaultAvatar } from '@/assets/icon'
import { useUserFormContext } from '@/context/form-context'
import { getStatus } from '@/utils/getStatus'
import { Avatar, Checkbox, ActionIcon, Text, Flex, Stack, TextInput } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'
import { useStyles } from './index.style'
import { clsx } from '@mantine/core'

interface EditRowProps {
  isSelected: boolean
  handleSelectedRow: () => void
  edit: boolean
  setEdit: Dispatch<SetStateAction<boolean>>
}

export const EditRow = ({ handleSelectedRow, isSelected, edit, setEdit }: EditRowProps) => {
  const form = useUserFormContext()
  const { classes } = useStyles()
  // const dateFormat = getDateFirebase(form.getInputProps('dob').value)

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
        <Flex gap={10} align='center' justify='left' p={20} sx={{ width: '100%', fontSize: 12 }}>
          <Stack sx={{ width: '15%' }}>
            <Text fw='bolder' lh={1.4}>
              {form.getInputProps('fireBaseId').value.split('-').pop()}
            </Text>
          </Stack>
          <Stack sx={{ width: '8%' }}>
            {!form.getInputProps('avatar').value ? (
              <DefaultAvatar />
            ) : (
              <Avatar src={form.getInputProps('avatar').value} radius='lg' />
            )}
          </Stack>
          <Stack sx={{ width: '20%' }} className={classes.td}>
            <TextInput
              sx={{ input: { fontWeight: 700 } }}
              name='recipientName'
              {...form.getInputProps('recipientName')}
            />
          </Stack>
          <Stack className={clsx(classes.td, classes.address)} sx={{ width: '45%' }}>
            <TextInput name='address' {...form.getInputProps('address')} />
          </Stack>
          <Stack sx={{ width: '15%' }}>
            <TextInput className={classes.td} name='phone' {...form.getInputProps('phone')} />
          </Stack>
          <Stack sx={{ width: '15%' }}>
            <TextInput className={classes.td} name='receivedDate' {...form.getInputProps('receivedDate')} />
          </Stack>
          <Stack sx={{ width: '10%' }}>
            <Text lh={1.4}>{getStatus(form.getInputProps('status').value)}</Text>
          </Stack>

          <Stack sx={{ width: '6%' }}>
            <ActionIcon onClick={() => setEdit(!edit)}>
              <ActiveEditIcon />
            </ActionIcon>
          </Stack>
        </Flex>
      </li>
    </ul>
  )
}
