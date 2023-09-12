import { useMutation, useQuery } from 'react-query'
import { ExtractFnReturnType, MutationConfig, QueryConfig, queryClient } from '@/configs/react-query'
import ProductsApi from '../api/product'
import { TProductCreateNew } from '../type'

const productApi = new ProductsApi()

type QueryFnType =
  | typeof productApi.getAllProducts
  | typeof productApi.getAllProductPublish
  | typeof productApi.create
  | typeof productApi.getProductByCategoryId
  | typeof productApi.getProductDetails

type MutationFnType = QueryFnType

type TProductQueryConfig = {
  config?: QueryConfig<QueryFnType>
}

type TProductMutationConfig = {
  config?: MutationConfig<MutationFnType>
}

export const useAllProductQuery = ({ config }: TProductQueryConfig = {}) => {
  return useQuery<ExtractFnReturnType<any>>({
    queryKey: ['products'],
    queryFn: () => productApi.getAllProducts(),
    enabled: false,
    ...config
  })
}

export const useAllProductPublishQuery = ({ config }: TProductQueryConfig = {}) => {
  return useQuery<ExtractFnReturnType<any>>({
    queryKey: ['products-publish'],
    queryFn: () => productApi.getAllProductPublish(),
    ...config
  })
}

export const useProductDetailsQuery = (input: any, { config }: TProductQueryConfig = {}) => {
  return useQuery<ExtractFnReturnType<any>>({
    queryKey: ['product-details'],
    queryFn: () => productApi.getProductDetails(input),
    ...config
  })
}

export const useProductCreateMutation = ({ config }: TProductMutationConfig = {}) => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category-create'] })
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries({ queryKey: ['category-create'] })
    // },
    ...config,
    mutationFn: (input: TProductCreateNew) => productApi.create(input)
  })
}

export const useUploadProductThumbsMutation = ({ config }: TProductMutationConfig = {}) => {
  return useMutation({
    ...config,
    mutationFn: (input: any) => productApi.uploadProductThumbs(input)
  })
}

export const useRemoveProductThumbsMutation = ({ config }: TProductMutationConfig = {}) => {
  return useMutation({
    ...config,
    // @ts-ignore
    mutationFn: (input: any) => productApi.removeProductThumbs(input)
  })
}