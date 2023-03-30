import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'

interface UserAccountProps {
  email: string
  password: string
}

interface LoginProps extends UserAccountProps {
  setErrorMessage: (message: string) => void
}

export const loginGoogle = async () => {
  const auth = getAuth()
  try {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

export const register = async ({ email, password }: UserAccountProps, setErrorMessage: (message: string) => void) => {
  const auth = getAuth()
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    setErrorMessage('')
  } catch (err: any) {
    console.log('message', { err })
    setErrorMessage(err.message)
  }
}

export const logout = async (user: any) => {
  await user.auth.signOut()
}

export const login = async ({ email, password, setErrorMessage }: LoginProps) => {
  const auth = getAuth()
  try {
    await signInWithEmailAndPassword(auth, email, password)
    location.reload()
  } catch (err: any) {
    console.log(err.code)
    setErrorMessage('There was a problem logging in. Check your email and password or create an account.')
  }
}
