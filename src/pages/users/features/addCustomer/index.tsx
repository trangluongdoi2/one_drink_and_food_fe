import { Flex, Paper, Stack, Title, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import RegisterModal from '@/pages/users/components/registerModal'
import { useEffect } from 'react'

const AddCustomer = () => {
  const [opened, { open, close }] = useDisclosure(false)

  useEffect(() => {
    open()
  }, [open])

  return (
    <>
      <RegisterModal opened={opened} close={close} title='ĐĂNG KÍ THÀNH VIÊN' />

      <Paper p={40} sx={{ backgroundColor: '#f5f5f5' }}>
        <Stack spacing={20}>
          <Flex mr={10} justify='space-between'>
            <Title variant='h3' size={24}>
              Thông tin đăng ký
            </Title>
            {/* <Flex gap={20}>
            <ActionIcon>
            <DeleteIcon />
            </ActionIcon>
          </Flex> */}
          </Flex>

          <Paper p={40} radius={10} shadow='md' sx={{ height: '100vh' }}>
            <Stack spacing={15}>
              <Group position='center'>{/* <Button onClick={open}>Open centered Modal</Button> */}</Group>
            </Stack>
          </Paper>
        </Stack>
      </Paper>
    </>
  )
}

export default AddCustomer
