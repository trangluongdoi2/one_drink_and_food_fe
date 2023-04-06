import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { getAll } from '@/firebase/handler'
import { OrderProps } from '@/types/order'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useFetchOrder = (query: string) => {
  const [orderData, setOrderData] = useState<OrderProps[]>()
  const [loading, setLoading] = useState<boolean>(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true)
      const data =
        query !== 'all'
          ? await getAll(FIREBASE_COLLECTION.ORDERS, query, 'status')
          : await getAll(FIREBASE_COLLECTION.ORDERS)
      setOrderData(data)
      setLoading(false)
    }
    fetchUserData().catch(console.error)
  }, [query, pathname])

  return { loading, orderData }
}
