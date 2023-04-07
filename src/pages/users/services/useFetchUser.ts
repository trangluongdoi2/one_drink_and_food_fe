import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { FirebaseService } from '@/firebase/handler'
import { QueryType } from '@/types/fireStore'
import { UserProps } from '@/types/user'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useFetchUser = ({ key, params }: QueryType) => {
  const { getAll, getAllWithQuery } = FirebaseService
  const [userData, setUserData] = useState<UserProps[]>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()
  const { pathname } = useLocation()

  const fetchUserData = async () => {
    setLoading(true)
    try {
      const data =
        params !== 'all'
          ? await getAllWithQuery(FIREBASE_COLLECTION.USERS, key, params)
          : await getAll(FIREBASE_COLLECTION.USERS)
      setUserData(data)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchUserData().catch(console.error)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, pathname])

  return { loading, userData, error }
}
