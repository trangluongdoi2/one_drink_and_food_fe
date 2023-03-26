import { Checkbox, Flex, Paper, Stack, Title, Avatar } from '@mantine/core'
import React from 'react'
import { DeleteIcon, MailIcon } from '@/assets/icon'
import SearchField from '@/components/searchField'
import CustomTable from '@/components/table'
import { MEMBERSHIP, UserProps } from '@/types/user'
import avatar from '@/assets/image/avatar.png'

const mock: UserProps[] = [
  {
    id: 'adkjajf',
    avatar: avatar,
    firstName: 'Nguyễn ',
    lastName: 'Tín',
    email: 'dennisnguyen1011@gmail.com',
    phone: '0909090103',
    gender: 'Nam',
    dob: '10/11/1998',
    member: MEMBERSHIP.GOLD
  },
  {
    id: 'ad1134kjajf',
    avatar: 'dajdaljdf',
    firstName: 'Nguyễn ',
    lastName: 'Nam',
    email: 'dennisnguyen1011@gmail.com',
    phone: '0909090103',
    gender: 'Nam',
    dob: '10/11/1999',
    member: MEMBERSHIP.SILVER
  },
  {
    id: 'adkj1313ajf',
    avatar: 'dajdaljdf',
    firstName: 'Nguyễn ',
    lastName: 'Tín',
    email: 'dennisnguyen1011@gmail.com',
    phone: '0909090103',
    gender: 'Nam',
    dob: '10/11/1998',
    member: MEMBERSHIP.RUBY
  },
  {
    id: 'adkjajf',
    avatar: 'dajdaljdf',
    firstName: 'Nguyễn ',
    lastName: 'Tín',
    email: 'dennisnguyen1011@gmail.com',
    phone: '0909090103',
    gender: 'Nam',
    dob: '10/11/1998',
    member: MEMBERSHIP.GOLD
  },
  {
    id: 'adkjafdfajf',
    avatar: 'dajdaljdf',
    firstName: 'Lê ',
    lastName: 'Tín',
    email: 'dennisnguyen1011@gmail.com',
    phone: '0909090103',
    gender: 'Nam',
    dob: '10/11/1998',
    member: MEMBERSHIP.SILVER
  },
  {
    id: 'adgggakjajf',
    avatar: 'dajdaljdf',
    firstName: 'Nguyễn ',
    lastName: 'Tín',
    email: 'dennisnguyen1011@gmail.com',
    phone: '0909090103',
    gender: 'Nam',
    dob: '10/11/1998',
    member: MEMBERSHIP.GOLD
  },
  {
    id: 'adkj31fajf',
    avatar: 'dajdaljdf',
    firstName: 'Nguyễn ',
    lastName: 'Tín',
    email: 'dennisnguyen1011@gmail.com',
    phone: '0909090103',
    gender: 'Nam',
    dob: '10/11/1998',
    member: MEMBERSHIP.SILVER
  }
]

const UsersList = () => {
  console.log(DeleteIcon)
  return (
    <Paper p={40} sx={{ backgroundColor: '#f5f5f5' }}>
      <Stack spacing={20}>
        <Flex mr={10} justify='space-between'>
          <Title variant='h3' size={24}>
            Danh sách khách hàng
          </Title>
          <Flex gap={20}>
            <MailIcon />
            <DeleteIcon />
          </Flex>
        </Flex>

        <Paper p={40} radius={10} shadow='md'>
          <Stack>
            <Flex gap={20} sx={{ width: '100%' }} align='center'>
              <Checkbox color='dark' size='lg' radius={10} />

              <SearchField sx={{ width: '100%' }} />
            </Flex>
            <CustomTable data={mock} />
          </Stack>
        </Paper>
      </Stack>
    </Paper>
  )
}

export default UsersList
