import { useQuery } from 'react-query'
import { ExtractFnReturnType, QueryConfig } from '@/configs/react-query'
import ProductsApi from '../api'
import { TProductCreateNew } from '../type'

const api = new ProductsApi()

type QueryFnType = typeof api.getAllProducts | typeof api.getAllProductPublish | any

type TQueryConfig = {
  config?: QueryConfig<QueryFnType>
}

export const useAllProductQuery = ({ config }: TQueryConfig) => {
  return useQuery<ExtractFnReturnType<any>>({
    queryKey: ['products'],
    queryFn: () => api.getAllProducts(),
    enabled: false,
    ...config
  })
}

export const useAllProductPublishQuery = ({ config }: TQueryConfig) => {
  return useQuery<ExtractFnReturnType<any>>({
    queryKey: ['products-publish'],
    queryFn: () => api.getAllProductPublish(),
    ...config
  })
}

export const useProductDetailsQuery = (input: any, { config }: TQueryConfig) => {
  return useQuery<ExtractFnReturnType<any>>({
    queryKey: ['product-details'],
    queryFn: () => api.getProductDetails(input),
    ...config
  })
}

export const useCreateProductQuery = (input: TProductCreateNew, { config }: TQueryConfig) => {
  return useQuery<ExtractFnReturnType<any>>({
    queryKey: ['product-create'],
    queryFn: () => api.createProduct(input),
    ...config
  })
}
