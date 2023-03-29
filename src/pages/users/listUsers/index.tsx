import { ActionIcon, Center, Flex, Loader, Paper, Stack, Title, Text, Button } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { DeleteIcon, MailIcon } from '@/assets/icon'
import CustomTable from '@/components/table'
import { MEMBERSHIP, UserProps } from '@/types/user'
import avatar from '@/assets/image/avatart.png'
import { addItem, deleteItem, getAll } from '@/firebase/handler'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { modals } from '@mantine/modals'
import UserContextProvider, { useUserContext } from '@/context/UserContext/UserContext'

const UsersList = () => {
  const [userData, setUserData] = useState<UserProps[]>()
  const { selectedRow, setSelectedRow } = useUserContext()
  const second = 1679333334
  const nanoSecond = 180000000

  const date = new Date(second / 1000 + nanoSecond / 1000000)
  console.log('inside', selectedRow)

  const mockData = {
    avatar: '',
    firstName: 'NGUYỄN',
    lastName: 'KIỆT',
    email: 'BDuyen1011@gmail.com',
    txtPhone: '(+84)933220078',
    gender: 'Nam',
    dob: date,
    member: MEMBERSHIP.GOLD
  }

  const onSend = () => {
    // addItem(FIREBASE_COLLECTION.USERS, mockData)
    modals.openConfirmModal({
      title: "Edit user's information",
      centered: true,
      children: <Text size='sm'>Are you sure you want to edit your profile?</Text>,
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      confirmProps: { color: 'blue' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed')
    })
  }

  const openDeleteModal = () => {
    modals.openConfirmModal({
      title: 'Xoá thông tin',
      centered: true,
      children: <Text size='sm'>Bạn có muốn xoá thông tin các khách hàng được chọn không ?</Text>,
      labels: { confirm: 'Xoá thông tin', cancel: 'Huỷ bỏ' },
      confirmProps: { color: 'red' },
      onCancel: () => null,
      onConfirm: () => {
        handleDeleteUser(selectedRow)
      }
    })
  }

  const openNothingModal = () => {
    modals.openConfirmModal({
      title: 'Thông báo',
      centered: true,
      children: <Text size='sm'>Không có khách hàng nào được chọn</Text>,
      labels: { confirm: 'Đồng ý', cancel: 'Huỷ bỏ' },
      confirmProps: { color: 'blue' },
      onCancel: () => null,
      onConfirm: () => {
        handleDeleteUser(selectedRow)
      }
    })
  }

  const handleDeleteUser = (list: string[]) => {
    list.map((item) => deleteItem(FIREBASE_COLLECTION.USERS, item))
    setSelectedRow([])
    location.reload()
  }

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getAll(FIREBASE_COLLECTION.USERS)
      setUserData(data)
    }
    fetchUserData().catch(console.error)
  }, [])

  return (
    <Paper p={40} sx={{ backgroundColor: '#f5f5f5' }}>
      <Stack spacing={20}>
        <Flex mr={10} justify='space-between'>
          <Title variant='h3' size={24}>
            Danh sách khách hàng
          </Title>
          <Flex gap={20}>
            <ActionIcon onClick={onSend}>
              <MailIcon />
            </ActionIcon>
            <ActionIcon onClick={selectedRow.length ? openDeleteModal : openNothingModal}>
              <DeleteIcon />
            </ActionIcon>
          </Flex>
        </Flex>

        <Paper p={40} radius={10} shadow='md'>
          {userData && userData.length > 0 ? (
            <CustomTable data={userData} />
          ) : (
            <Center>
              <Loader variant='dots' />
            </Center>
          )}
        </Paper>
      </Stack>
    </Paper>
  )
}

export default UsersList
