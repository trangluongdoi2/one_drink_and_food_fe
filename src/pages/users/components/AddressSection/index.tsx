import { ActiveEditIcon, ActiveOverviewIcon, CompanyIcon, EditIcon, PlusIcon } from '@/assets/icon'
import { useUserFormContext } from '@/context/form-context'
import { ActionIcon, Divider, Flex, Paper, Stack, Text, TextInput, UnstyledButton } from '@mantine/core'
import { useState } from 'react'

const InputRow = ({ title, ...props }: { title: string }) => {
  return (
    <Stack spacing={5}>
      <Text fw='bolder' size='sm'>
        {title}
      </Text>
      <TextInput radius={10} w='100%' size='md' {...props} />
    </Stack>
  )
}

const AddressSection = () => {
  const form = useUserFormContext()
  const [addNewAddress, setAddNewAddress] = useState<boolean>(false)
  const [addCompanyAddress, setAddCompanyAddress] = useState<boolean>(false)
  const [editMode, setEditMode] = useState<boolean>(false)

  return (
    <Paper radius={10} shadow='md' p={18}>
      <Stack spacing={20}>
        {editMode ? (
          <Stack spacing={20}>
            <Flex w='100%' justify='space-between'>
              <Flex gap={10}>
                <ActiveOverviewIcon />
                <Text fw='bold'>Thêm địa chỉ nhà</Text>
              </Flex>
              <ActionIcon onClick={() => setEditMode(!editMode)}>
                <ActiveEditIcon />
              </ActionIcon>
            </Flex>
            <Divider />
            <InputRow title='Tên người nhận' {...form.getInputProps('lastName')} />
            <InputRow title='Số điện thoại' {...form.getInputProps('txtPhone')} />
            <InputRow title='Tên địa chỉ' {...form.getInputProps('addressName')} />
            <InputRow title='Địa chỉ' {...form.getInputProps('address')} />
            <InputRow title='Toà nhà, số tầng (nếu có)' {...form.getInputProps('floor')} />
            <InputRow title='Ghi chú khác' {...form.getInputProps('note')} />
            {addCompanyAddress && <InputRow title='Địa chỉ công ty' {...form.getInputProps('lastName')} />}
            {addNewAddress && <InputRow title='Địa chỉ mới' {...form.getInputProps('lastName')} />}
          </Stack>
        ) : (
          <Stack>
            <Flex w='100%' justify='space-between'>
              <Flex gap={10}>
                <ActiveOverviewIcon />
                <Stack spacing={0}>
                  <Text fw='bold'>NHÀ</Text>
                  <Text size={12}>
                    {form.getInputProps('firstName').value} {form.getInputProps('lastName').value}
                  </Text>
                  <Text size={12}>{form.getInputProps('txtPhone').value}</Text>
                  <Text size={12}>{form.getInputProps('address').value}</Text>
                  <Text size={12}>{form.getInputProps('floor').value}</Text>
                  <Text size={12}>{form.getInputProps('note').value}</Text>
                </Stack>
              </Flex>

              <ActionIcon onClick={() => setEditMode(!editMode)}>
                <EditIcon />
              </ActionIcon>
            </Flex>
          </Stack>
        )}
        <Divider color='gray.1' />

        <UnstyledButton onClick={() => setAddCompanyAddress(true)}>
          <Flex gap={10} align='center'>
            <CompanyIcon />
            <Text size={12}>Thêm địa chỉ công ty</Text>
          </Flex>
        </UnstyledButton>

        <Divider color='gray.1' />

        <UnstyledButton onClick={() => setAddNewAddress(true)}>
          <Flex gap={10} align='center'>
            <PlusIcon />
            <Text size={12}>Thêm địa chỉ mới</Text>
          </Flex>
        </UnstyledButton>
      </Stack>
    </Paper>
  )
}

export default AddressSection
