import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { FirebaseService } from '@/firebase/handler'
import { TOrderType } from '@/types/order'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { QueryType } from '@/types/fireStore'

export const useGetOrder = ({ key, params }: QueryType) => {
  const { getAll, getAllWithQuery } = FirebaseService
  const [orderData, setOrderData] = useState<TOrderType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()
  const { pathname } = useLocation()

  const useGetOrderData = async () => {
    setLoading(true)
    setError('')
    try {
      const data =
        params !== 'all'
          ? await getAllWithQuery(FIREBASE_COLLECTION.ORDERS, key, params)
          : await getAll(FIREBASE_COLLECTION.ORDERS)
      setOrderData(data)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    useGetOrderData()
  }, [key, pathname])

  return { loading, data: orderData, error }
}
