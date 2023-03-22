import { TextInput, PasswordInput, Paper, Title, Text, Container, Button, Stack } from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '@/firebase/authenticate'
import { useState } from 'react'
import { debounce } from 'lodash'
import ErrorModal from '@/components/errorModal'
import { LOGIN_PATH } from '@/constants/routes'
import { getAuth } from 'firebase/auth'

const RegisterPage = () => {
  const navigate = useNavigate()
  const auth = getAuth()
  const [userEmail, setUserEmail] = useState<string>('')
  const [userPassword, setUserPassword] = useState<string>('')
  const [userConfirmPassword, setUserConfirmPassword] = useState<string>('')

  const [errorMessage, setErrorMessage] = useState<string>('')
  const [opened, setOpened] = useState<boolean>(false)
  const isEmailError = errorMessage.includes('email') ? errorMessage : ''

  const handleRegister = () => {
    if (userPassword.localeCompare(userConfirmPassword)) {
      setErrorMessage('Confirm password is not valid')
    } else {
      register({ email: userEmail, password: userPassword }, setErrorMessage)

      // eslint-disable-next-line no-extra-boolean-cast
      if (auth.currentUser) {
        console.log('register successfully')
        setErrorMessage('Registered successfully')
        setOpened(true)
        navigate(LOGIN_PATH)
      }
    }
  }

  const handleEmailChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setUserEmail(value)
  }, 500)

  const handlePasswordChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setUserPassword(value)
  }, 500)

  const handleConfirmPasswordChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setUserConfirmPassword(value)
  }, 500)

  console.log('error', errorMessage)
  console.log('user', userPassword)
  console.log('user', userConfirmPassword)

  return (
    <Container size={420} my={40}>
      <ErrorModal opened={opened} message={errorMessage} setOpened={setOpened} />
      <Title
        align='center'
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900
        })}
      >
        Register Account
      </Title>
      <Text color='dimmed' size='sm' align='center' mt={5}>
        Do not have an account yet? <Link to={LOGIN_PATH}>Already have an count</Link>
      </Text>

      <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
        <TextInput
          label='Email'
          placeholder='you@mantine.dev'
          required
          onChange={handleEmailChange}
          name='email'
          error={isEmailError}
        />
        <PasswordInput
          label='Password'
          placeholder='Your password'
          required
          mt='md'
          onChange={handlePasswordChange}
          name='password'
        />
        <PasswordInput
          label='Confirm Password'
          placeholder='Your password'
          required
          mt='md'
          onChange={handleConfirmPasswordChange}
          name='password'
          error={errorMessage}
        />
        <Stack spacing={10}>
          <Button fullWidth mt='xl' onClick={handleRegister}>
            Create Account
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default RegisterPage
