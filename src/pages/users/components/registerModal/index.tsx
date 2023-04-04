import {
  ActionIcon,
  BackgroundImage,
  Box,
  Button,
  Center,
  Flex,
  Modal,
  Stack,
  Text,
  TextInput,
  rem
} from '@mantine/core'
import bg from '@/assets/image/register-bg.png'
import overlay from '@/assets/image/overlay.png'
import { PersonIcon, EmailIcon, PhoneIcon } from '@/assets/icon'

interface RegisterModalProps {
  opened: boolean
  close: () => void
  title: string
}

const RegisterModal = ({ opened, close }: RegisterModalProps) => {
  return (
    <Modal opened={opened} onClose={close} centered padding={0} withCloseButton={false} radius={10} shadow='md'>
      <BackgroundImage src={bg} radius={10}>
        <BackgroundImage src={overlay} radius={10}>
          <Box sx={{ width: 430, height: 383 }} mx='auto'>
            <Center py={56} px={45}>
              <Stack spacing={20}>
                <Text color='#fff' size={16} fw={500}>
                  ĐĂNG KÝ NHẬN THÔNG TIN
                </Text>
                <Stack spacing={10}>
                  <Flex gap={10}>
                    <ActionIcon variant='outline' size={50} sx={{ border: '1px solid #fff' }}>
                      <PersonIcon />
                    </ActionIcon>
                    <TextInput
                      sx={{ input: { height: 50, backgroundColor: 'transparent', color: '#C4C4C4' } }}
                      placeholder='Họ'
                    ></TextInput>
                    <TextInput
                      sx={{ input: { height: 50, backgroundColor: 'transparent', color: '#fff' } }}
                      placeholder='Tên'
                    ></TextInput>
                  </Flex>

                  <Flex gap={10}>
                    <ActionIcon variant='outline' size={50} sx={{ border: '1px solid #fff' }}>
                      <EmailIcon />
                    </ActionIcon>
                    <TextInput
                      sx={{ input: { height: 50, backgroundColor: 'transparent', color: '#C4C4C4' }, width: '100%' }}
                      placeholder='Nhập email của bạn'
                    ></TextInput>
                  </Flex>

                  <Flex gap={10}>
                    <ActionIcon variant='outline' size={50} sx={{ border: '1px solid #fff' }}>
                      <PhoneIcon />
                    </ActionIcon>
                    <TextInput
                      sx={{ input: { height: 50, backgroundColor: 'transparent', color: '#C4C4C4' }, width: '100%' }}
                      placeholder='Nhập số điện thoại của bạn'
                    ></TextInput>
                  </Flex>

                  <Button
                    styles={() => ({
                      root: {
                        backgroundColor: '#fff',
                        color: '#000',
                        border: 0,
                        height: rem(50),
                        paddingLeft: rem(20),
                        paddingRight: rem(20),
                        '&:not([data-disabled])': {
                          '&:hover': {
                            backgroundColor: '#000',
                            color: '#fff'
                          }
                        }
                      }
                    })}
                  >
                    Gửi thông tin
                  </Button>
                </Stack>
              </Stack>
            </Center>
          </Box>
        </BackgroundImage>
      </BackgroundImage>
    </Modal>
  )
}

export default RegisterModal
