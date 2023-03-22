import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Stack
} from '@mantine/core'
import { Link, Navigate } from 'react-router-dom'
import GoogleIcon from '@/assets/googleIcon'
import { login, loginGoogle } from '@/firebase/authenticate'
import { useState } from 'react'
import { debounce } from 'lodash'
import { REGISTER_PATH } from '@/constants/routes'

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
    <Container size={420} my={40}>
      <Title
        align='center'
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900
        })}
      >
        Welcome to Note App
      </Title>
      <Text color='dimmed' size='sm' align='center' mt={5}>
        Do not have an account yet?{' '}
        <Link to={REGISTER_PATH} replace={true}>
          Create account
        </Link>
      </Text>

      <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
        <TextInput
          label='Email'
          placeholder='example.account@gmail.com'
          required
          onChange={handleEmailChange}
          name='email'
        />
        <PasswordInput
          label='Password'
          placeholder='Your password'
          required
          mt='md'
          onChange={handlePasswordChange}
          name='password'
          error={errorMessage}
        />
        <Group position='apart' mt='lg'>
          <Checkbox label='Remember me' sx={{ lineHeight: 1 }} />
          <Anchor<'a'> onClick={(event) => event.preventDefault()} href='#' size='sm'>
            Forgot password?
          </Anchor>
        </Group>
        <Stack spacing={10}>
          <Button fullWidth mt='xl' onClick={handleLoginWithEmail}>
            Sign in
          </Button>
          <Button fullWidth leftIcon={<GoogleIcon />} variant='outline' onClick={handleLoginWithGoogle}>
            Countinue with Google
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default LoginPage
