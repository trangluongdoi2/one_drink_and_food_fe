import { ActiveEditIcon, EditIcon } from '@/assets/icon'
import { getMemberShip } from '@/utils/getMembership'
import { Avatar, Checkbox, ActionIcon, TextInput, Select } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { useStyles } from './index.style'
import { getDateFirebase, parseDateFirebase } from '@/utils/convertDate'
import { useUserFormContext } from '@/context/form-context'

interface EditableRowProps {
  isSelected: boolean
  handleSelectedRow: () => void
  edit: boolean
  setEdit: Dispatch<SetStateAction<boolean>>
}

export const EditableRow = ({ handleSelectedRow, isSelected, edit, setEdit }: EditableRowProps) => {
  const { classes } = useStyles()
  const form = useUserFormContext()
  const dateFormat = getDateFirebase(form.getInputProps('dob').value)
  const [newDate, setNewDate] = useState(dateFormat ? JSON.parse(dateFormat) : '')

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setNewDate(value)
    form.setValues({
      dob: parseDateFirebase(value)
    })
  }

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
          backgroundColor: isSelected || edit ? '#fff' : '#f5f5f5',
          boxShadow: isSelected || edit ? '2px 2px 10px 2px #f5f5f5' : '',
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
            <Avatar src={form.getInputProps('avatar').value} />
          </li>
          <li
            style={{
              width: '10%'
            }}
          >
            <TextInput
              className={classes.td}
              sx={{ input: { fontWeight: 700 } }}
              name='firstName'
              {...form.getInputProps('firstName')}
            ></TextInput>
          </li>
          <li
            style={{
              width: '15%'
            }}
          >
            <TextInput
              className={classes.td}
              sx={{ input: { fontWeight: 700 } }}
              name='lastName'
              {...form.getInputProps('lastName')}
            ></TextInput>
          </li>
          <li
            style={{
              width: '25%'
            }}
          >
            <TextInput className={classes.td} name='email' {...form.getInputProps('email')}></TextInput>
          </li>
          <li
            style={{
              width: '15%'
            }}
          >
            <TextInput className={classes.td} name='txtPhone' {...form.getInputProps('txtPhone')}></TextInput>
          </li>
          <li
            style={{
              width: '10%'
            }}
          >
            <Select
              label=''
              nothingFound='No options'
              placeholder={form.getInputProps('gender').value === 'male' ? 'Nam' : 'Nữ'}
              onChange={(value) =>
                form.setValues({
                  gender: value ?? 'male'
                })
              }
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
              rightSection={<IconChevronDown color='gray' size={14} />}
              rightSectionWidth={30}
              sx={{ width: '90%' }}
            />
          </li>
          <li
            style={{
              width: '15%'
            }}
          >
            <TextInput className={classes.td} value={newDate} name='dob' onChange={handleDateChange}></TextInput>
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
            <ActionIcon onClick={() => setEdit(!edit)} type='submit'>
              {edit ? <ActiveEditIcon /> : <EditIcon />}
            </ActionIcon>
          </li>
        </ul>
      </li>
    </ul>
  )
}
