import { useMutation, useQuery } from 'react-query'
import { ExtractFnReturnType, MutationConfig, QueryConfig, queryClient } from '@/configs/react-query'
import ProductsApi from '../api/product'
import { TProductCreateNew, TProductUpdate } from '../type'
import CategoryApi from '../api/category'
import { AdminApi } from '@/api/admin'

const productApi = new ProductsApi()

type QueryFnType =
  | typeof productApi.getAllProducts
  | typeof productApi.getAllProductPublish
  | typeof productApi.create
  | typeof productApi.getProductByCategoryId
  | typeof productApi.getProductDetails
  | typeof productApi.update

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

export const useAllProductByProductTypeAndSubType = ({ config }: TProductQueryConfig = {}, input: any) => {
  const categoryApi = new CategoryApi();
  return useQuery<ExtractFnReturnType<any>>({
    queryFn: () => {
      const data = categoryApi.findByProductType(input.type)
      return data
    },
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
    ...config,
    mutationFn: (input: TProductCreateNew) => productApi.create(input)
  })
}

export const useProductUpdateMutation = ({ config }: TProductMutationConfig = {}) => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category-update'] })
    },
    ...config,
    mutationFn: (input: TProductUpdate) => productApi.update(input)
  })
}

export const useUploadProductThumbsMutation = ({ config }: TProductMutationConfig = {}) => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category-create-thumb'] })
    },
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

export const usePublishProductByIdMutation = ({ config }: TProductMutationConfig = {}) => {
  const adminApi = new AdminApi()
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product-publish-by-id'] })
    },
    ...config,
    mutationFn: (productId: string) => adminApi.publishProductById(productId)
  })
}

export const useUnPublishProductByIdMutation = ({ config }: TProductMutationConfig = {}) => {
  const adminApi = new AdminApi()
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product-unpublish-by-id'] })
    },
    ...config,
    mutationFn: (productId: string) => adminApi.unPublishProductById(productId)
  })
}