import { UserProps } from '@/types/user'
import { createFormContext } from '@mantine/form'

export const [UserFormProvider, useUserFormContext, useUserForm] = createFormContext<UserProps>()
