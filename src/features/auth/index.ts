import Api from '@/api'
import { ADMIN_LOGIN_URL, ADMIN_LOGOUT_URL } from '@/configs/urlConfig'

type LoginAdmin = {
  username: string
  password: string
}

export type AdminInfo = {
  id: string
  userName: string
  photoURL?: string
}

export default class AuthApi extends Api {
  async loginAdmin(input: LoginAdmin) {
    try {
      const data = await this.post(ADMIN_LOGIN_URL, input)
      const adminInfo = data.data as AdminInfo
      return { adminInfo }
    } catch (error: any) {
      const res = error.response?.data
      return { message: res.msg, status: res.statusCode }
    }
  }

  async logoutAdmin() {
    const data = await this.get(ADMIN_LOGOUT_URL)
    return data
  }
}
