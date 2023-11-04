import { ActiveEditIcon, ActiveOverviewIcon, CompanyIcon, EditIcon, PlusIcon } from '@/assets/icon'
import { useCustomerFormContext } from '@/pages/users/services/form'
import { ActionIcon, Divider, Flex, Paper, Stack, Text, TextInput, TextInputProps, UnstyledButton } from '@mantine/core'
import { useState } from 'react'
import { useStyles } from './index.style'

type TInputRowProps = TextInputProps & {
  title: string
}

const InputRow = ({ title, ...props }: TInputRowProps) => {
  const { classes } = useStyles()

  return (
    <Stack spacing={5}>
      <Text fw='bolder' size='sm'>
        {title}
      </Text>
      <TextInput radius={10} w='100%' size='md' {...props} className={classes.input} />
    </Stack>
  )
}

const AddressSection = () => {
  const form = useCustomerFormContext()
  const { selectedDataRow } = form.values
  const [addNewAddress, setAddNewAddress] = useState<boolean>(false)
  const [addCompanyAddress, setAddCompanyAddress] = useState<boolean>(false)
  const [editMode, setEditMode] = useState<boolean>(false)

  const homeAddress = selectedDataRow?.listAddress?.find((address) => address.addressType === 'home')
  const companyAddress = selectedDataRow?.listAddress?.find((address) => address.addressType === 'company')

  return (
    <Paper radius={10} shadow='md' p={18}>
      <Stack>
        <Stack spacing={20}>
          {editMode ? (
            <Stack spacing={20}>
              <Flex w='100%' justify='space-between'>
                <Flex gap={10}>
                  <ActiveOverviewIcon />
                  <Text fw='bold'>Địa chỉ nhà</Text>
                </Flex>
                <ActionIcon onClick={() => setEditMode(!editMode)}>
                  <ActiveEditIcon />
                </ActionIcon>
              </Flex>
              <Divider />
              <InputRow title='Tên người nhận' value={homeAddress?.receiver ?? ''} readOnly />
              <InputRow title='Số điện thoại' value={homeAddress?.receiverMobilePhoneNumber ?? ''} readOnly />
              <InputRow title='Tên địa chỉ' value={homeAddress?.addressName ?? ''} readOnly />
              <InputRow title='Địa chỉ' value={homeAddress?.address ?? ''} readOnly />
              <InputRow title='Toà nhà, số tầng (nếu có)' value={homeAddress?.building ?? ''} readOnly />
              <InputRow title='Ghi chú khác' value={homeAddress?.note ?? ''} readOnly />
              {addCompanyAddress && <InputRow title='Địa chỉ công ty' {...form.getInputProps('lastName')} readOnly />}
              {addNewAddress && <InputRow title='Địa chỉ mới' {...form.getInputProps('lastName')} readOnly />}
            </Stack>
          ) : (
            <Stack>
              <Flex w='100%' justify='space-between'>
                <Flex gap={10}>
                  <ActiveOverviewIcon />
                  <Stack spacing={0}>
                    <Text fw='bold'>NHÀ</Text>
                    <Text size={12}>
                      {selectedDataRow.firstName} {selectedDataRow.lastName}
                    </Text>
                    <Text size={12}>{homeAddress?.receiver ?? ''}</Text>
                    <Text size={12}>{homeAddress?.address ?? ''}</Text>
                    <Text size={12}>{homeAddress?.building ?? ''}</Text>
                    <Text size={12}>{homeAddress?.note ?? ''}</Text>
                  </Stack>
                </Flex>

                <ActionIcon onClick={() => setEditMode(!editMode)}>
                  <EditIcon />
                </ActionIcon>
              </Flex>
            </Stack>
          )}
          <Divider color='gray.1' />

          {/* <UnstyledButton onClick={() => setAddCompanyAddress(true)}>
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
        </UnstyledButton> */}
        </Stack>
        <Stack spacing={20}>
          {editMode ? (
            <Stack spacing={20}>
              <Flex w='100%' justify='space-between'>
                <Flex gap={10}>
                  <CompanyIcon />
                  <Text fw='bold'>Địa chỉ nhà</Text>
                </Flex>
              </Flex>
              <Divider />
              <InputRow title='Tên người nhận' value={companyAddress?.receiver ?? ''} readOnly />
              <InputRow title='Số điện thoại' value={companyAddress?.receiverMobilePhoneNumber ?? ''} readOnly />
              <InputRow title='Tên địa chỉ' value={companyAddress?.addressName ?? ''} readOnly />
              <InputRow title='Địa chỉ' value={companyAddress?.address ?? ''} readOnly />
              <InputRow title='Toà nhà, số tầng (nếu có)' value={companyAddress?.building ?? ''} readOnly />
              <InputRow title='Ghi chú khác' value={companyAddress?.note ?? ''} readOnly />
              {addCompanyAddress && <InputRow title='Địa chỉ công ty' {...form.getInputProps('lastName')} readOnly />}
              {addNewAddress && <InputRow title='Địa chỉ mới' {...form.getInputProps('lastName')} readOnly />}
            </Stack>
          ) : (
            <Stack>
              <Flex w='100%' justify='space-between'>
                <Flex gap={10}>
                  <CompanyIcon />
                  <Stack spacing={0}>
                    <Text fw='bold'>Công ty</Text>
                    <Text size={12}>
                      {selectedDataRow.firstName} {selectedDataRow.lastName}
                    </Text>
                    <Text size={12}>{companyAddress?.receiver ?? ''}</Text>
                    <Text size={12}>{companyAddress?.address ?? ''}</Text>
                    <Text size={12}>{companyAddress?.building ?? ''}</Text>
                    <Text size={12}>{companyAddress?.note ?? ''}</Text>
                  </Stack>
                </Flex>
              </Flex>
            </Stack>
          )}
          <Divider color='gray.1' />
        </Stack>
      </Stack>
    </Paper>
  )
}

export default AddressSection
