import { DeleteIcon, MailIcon } from '@/assets/icon'
import CustomModal from '@/components/modal'
import { useCustomerContext } from '@/context/CustomerContext/CustomerContext'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { FirebaseService } from '@/firebase/handler'
import { setSelectedRow } from '@/reducer/customer/action'
import { MEMBERSHIP, TUserForm } from '@/types/user'
import { getMemberName } from '@/utils/getMemberName'
import { notify } from '@/utils/notification'
import { ActionIcon, Flex, Paper, Stack, Title } from '@mantine/core'
import UserTable from '../../components/CustomerTables/UserTable'
import { useGetAllUser } from '../../services/hook'
import { useForm } from '@mantine/form'
import { defaultUser } from '@/constants/user'

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

  const form = useForm<TUserForm>({
    initialValues: {
      selectedDataRow: defaultUser,
      dataForm: []
    }
  })

  const { create, deleteById } = FirebaseService

  const { data: userAdminData, isLoading } = useGetAllUser()

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
            <ActionIcon
              onClick={() => {
                notify({
                  title: 'Chỉnh sửa thành công',
                  message: 'Thông tin khách hàng đã được cập nhật'
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
        <Paper p={40} radius={10} shadow='md'>
          <UserTable data={userAdminData ?? []} loading={isLoading} form={form} />
        </Paper>
      </Stack>
    </Paper>
  )
}

export default ListCustomer
