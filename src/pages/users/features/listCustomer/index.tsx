import { ActionIcon, Center, Flex, Loader, Paper, Stack, Title, Text } from '@mantine/core'
import { DeleteIcon, MailIcon } from '@/assets/icon'
import { MEMBERSHIP } from '@/types/user'
import { FirebaseService } from '@/firebase/handler'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { useCustomerContext } from '@/context/CustomerContext/CustomerContext'
import { setSelectedRow } from '@/reducer/customer/action'
import CustomModal from '@/components/modal'
import { getMemberName } from '@/utils/getMemberName'
import CustomerTable from '../../components/CustomerTable'
import { useFetchUser } from '@/pages/users/services/useFetchUser'
import { notifications } from '@mantine/notifications'

interface UserListProps {
  membership: MEMBERSHIP | 'all'
}

const mockData = {
  avatar: '',
  firstName: 'NGUYỄN',
  lastName: 'KIỆT 1',
  email: 'BDuyen1011@gmail.com',
  txtPhone: '(+84)93322333',
  gender: 'male',
  dob: {
    nanoseconds: 180000000,
    seconds: 1679333334
  },
  member: MEMBERSHIP.GOLD
}

const ListCustomer = ({ membership }: UserListProps) => {
  const { selectedRow, dispatch } = useCustomerContext()
  const title = getMemberName(membership)
  const { loading, userData } = useFetchUser({ key: 'member', params: membership })
  const { create, deleteById } = FirebaseService

  const handleAddItem = async () => {
    create(FIREBASE_COLLECTION.USERS, mockData)
  }
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
    list.forEach((item) => deleteById(FIREBASE_COLLECTION.USERS, item))
    dispatch(setSelectedRow([]))
  }

  return (
    <Paper p={40} sx={{ backgroundColor: '#f5f5f5' }}>
      <Stack spacing={20}>
        <Flex mr={10} justify='space-between'>
          <Title variant='h3' size={24}>
            {title}
          </Title>
          <Flex gap={20}>
            {/* <ActionIcon
              onClick={() => {
                handleAddItem()
              }}
            >
              <MailIcon />
            </ActionIcon> */}
            <ActionIcon
              onClick={() => {
                notifications.show({
                  title: 'Chỉnh sửa thành công',
                  message: 'Thông tin khách hàng đã được cập nhật',
                  autoClose: 3000
                })
              }}
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
              <CustomerTable data={userData} />
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

export default ListCustomer
