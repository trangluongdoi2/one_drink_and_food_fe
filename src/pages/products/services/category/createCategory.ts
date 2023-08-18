import { customAxios } from '@/configs/axios'
import { MutationConfig, queryClient } from '@/configs/react-query'
import { ProductGroup } from '@/types/product'
import { useMutation } from 'react-query'

export type CreateCommentDTO = {
  data: {
    body: string
    discussionId: string
  }
}

type TCreateCategory = {
  name: string
  order: number
  productType: ProductGroup
}

export const createCategory = (categoryData: TCreateCategory) => {
  return customAxios.post('/category', categoryData)
}

type TUseCreateCategory = {
  config?: MutationConfig<typeof createCategory>
}

export const useCreateComment = ({ config }: TUseCreateCategory) => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category'] })
    },
    ...config,
    mutationFn: createCategory
  })
}
