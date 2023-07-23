import { Divider, Paper, Title, TextInput, Stack, Center, Button, Select } from '@mantine/core'
import { useStyles } from './index.style'
import { IconChevronDown } from '@tabler/icons-react'
import { useUserFormContext } from '@/context/form-context'
import { CalendarIcon } from '@/assets/icon'
import { getDateFirebase, parseDateFirebase } from '@/utils/convertDate'
import { useState } from 'react'
import { notifications } from '@mantine/notifications'
import { FirebaseService } from '@/firebase/handler'
import { FIREBASE_COLLECTION } from '@/firebase/collection'

const genderOption = [
  {
    value: 'female',
    label: 'Nữ'
  },
  {
    value: 'male',
    label: 'Nam'
  }
]

const InforSection = () => {
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
  const handleError = (errors: typeof form.errors) => {
    if (errors.firstName) {
      notifications.show({ message: 'Tên phải có ít nhất 2 ký tự', color: 'red' })
    } else if (errors.email) {
      notifications.show({ message: 'Email không hợp lệ', color: 'red' })
    }
  }

  const successNotification = () => {
    notifications.show({
      title: 'Chỉnh sửa thành công',
      message: 'Thông tin khách hàng đã được cập nhật',
      autoClose: 3000,
      color: 'green',
      withCloseButton: true
    })
  }

  return (
    <form
      // submit after pressing submit button:
      // 1. update data to firebase
      // 2. reset validate state
      // 3. show notification
      // 4. show error message
      onSubmit={form.onSubmit(() => {
        FirebaseService.updateById(FIREBASE_COLLECTION.USERS, form.values, form.getInputProps('fireBaseId').value)
        form.resetDirty()
        form.resetTouched()
        successNotification()
      }, handleError)}
    >
      <Paper radius={10} p={20} shadow='md'>
        <Center>
          <Title size={20} mb={16}>
            Thông tin cá nhân
          </Title>
        </Center>
        <Stack spacing={20}>
          <Divider />
          <Stack spacing={15}>
            <TextInput className={classes.input} {...form.getInputProps('firstName')} />
            <TextInput className={classes.input} {...form.getInputProps('lastName')} />
            <TextInput className={classes.input} {...form.getInputProps('email')} />
            <TextInput className={classes.input} {...form.getInputProps('txtPhone')} />
            <Select
              label=''
              nothingFound='No options'
              data={genderOption}
              rightSection={<IconChevronDown color='gray' size={20} />}
              rightSectionWidth={50}
              className={classes.input}
              {...form.getInputProps('gender')}
            />
            <TextInput
              className={classes.input}
              value={newDate}
              name='dob'
              onChange={handleDateChange}
              rightSection={<CalendarIcon />}
              rightSectionWidth={50}
            />
            <Button
              radius={10}
              size='md'
              color={form.isDirty() ? 'dark.4' : 'dark.1'}
              fw={300}
              type='submit'
              disabled={!form.isDirty()}
            >
              Cập nhật
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </form>
  )
}

export default InforSection
