import { createFormContext } from '@mantine/form'

export const initInputListForm = {
  data: []
}

type TInputListForm = {
  data: any[]
}
export const [InputListFormProvider, useInputListFormContext, useInputListForm] = createFormContext<TInputListForm>()