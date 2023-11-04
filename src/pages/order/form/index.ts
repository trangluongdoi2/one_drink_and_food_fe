import { ORDER_STATUS } from '@/types/order'
import { createFormContext } from '@mantine/form'

export const defaultOrder = {
  _id: '',
  address: '',
  phone: '',
  status: ORDER_STATUS.PREPARING,
  fireBaseId: '',
  recipientName: '',
  avatar: '',
  receivedDate: ''
}

type TOrderForm = {
  selectedDataRow: Record<string, any>
  dataForm: Array<Record<string, any>>
}

export const [OrderFormProvider, useOrderFormContext, useOrderForm] = createFormContext<TOrderForm>()
