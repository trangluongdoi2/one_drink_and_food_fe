import { ActionIcon, Center, Flex, Loader, Paper, Stack, Title } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { DeleteIcon, MailIcon } from '@/assets/icon'
import CustomTable from '@/components/table'
import { MEMBERSHIP, UserProps } from '@/types/user'
import avatar from '@/assets/image/avatart.png'
import { addItem, getAll } from '@/firebase/handler'
import { FIREBASE_COLLECTION } from '@/firebase/collection'

const mock = [
  {
    id: 'adkjaadafadfjf',
    avatar: avatar,
    firstName: 'Nguyễn',
    lastName: 'Tài',
    email: 'tainguyen1011@gmail.com',
    txtPhone: '0909090adf103',
    gender: 'Nam',
    dob: '10/11/1998',
    member: MEMBERSHIP.GOLD
  }
  // {
  //   id: 'ad1134kjajf',
  //   avatar: 'dajdaljdf',
  //   firstName: 'Nguyễn ',
  //   lastName: 'Nam',
  //   email: 'dennisnguyen1011@gmail.com',
  //   txtPhone: '0909090103',
  //   gender: 'Nam',
  //   dob: '10/11/1999',
  //   member: MEMBERSHIP.SILVER
  // },
  // {
  //   id: 'adkj1313ajf',
  //   avatar: 'dajdaljdf',
  //   firstName: 'Nguyễn ',
  //   lastName: 'Tín',
  //   email: 'dennisnguyen1011@gmail.com',
  //   txtPhone: '0909090103',
  //   gender: 'Nam',
  //   dob: '10/11/1998',
  //   member: MEMBERSHIP.RUBY
  // },
  // {
  //   id: 'adkjadadadjf',
  //   avatar: 'dajdaljdf',
  //   firstName: 'Nguyễn ',
  //   lastName: 'Tín',
  //   email: 'tai.nguy@gmail.com',
  //   txtPhone: '0909090103',
  //   gender: 'Nam',
  //   dob: '10/11/1998',
  //   member: MEMBERSHIP.GOLD
  // },
  // {
  //   id: 'adkjafdadfafajf',
  //   avatar: 'dajdaljdf',
  //   firstName: 'Lê ',
  //   lastName: 'Tín',
  //   email: 'dennisnguyen1011@gmail.com',
  //   txtPhone: '0909090103',
  //   gender: 'Nam',
  //   dob: '10/11/1998',
  //   member: MEMBERSHIP.SILVER
  // },
  // {
  //   id: 'adgggakjajf',
  //   avatar: 'dajdaljdf',
  //   firstName: 'Nguyễn ',
  //   lastName: 'Tín',
  //   email: 'dennisnguyen1011@gmail.com',
  //   txtPhone: '0909090103',
  //   gender: 'Nam',
  //   dob: '10/11/1998',
  //   member: MEMBERSHIP.GOLD
  // },
  // {
  //   id: 'adkj31fajf',
  //   avatar: 'dajdaljdf',
  //   firstName: 'Nguyễn ',
  //   lastName: 'Tín',
  //   email: 'dennisnguyen1011@gmail.com',
  //   txtPhone: '0909090103',
  //   gender: 'Nam',
  //   dob: '10/11/1998',
  //   member: MEMBERSHIP.SILVER
  // },
  // {
  //   id: 'adkj33141fajf',
  //   avatar: 'dajdaljdf',
  //   firstName: 'Nguyễn ',
  //   lastName: 'Tín',
  //   email: 'dennisnguyen1011@gmail.com',
  //   txtPhone: '0909090103',
  //   gender: 'Nam',
  //   dob: '10/11/1998',
  //   member: MEMBERSHIP.SILVER
  // },
  // {
  //   id: 'adkj3ag1q31fajf',
  //   avatar: 'dajdaljdf',
  //   firstName: 'Nguyễn ',
  //   lastName: 'Tín',
  //   email: 'dennisnguyen1011@gmail.com',
  //   txtPhone: '0909090103',
  //   gender: 'Nam',
  //   dob: '10/11/1998',
  //   member: MEMBERSHIP.SILVER
  // },
  // {
  //   id: 'adkj362462351fajf',
  //   avatar: 'dajdaljdf',
  //   firstName: 'Nguyễn ',
  //   lastName: 'Tín',
  //   email: 'dennisnguyen1011@gmail.com',
  //   txtPhone: '0909090103',
  //   gender: 'Nam',
  //   dob: '10/11/1998',
  //   member: MEMBERSHIP.SILVER
  // }
]

const UsersList = () => {
  const [userData, setUserData] = useState<UserProps[]>()
  console.log('userData', userData)
  const second = 1679333334
  const nanoSecond = 180000000

  const date = new Date(second / 1000 + nanoSecond / 1000000)
  console.log('date', date)

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

  const handleClick = () => {
    addItem(FIREBASE_COLLECTION.USERS, mockData)
  }

  useEffect(() => {
    const fetchDiscountData = async () => {
      const data = await getAll(FIREBASE_COLLECTION.USERS)
      setUserData(data)
    }
    fetchDiscountData().catch(console.error)
  }, [])

  return (
    <Paper p={40} sx={{ backgroundColor: '#f5f5f5' }}>
      <Stack spacing={20}>
        <Flex mr={10} justify='space-between'>
          <Title variant='h3' size={24}>
            Danh sách khách hàng
          </Title>
          <Flex gap={20}>
            <ActionIcon onClick={handleClick}>
              <MailIcon />
            </ActionIcon>
            <ActionIcon>
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
