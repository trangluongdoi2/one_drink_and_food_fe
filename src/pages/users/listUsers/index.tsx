import { ActionIcon, Center, Flex, Loader, Paper, Stack, Title, Text, Button } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { DeleteIcon, MailIcon } from '@/assets/icon'
import CustomTable from '@/components/table'
import { MEMBERSHIP, UserProps } from '@/types/user'
import avatar from '@/assets/image/avatart.png'
import { addItem, getAll } from '@/firebase/handler'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { modals } from '@mantine/modals'
import UserContextProvider from '@/context/UserContext/UserContext'

const UsersList = () => {
  const [userData, setUserData] = useState<UserProps[]>()
  console.log('userData', userData)
  const second = 1679333334
  const nanoSecond = 180000000

  const date = new Date(second / 1000 + nanoSecond / 1000000)

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
    console.log('click')
    modals.openConfirmModal({
      title: 'Delete your profile',
      centered: true,
      children: (
        <Text size='sm'>
          Are you sure you want to delete your profile? This action is destructive and you will have to contact support
          to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete account', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed')
    })
  }

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getAll(FIREBASE_COLLECTION.USERS)
      setUserData(data)
    }
    fetchUserData().catch(console.error)
  }, [])

  return (
    <UserContextProvider>
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
              <ActionIcon onClick={openDeleteModal}>
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
    </UserContextProvider>
  )
}

export default UsersList
