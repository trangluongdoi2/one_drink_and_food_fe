import { customAxios } from '@/configs/axios'

// interface IApi {
//   get<T>(url: string, input?: Record<string, any>): Promise<T>
//   post<T>(url: string, input?: Record<string, any>): Promise<T>
//   put<T>(url: string, input?: Record<string, any>): Promise<T>
//   patch<T>(url: string, input?: Record<string, any>): Promise<T>
//   delete<T>(url: string, input?: Record<string, any>): Promise<T>
// }

export default class Api {
  protected async get(url: string, input?: Record<string, any>) {
    const res = await customAxios.get(url)
    return res.data
  }

  protected async post(url: string, input?: Record<string, any>, headersType?: string) {
    if (headersType) {
      const res = await customAxios.post(url, input, { headers: { 'Content-Type': 'multipart/form-res' } })
      return res.data
    }
    const res = await customAxios.post(url, input)
    return res.data
  }

  protected async patch(url: string, input?: Record<string, any>) {
    const res = await customAxios.patch(url, input)
    return res.data
  }

  protected async delete(url: string, input?: Record<string, any>) {
    const res = await customAxios.delete(url)
    return res.data
  }
}
