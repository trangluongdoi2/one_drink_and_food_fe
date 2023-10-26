import { useQuery } from 'react-query'
import UserApi from './api'
import { TUser } from '@/types/user'

const userAdminApi = new UserApi()

const useGetAllUser = () => {
  return useQuery({
    queryKey: 'user',
    queryFn: () => userAdminApi.findAll(),
    onSuccess: (data: TUser[]) => console.log(data)
  })
}

export { useGetAllUser }
