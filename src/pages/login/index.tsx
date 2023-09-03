import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { TextInput, PasswordInput, Paper, Title, Container, Button, Stack, Image, Box, Center } from '@mantine/core'
import { debounce } from 'lodash'
import background from '@/assets/image/logo-background.png'
import { OneLogo, UnvisibilityIcon, VisibilityIcon } from '@/assets/icon'
import AuthApi from '@/features/auth'
import { login } from '@/firebase/authenticate'
// import AuthApi from '@/features/auth'

const LoginPage = () => {
  const [userName, setUserName] = useState<string>('')
  const [userPassword, setUserPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [validButton, setValidButton] = useState<boolean>(true)

  const navigate = useNavigate()
  const authApi = new AuthApi()

  const handleLoginWithEmail = async () => {
    // const loginInfo = {
    //   username: userName,
    //   password: userPassword
    // }
    // const data = await authApi.loginAdmin(loginInfo)
    // if (data?.adminInfo) {
    //   navigate('/')
    // } else if (data?.message) {
    //   setErrorMessage(data.message)
    // }

    // for firebase
    login({ email: userName, password: userPassword, setErrorMessage: setErrorMessage })
  }

  const handleEmailChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setUserName(value)
  }, 100)

  const handlePasswordChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setUserPassword(value)
  }, 100)

  if (localStorage.getItem('accessToken')) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    if (!userName && !userPassword) {
      setValidButton(false)
      return
    }
    setValidButton(true)
  }, [userName, userPassword])

  return (
    <Box sx={{ height: '100%' }}>
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
            name='username'
            variant='filled'
            radius={10}
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
            visibilityToggleIcon={({ reveal }) => (reveal ? <VisibilityIcon /> : <UnvisibilityIcon />)}
          />

          <Stack spacing={10}>
            <Button fullWidth mt='xl' color='dark' onClick={handleLoginWithEmail} disabled={!validButton}>
              Đăng nhập
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}

export default LoginPage
