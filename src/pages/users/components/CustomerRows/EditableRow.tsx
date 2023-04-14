import { ActiveEditIcon, DefaultAvatar, EditIcon } from '@/assets/icon'
import { getMemberShip } from '@/utils/getMembership'
import { Checkbox, ActionIcon, TextInput, Select, Image, Flex, Stack } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { useStyles } from './index.style'
import { getDateFirebase, parseDateFirebase } from '@/utils/convertDate'
import { useUserFormContext } from '@/context/form-context'
import { useClickOutside } from '@mantine/hooks'
import CustomModal from '@/components/modal'

interface EditRowProps {
  isSelected: boolean
  handleSelectedRow: () => void
  editMode: boolean
  setEditMode: Dispatch<SetStateAction<boolean>>
}

export const EditRow = ({ handleSelectedRow, isSelected, editMode, setEditMode }: EditRowProps) => {
  const { classes } = useStyles()
  const form = useUserFormContext()
  const dateFormat = getDateFirebase(form.getInputProps('dob').value)
  const [newDate, setNewDate] = useState(dateFormat ? JSON.parse(dateFormat) : '')

  // Modal check saved state, if not reset state and close modal
  const openNothingModal = () =>
    CustomModal({
      title: 'Thông báo',
      content: 'Không có khách hàng nào được chọn',
      onConfirm: () => null
    })

  const ref = useClickOutside(() => {
    setEditMode(!editMode)
  })

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setNewDate(value)
    form.setValues({
      dob: parseDateFirebase(value)
    })
  }

  return (
    <Flex sx={{ margin: 0, padding: 0, fontSize: 12, width: '100%' }} key={form.getInputProps('fireBaseId').value}>
      <Flex align='center' sx={{ float: 'left' }} mr={20}>
        <Checkbox
          sx={{ input: { backgroundColor: '#f5f5f5' } }}
          checked={isSelected}
          color='gray.8'
          size='lg'
          radius={10}
          onChange={handleSelectedRow}
        />
      </Flex>
      <Flex
        sx={(theme) => ({
          borderRadius: 10,
          width: '100%',
          height: 60,
          backgroundColor: isSelected ? 'white' : theme.colors.dark[0],
          boxShadow: isSelected ? `0px 0px 20px rgba(0, 0, 0, 0.1)` : ''
        })}
        ref={ref}
      >
        <Flex px={20} p={10} w='100%' align='center' gap={5}>
          <Stack sx={{ width: '7%' }}>
            {!form.getInputProps('avatar').value ? (
              <DefaultAvatar />
            ) : (
              <Image
                src={form.getInputProps('avatar').value}
                width={30}
                height={30}
                radius={50}
                styles={(theme) => ({
                  image: {
                    border: `2px solid ${theme.colors.dark[1]}`
                  }
                })}
              />
            )}
          </Stack>
          <Stack
            sx={{
              width: '10%'
            }}
          >
            <TextInput
              className={classes.td}
              sx={{ input: { fontWeight: 700, textTransform: 'uppercase' } }}
              name='firstName'
              {...form.getInputProps('firstName')}
            ></TextInput>
          </Stack>
          <Stack
            sx={{
              width: '15%'
            }}
          >
            <TextInput
              className={classes.td}
              sx={{ input: { fontWeight: 700, textTransform: 'uppercase' } }}
              name='lastName'
              {...form.getInputProps('lastName')}
            ></TextInput>
          </Stack>
          <Stack
            sx={{
              width: '25%'
            }}
          >
            <TextInput className={classes.td} name='email' {...form.getInputProps('email')} />
          </Stack>
          <Stack
            sx={{
              width: '15%'
            }}
          >
            <TextInput className={classes.td} name='txtPhone' {...form.getInputProps('txtPhone')} />
          </Stack>
          <Stack
            sx={{
              width: '8%'
            }}
          >
            <Select
              // label=''
              nothingFound='No options'
              placeholder={form.getInputProps('gender').value === 'male' ? 'Nam' : 'Nữ'}
              {...form.getInputProps('gender')}
              switchDirectionOnFlip
              onChange={(value) => {
                form.setValues({
                  gender: value ?? 'male'
                })
              }}
              data={[
                {
                  value: 'female',
                  label: 'Nữ'
                },
                {
                  value: 'male',
                  label: 'Nam'
                }
              ]}
              onDropdownClose={() => setEditMode(false)}
              defaultValue={form.getInputProps('gender').value}
              rightSection={<IconChevronDown color='gray' size={16} />}
              rightSectionWidth={20}
              styles={(theme) => ({
                root: {
                  width: '90%'
                },
                input: {
                  backgroundColor: theme.colors.dark[0],
                  border: 'none',
                  height: 40,
                  fontWeight: 500,
                  fontSize: 12
                },
                item: {
                  fontSize: 12,
                  // applies styles to selected item
                  '&[data-selected]': {
                    '&, &:hover': {
                      backgroundColor: theme.black,
                      color: theme.white
                    }
                  },

                  // applies styles to hovered item (with mouse or keyboard)
                  '&[data-hovered]': {}
                }
              })}
            />
          </Stack>
          <Stack
            sx={{
              width: '16%'
            }}
          >
            <TextInput className={classes.td} value={newDate} name='dob' onChange={handleDateChange}></TextInput>
          </Stack>
          <Stack
            sx={{
              width: '9%'
            }}
          >
            {getMemberShip(form.getInputProps('member').value)}
          </Stack>
          <Stack
            sx={{
              width: 'auto'
            }}
          >
            <ActionIcon onClick={() => setEditMode(!editMode)} type='submit'>
              {editMode ? <ActiveEditIcon /> : <EditIcon />}
            </ActionIcon>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  )
}
