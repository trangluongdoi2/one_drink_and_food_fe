import { ORDER_STATUS, TOrderType } from '@/types/order'
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
  selectedOrder: TOrderType
  orderData: TOrderType[]
}

export const [OrderFormProvider, useOrderFormContext, useOrderForm] = createFormContext<TOrderForm>()

// export const [CreateOrderFormProvider, useCreateOrderFormContext, useCreateOrderForm] = createFormContext<TOrderType>()
