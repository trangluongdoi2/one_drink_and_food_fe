import { customAxios } from '@/configs/axios'

// interface IApi {
//   get<T>(url: string, input?: Record<string, any>): Promise<T>
//   post<T>(url: string, input?: Record<string, any>): Promise<T>
//   put<T>(url: string, input?: Record<string, any>): Promise<T>
//   patch<T>(url: string, input?: Record<string, any>): Promise<T>
//   delete<T>(url: string, input?: Record<string, any>): Promise<T>
// }

export default class Api {
  protected async get(url: string, input?: object) {
    const data = await customAxios.get(url)
    return data
  }

  protected async post(url: string, input?: object) {
    const data = await customAxios.post(url, input)
    return data
  }

  protected async patch(url: string, input?: object) {
    const data = await customAxios.patch(url, input)
    return data
  }

  protected async delete(url: string, input?: object) {
    const data = await customAxios.delete(url)
    return data
  }
}
