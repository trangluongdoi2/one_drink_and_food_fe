import Api from '@/api'
import { USER_ADMIN_URL } from '@/configs/urlConfig'
import { TUser } from '@/types/user'

export default class UserApi extends Api {
  async findAll(): Promise<TUser[]> {
    const res = await this.get(USER_ADMIN_URL)
    return res.data ?? []
  }
}
