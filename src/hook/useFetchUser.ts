import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { getAll } from '@/firebase/handler'
import { UserProps } from '@/types/user'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useFetchUser = (query: string) => {
  const [userData, setUserData] = useState<UserProps[]>()
  const [loading, setLoading] = useState<boolean>(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true)
      const data =
        query !== 'all'
          ? await getAll(FIREBASE_COLLECTION.USERS, query, 'member')
          : await getAll(FIREBASE_COLLECTION.USERS)
      setUserData(data)
      setLoading(false)
    }
    fetchUserData().catch(console.error)
  }, [query, pathname])

  return { loading, userData }
}
