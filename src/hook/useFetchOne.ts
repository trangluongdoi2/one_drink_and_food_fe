import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { FirebaseService } from '@/firebase/handler'
import { useEffect, useState } from 'react'

export const useFetchOne = <T>(endpoint: FIREBASE_COLLECTION, id: string) => {
  const { getOne } = FirebaseService
  const [data, setData] = useState<T | any>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await getOne(endpoint, id)
      setData(res)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData().catch(console.error)
  }, [])

  return { loading, data, error }
}
