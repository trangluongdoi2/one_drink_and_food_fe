import { ExtractFnReturnType, QueryConfig } from '@/configs/react-query'
import axios from 'axios'
import { useQuery } from 'react-query'

export const getAllCategories = () => {
  return axios.get('http://localhost:3051/categories')
}

type QueryFnType = typeof getAllCategories

type TUseGetAllCategories = {
  config?: QueryConfig<QueryFnType>
}

export const useGetAllCategories = ({ config }: TUseGetAllCategories) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['categories'],
    queryFn: getAllCategories,
    ...config
  })
}
