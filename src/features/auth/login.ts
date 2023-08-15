import { customAxios } from '@/configs/axios'

type TUserParams = {
  username: string
  password: string
}

export const loginWithEmailAndPassword = (data: TUserParams): Promise<Record<string, any>> => {
  return new Promise((resolve, reject) => {
    customAxios.post('http://localhost:3051/auth/admins/login', data).then((res) => {
      if (res.data) {
        return resolve(res.data)
      }
      return reject(null)
    })
  })
}
