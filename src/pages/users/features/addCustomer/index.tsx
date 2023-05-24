import { Center, Flex, Loader, Paper, Stack, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useEffect } from 'react'
import CustomerTable from '../../components/CustomerTables'
import { useFetchUser } from '../../services/useFetchUser'

const AddCustomer = () => {
  const [opened, { open, close }] = useDisclosure(false)
  const { loading, userData } = useFetchUser({ key: 'member', params: 'all' })

  useEffect(() => {
    open()
  }, [open])

  return (
    <>
      {/* <RegisterModal opened={opened} close={close} title='ĐĂNG KÍ THÀNH VIÊN' /> */}

      <Paper p={40} sx={{ backgroundColor: '#f5f5f5' }}>
        <Stack spacing={20}>
          <Flex mr={10} justify='space-between'>
            <Title variant='h3' size={24}>
              Thông tin đăng ký
            </Title>
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
    </>
  )
}

export default AddCustomer
