import { defaultUser } from '@/constants/user'
import { TUser } from '@/types/user'
import { createFormContext } from '@mantine/form'

export type TUserForm = {
  selectedDataRow: TUser
  dataForm: unknown[]
}

export const initialCustomerFormValues = {
  selectedDataRow: defaultUser,
  dataForm: []
}

export const [CustomerFormProvider, useCustomerFormContext, useCustomerForm] = createFormContext<TUserForm>()
