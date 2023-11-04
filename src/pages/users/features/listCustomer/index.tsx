import { DeleteIcon, MailIcon } from '@/assets/icon'
import CustomModal from '@/components/modal'
import { useCustomerContext } from '@/context/CustomerContext/CustomerContext'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { FirebaseService } from '@/firebase/handler'
import { setSelectedRow } from '@/reducer/customer/action'
import { MEMBERSHIP } from '@/types/user'
import { getMemberName } from '@/utils/getMemberName'
import { notify } from '@/utils/notification'
import { ActionIcon, Flex, Paper, Stack, Title } from '@mantine/core'
import UserTable from '../../components/CustomerTables'
import { CustomerFormProvider, initialCustomerFormValues, useCustomerForm } from '../../services/form'
import { useGetAllUser } from '../../services/hook'

interface UserListProps {
  membership: MEMBERSHIP | 'all'
}

const ListCustomer = ({ membership }: UserListProps) => {
  const { selectedRow, dispatch } = useCustomerContext()
  const title = getMemberName(membership)

  const form = useCustomerForm({
    initialValues: initialCustomerFormValues
  })

  const { deleteById } = FirebaseService

  const { data: userAdminData, isLoading } = useGetAllUser()

  const handleAddItem = async () => {
    console.log('add item')
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
    <CustomerFormProvider form={form}>
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
            <UserTable data={userAdminData ?? []} loading={isLoading} />
          </Paper>
        </Stack>
      </Paper>
    </CustomerFormProvider>
  )
}

export default ListCustomer
