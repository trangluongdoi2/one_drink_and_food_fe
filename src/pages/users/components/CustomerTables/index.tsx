import { DefaultAvatar, OneActiveIcon } from '@/assets/icon'
import Table from '@/components/table/table'
import RowInput from '@/components/table/table/rowInput'
import { TColumnsProps } from '@/components/table/table/type'
import { genderOptions } from '@/constants/global'
import { TUser } from '@/types/user'
import { Avatar, MantineTheme, Select } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import { FC, useState } from 'react'
import { useCustomerFormContext } from '../../services/form'
import DetailModal from '../DetailModals'
import { Gender } from '@/reducer/customer/type'

type TUserTableProps = {
  data: TUser[]
  loading?: boolean
}

const UserTable: FC<TUserTableProps> = ({ data, loading = false }) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [opened, { open, close }] = useDisclosure(false)
  const form = useCustomerFormContext()

  const handleChangeInput = (key: keyof TUser, value: string) => {
    form.setValues({ selectedDataRow: { ...form.values.selectedDataRow, [key]: value } })
  }

  const columns: TColumnsProps[] = [
    {
      id: 'avatar',
      title: 'Avatar',
      width: '10%',
      position: 'left',
      render: (data) => (!data.image ? <DefaultAvatar /> : <Avatar src={data.image} radius='lg' />)
    },
    {
      id: 'firstName',
      title: 'Họ',
      width: '10%',
      position: 'left',
      render: (data, isEdit) => (
        <RowInput
          isEditing={isEdit}
          value={data.firstName}
          name='firstName'
          onChange={(value) => handleChangeInput('firstName', value)}
        />
      )
    },
    {
      id: 'lastName',
      title: 'Tên',
      width: '10%',
      position: 'left',
      render: (data, isEdit) => (
        <RowInput
          isEditing={isEdit}
          value={data.lastName}
          name='lastName'
          onChange={(value) => handleChangeInput('lastName', value)}
        />
      )
    },
    {
      id: 'email',
      title: 'Email',
      width: '25%',
      position: 'left',
      render: (data, isEdit) => (
        <RowInput
          isEditing={isEdit}
          value={data.email}
          name='email'
          onChange={(value) => handleChangeInput('email', value)}
        />
      )
    },
    {
      id: 'phone',
      title: 'Số điện thoại',
      width: '10%',
      position: 'left',
      render: (data, isEdit) => (
        <RowInput
          isEditing={isEdit}
          value={data.mobilePhoneNumber}
          name='mobilePhoneNumber'
          onChange={(value) => handleChangeInput('mobilePhoneNumber', value)}
        />
      )
    },
    {
      id: 'gender',
      title: 'Giới tính',
      width: '10%',
      position: 'center',
      render: (data, isEdit) =>
        isEdit ? (
          <Select
            data={genderOptions}
            value={data?.gender ?? 'male'}
            rightSection={<IconChevronDown color='gray' size={14} />}
            rightSectionWidth={30}
            sx={(theme: MantineTheme) => ({
              width: '90%',
              input: {
                backgroundColor: theme.colors.dark[3]
              }
            })}
            onChange={(value: string) => handleChangeInput('gender', value)}
          />
        ) : (
          <RowInput
            isEditing={isEdit}
            value={data?.gender === Gender.MALE ? 'Nam' : 'Nữ'}
            name='gender'
            onChange={(value: string) => handleChangeInput('gender', value)}
          />
        )
    },
    {
      id: 'birth',
      title: 'Ngày sinh',
      width: '10%',
      position: 'center',
      render: (data, isEdit) => (
        <RowInput
          isEditing={isEdit}
          value={data?.birthDay}
          name='birth'
          onChange={(value: string) => handleChangeInput('birthDay', value)}
        />
      )
    },
    {
      id: 'member',
      title: 'Thành viên',
      width: '10%',
      position: 'center',
      render: (data) => (data?.isActive ? <OneActiveIcon /> : <DefaultAvatar />)
    }
  ]

  return (
    <>
      <DetailModal opened={opened} close={close} />

      <Table
        data={data}
        columns={columns}
        searchKey={'lastName'}
        onSubmitChange={() => console.log('submit')}
        selectedRows={selectedRows}
        onSelectRows={setSelectedRows}
        loading={loading}
        onRowClick={(value: TUser) => {
          form.setValues({ selectedDataRow: value })
          open()
        }}
        // onEdit={(value: TUser) => form.setValues({ selectedDataRow: value })}
      />
    </>
  )
}

export default UserTable
