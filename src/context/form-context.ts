import { OrderProps } from '@/types/order'
import { ProductDetailProps, ProductProps } from '@/types/product'
import { UserProps } from '@/types/user'
import { createFormContext } from '@mantine/form'

export const [UserFormProvider, useUserFormContext, useUserForm] = createFormContext<
  UserProps | OrderProps | ProductProps | Partial<ProductDetailProps>
>()
