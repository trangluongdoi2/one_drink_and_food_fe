import { TextInput, PasswordInput, Paper, Title, Container, Button, Stack, Image, Box, Center } from '@mantine/core'
import { Navigate } from 'react-router-dom'
import { login, loginGoogle } from '@/firebase/authenticate'
import { Fragment, useState } from 'react'
import { debounce } from 'lodash'
import background from '@/assets/image/logo-background.png'
import { OneLogo, UnVisibilityIcon, VisibilityIcon } from '@/assets/icon'

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState<string>('')
  const [userPassword, setUserPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [submit, setSubmit] = useState<boolean>(false)

  const handleLoginWithGoogle = () => loginGoogle()
  const handleLoginWithEmail = () => {
    setSubmit(true)
    login({ email: userEmail, password: userPassword, setErrorMessage: setErrorMessage })
    console.log(localStorage.getItem('accessToken'))
  }

  const handleEmailChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setUserEmail(value)
  }, 500)

  const handlePasswordChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setUserPassword(value)
  }, 500)

  if (localStorage.getItem('accessToken')) {
    return <Navigate to='/' />
  }

  return (
    <Box height='100%'>
      <Center sx={{ height: 70 }}>
        <OneLogo />
      </Center>
      <Image src={background} alt='bg' width='100%' height='calc(100vh - 70px)' sx={{ position: 'relative' }} />

      <Container size={414} sx={{ position: 'absolute', top: 209, left: 0, right: 0, margin: 'auto' }}>
        <Paper withBorder shadow='md' px={20} py={40} mt={30} radius='md'>
          <Title size={12} align='center' mb={10} color='dark' lh={1} fw={300}>
            Đăng nhập
          </Title>
          <Title align='center' fw={700} size={24} lh={1} mb={20}>
            XIN CHÀO ADMIN
          </Title>
          <TextInput
            label=''
            placeholder='Tên đăng nhập'
            required
            onChange={handleEmailChange}
            name='email'
            variant='filled'
            radius={10}
            sx={(theme) => ({
              input: {
                backgroundColor: theme.colors.dark[0],
                '&:focus-within': {
                  borderColor: theme.colors.gray
                }
              }
            })}
          />
          <PasswordInput
            label=''
            placeholder='Mật khẩu'
            required
            mt='md'
            onChange={handlePasswordChange}
            name='password'
            error={errorMessage}
            variant='filled'
            radius={10}
            color='dark.1'
            rightSection={<>akldfakl</>}
            sx={(theme) => ({
              input: {
                backgroundColor: theme.colors.dark[0]
              },
              '.mantine-PasswordInput-input': {
                '&:focus-within': {
                  borderColor: theme.colors.gray
                }
              }
            })}
            visibilityToggleIcon={({ reveal }) => (reveal ? <VisibilityIcon /> : <UnVisibilityIcon />)}
          />

          <Stack spacing={10}>
            <Button fullWidth mt='xl' onClick={handleLoginWithEmail} color='dark.1'>
              Đăng nhập
            </Button>
            {/* <Button fullWidth leftIcon={<GoogleIcon />} variant='outline' onClick={handleLoginWithGoogle}>
              Countinue with Google
            </Button> */}
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}

export default LoginPage
