import { OrderProps } from '@/types/order'
import { ProductProps } from '@/types/product'
import { UserProps } from '@/types/user'
import { createFormContext } from '@mantine/form'

export const [UserFormProvider, useUserFormContext, useUserForm] = createFormContext<
  UserProps | OrderProps | ProductProps
>()
