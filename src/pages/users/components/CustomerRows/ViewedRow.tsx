import { ActiveEditIcon, DefaultAvatar, EditIcon } from '@/assets/icon'
import { useUserFormContext } from '@/context/form-context'
import { UserProps } from '@/types/user'
import { getDateFirebase } from '@/utils/convertDate'
import { getMemberShip } from '@/utils/getMembership'
import { Checkbox, ActionIcon, Text, Stack, Flex, Image, TextInput, MantineTheme, Select } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'
import { useStyles } from './index.style'
import { IconChevronDown } from '@tabler/icons-react'

interface ViewRowProps {
  row: UserProps
  isSelected: boolean
  handleSelectedRow: () => void
  editMode: boolean
  setEditMode: Dispatch<SetStateAction<boolean>>
  onOpenModal: () => void
}

interface CustomRowProps {
  editMode: boolean
  children: JSX.Element
  width: string
}

const CustomRow = ({ editMode, children, width, ...props }: CustomRowProps) => {
  const { classes } = useStyles()
  return (
    <Stack sx={{ width: width }}>
      {editMode ? (
        <TextInput {...props} className={classes.td} sx={{ input: { fontWeight: 700 } }} />
      ) : (
        <Text lh={1.4} {...props}>
          {children}
        </Text>
      )}
    </Stack>
  )
}

export const ViewRow = ({ handleSelectedRow, isSelected, onOpenModal, setEditMode, editMode }: ViewRowProps) => {
  const form = useUserFormContext()
  const dateFormat = getDateFirebase(form.getInputProps('dob').value)
  // const row = [
  //   {
  //     width: '7%',
  //     children: (
  //       <>
  //         {!form.getInputProps('avatar').value ? (
  //           <DefaultAvatar />
  //         ) : (
  //           <Image
  //             src={form.getInputProps('avatar').value}
  //             width={30}
  //             height={30}
  //             radius={50}
  //             styles={(theme) => ({
  //               image: {
  //                 border: `2px solid ${theme.colors.dark[1]}`
  //               }
  //             })}
  //           />
  //         )}
  //       </>
  //     ),
  //     ...form.getInputProps('avatar').value,
  //     mode: editMode
  //   },

  //   {
  //     width: '10%',
  //     children: (
  //       <Text fw='bolder' lh={1.4}>
  //         {form.getInputProps('firstName').value}
  //       </Text>
  //     ),
  //     ...form.getInputProps('firstName'),
  //     mode: editMode
  //   },

  //   {
  //     width: '14%',
  //     children: (
  //       <Text fw='bolder' lh={1.4}>
  //         {form.getInputProps('lastName').value}
  //       </Text>
  //     ),
  //     ...form.getInputProps('lastName'),
  //     mode: editMode
  //   },
  //   {
  //     width: '25%',
  //     children: <Text lh={1.4}> {form.getInputProps('email').value}</Text>,
  //     ...form.getInputProps('email'),
  //     mode: editMode
  //   },
  //   {
  //     width: '15%',
  //     children: <Text lh={1.4}> {form.getInputProps('txtPhone').value}</Text>,
  //     ...form.getInputProps('txtPhone'),
  //     mode: editMode
  //   },
  //   {
  //     width: '9%',
  //     children: (
  //       <>
  //         {editMode ? (
  //           <Select
  //             nothingFound='No options'
  //             placeholder={form.getInputProps('gender').value === 'male' ? 'Nam' : 'Nữ'}
  //             switchDirectionOnFlip
  //             onChange={(value) =>
  //               form.setValues({
  //                 gender: value ?? 'male'
  //               })
  //             }
  //             data={[
  //               {
  //                 value: 'female',
  //                 label: 'Nữ'
  //               },
  //               {
  //                 value: 'male',
  //                 label: 'Nam'
  //               }
  //             ]}
  //             defaultValue={form.getInputProps('gender').value}
  //             rightSection={<IconChevronDown color='gray' size={14} />}
  //             rightSectionWidth={30}
  //             sx={(theme: MantineTheme) => ({
  //               width: '90%',
  //               input: {
  //                 backgroundColor: theme.colors.dark[3],
  //                 height: 40
  //               }
  //             })}
  //           />
  //         ) : (
  //           <Text>{form.getInputProps('gender').value === 'male' ? 'Nam' : 'Nữ'}</Text>
  //         )}
  //       </>
  //     ),
  //     ...form.getInputProps('gender'),
  //     mode: editMode
  //   },
  //   {
  //     width: '16%',
  //     children: <Text lh={1.4}>{dateFormat ? JSON.parse(dateFormat) : ''}</Text>,
  //     ...form.getInputProps('dob'),
  //     mode: editMode
  //   },
  //   {
  //     width: '9%',
  //     children: <Text lh={1.4}>{getMemberShip(form.getInputProps('member').value)}</Text>,
  //     ...form.getInputProps('member'),
  //     mode: editMode
  //   },
  //   {
  //     width: 'auto',
  //     children: (
  //       <ActionIcon
  //         onClick={(e) => {
  //           e.stopPropagation()
  //           setEditMode(!editMode)
  //         }}
  //       >
  //         {editMode ? <ActiveEditIcon /> : <EditIcon />}
  //       </ActionIcon>
  //     ),
  //     mode: editMode
  //   }
  // ]

  return (
    <Flex sx={{ margin: 0, padding: 0, fontSize: 12, width: '100%' }}>
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
        align='center'
        justify='center'
      >
        <Flex px={20} py={10} w='100%' align='center' justify='center'>
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

            <Stack sx={{ width: '10%' }}>
              <Text fw='bolder' lh={1.4} tt='uppercase'>
                {form.getInputProps('firstName').value}
              </Text>
            </Stack>

            <Stack sx={{ width: '14%' }}>
              <Text fw='bolder' lh={1.4} tt='uppercase'>
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

            <Stack sx={{ width: '9%' }}>{getMemberShip(form.getInputProps('member').value)}</Stack>

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
            {/* {row.map((item, index) => (
              // eslint-disable-next-line react/no-children-prop
              <CustomRow key={index} width={item.width} children={item.children} editMode={item.mode} />
            ))} */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    // </ul>
  )
}
