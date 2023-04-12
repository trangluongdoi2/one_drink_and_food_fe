import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { FirebaseService } from '@/firebase/handler'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { QueryType } from '@/types/fireStore'
import { ProductProps } from '@/types/product'

export const useFetchProduct = ({ key, params = 'all' }: QueryType) => {
  const { getAll, getAllWithQuery } = FirebaseService
  const [productData, setProductData] = useState<ProductProps[]>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()
  const { pathname } = useLocation()

  const fetchProductData = async () => {
    setLoading(true)
    setError('')
    try {
      const data =
        params !== 'all'
          ? await getAllWithQuery(FIREBASE_COLLECTION.PRODUCTS, key, params)
          : await getAll(FIREBASE_COLLECTION.PRODUCTS)
      setProductData(data)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProductData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, pathname])

  return { loading, productData, error }
}
