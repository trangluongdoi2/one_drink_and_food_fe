import { useMutation, useQuery } from 'react-query'
import { MutationConfig, queryClient } from '@/configs/react-query'
import CategoryApi from '../api/category'
import { ProductType, TCategoryCreate } from '../type'

const categoryApi = new CategoryApi()

type CategoryMutaion =
  | typeof categoryApi.create
  | typeof categoryApi.findAll
  | typeof categoryApi.findById
  | typeof categoryApi.findByProductType

type TCategoryConfig = {
  config?: MutationConfig<CategoryMutaion>
}

export const useCategoryCreateMutation = ({ config }: TCategoryConfig = {}) => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category-create'] })
    },
    ...config,
    mutationFn: (input: TCategoryCreate) => categoryApi.create(input)
  })
}

export const useCategoryGetAll = ({ config }: TCategoryConfig = {}) => {
  return useQuery({
    queryKey: 'categories-all',
    queryFn: () => categoryApi.findAll()
  })
}

export const useCategoryGetById = (id: string, { config }: TCategoryConfig = {}) => {
  return useQuery({
    queryKey: 'categories-id',
    queryFn: () => categoryApi.findById(id)
  })
}

export const useCategoryGetByProductType = (type: ProductType, { config }: TCategoryConfig = {}) => {
  return useQuery({
    queryKey: 'categories-productType',
    queryFn: () => categoryApi.findByProductType(type)
  })
}
