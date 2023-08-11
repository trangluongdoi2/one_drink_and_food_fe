import { axios } from '@/configs/axios'

type TUserParams = {
  username: string
  password: string
}

export const loginWithEmailAndPassword = (data: TUserParams): Promise<TUserParams> => {
  return axios.post('/auth/login', data)
}
