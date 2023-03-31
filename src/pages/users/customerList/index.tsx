import { ActionIcon, Center, Flex, Loader, Paper, Stack, Title, Text } from '@mantine/core'
import { useEffect, useState } from 'react'
import { DeleteIcon, MailIcon } from '@/assets/icon'
import { MEMBERSHIP, UserProps } from '@/types/user'
import { deleteItem, getAll } from '@/firebase/handler'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { useCustomerContext } from '@/context/CustomerContext/CustomerContext'
import { setSelectedRow } from '@/reducer/customer/action'
import CustomerTable from '../components/customerTable'
import CustomModal from '@/components/modal'
import { useLocation } from 'react-router-dom'
import { getMemberName } from '@/utils/getMemberName'
import { addItem } from '@/firebase/handler'
import CustomerTable2 from '../components/customerTable'

interface UserListProps {
  membership: MEMBERSHIP | 'all'
}
const second = 1679333334
const nanoSecond = 180000000

const date = new Date(second / 1000 + nanoSecond / 1000000)

const mockData = {
  avatar: '',
  firstName: 'NGUYỄN',
  lastName: 'KIỆT 123',
  email: 'BDuyen1011@gmail.com',
  txtPhone: '(+84)933220078',
  gender: 'female',
  dob: date,
  member: MEMBERSHIP.SILVER
}

const handleAddItem = async () => {
  addItem(FIREBASE_COLLECTION.USERS, mockData)
}

const UsersList = ({ membership }: UserListProps) => {
  const [userData, setUserData] = useState<UserProps[]>()
  const [loading, setLoading] = useState<boolean>(false)
  const { selectedRow, dispatch } = useCustomerContext()
  const { pathname } = useLocation()
  const title = getMemberName(membership)

  const openDeleteModal = () =>
    CustomModal({
      title: 'Xoá thông tin',
      content: 'Bạn có muốn xoá thông tin các khách hàng được chọn không ?',
      onConfirm: () => {
        handleDeleteUser(selectedRow)
      }
    })

  const openNothingModal = () =>
    CustomModal({
      title: 'Thông báo',
      content: 'Không có khách hàng nào được chọn',
      onConfirm: () => null
    })

  const handleDeleteUser = (list: string[]) => {
    list.map((item) => deleteItem(FIREBASE_COLLECTION.USERS, item))
    dispatch(setSelectedRow([]))
    location.reload()
  }

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true)
      const data =
        membership !== 'all'
          ? await getAll(FIREBASE_COLLECTION.USERS, membership)
          : await getAll(FIREBASE_COLLECTION.USERS)
      setUserData(data)
      setLoading(false)
    }
    fetchUserData().catch(console.error)
  }, [membership, pathname])

  return (
    <Paper p={40} sx={{ backgroundColor: '#f5f5f5' }}>
      <Stack spacing={20}>
        <Flex mr={10} justify='space-between'>
          <Title variant='h3' size={24}>
            {title}
          </Title>
          <Flex gap={20}>
            <ActionIcon
            // onClick={() =>
            //   CustomModal({
            //     title: 'Xoá thông tin',
            //     content: 'Bạn có muốn xoá thông tin các khách hàng được chọn không ?',
            //     onConfirm: () => {
            //       handleAddItem()
            //     }
            //   })
            // }
            >
              <MailIcon />
            </ActionIcon>
            <ActionIcon onClick={selectedRow.length ? openDeleteModal : openNothingModal}>
              <DeleteIcon />
            </ActionIcon>
          </Flex>
        </Flex>

        {loading ? (
          <Paper p={40} radius={10} shadow='md'>
            <Center>
              <Loader variant='dots' />
            </Center>
          </Paper>
        ) : (
          <Paper p={40} radius={10} shadow='md'>
            {userData && userData.length > 0 ? (
              <CustomerTable2 data={userData} />
            ) : (
              <Center>
                <Text>Danh sách khách hàng trống</Text>
              </Center>
            )}
          </Paper>
        )}
      </Stack>
    </Paper>
  )
}

export default UsersList
