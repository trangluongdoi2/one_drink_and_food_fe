import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { FirebaseService } from '@/firebase/handler'
import { useEffect, useState } from 'react'

export const useFetchAll = <T>(endpoint: FIREBASE_COLLECTION) => {
  const { getAll } = FirebaseService
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()

  const fetchData = async () => {
    setLoading(true)
    try {
      const data = await getAll(endpoint)
      setData(data)
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
