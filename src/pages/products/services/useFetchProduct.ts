import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { FirebaseService } from '@/firebase/handler'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ProductProps } from '@/types/product'

interface QueryType {
  key: string
  params?: string[]
  selectedOption?: string[]
}

export const useFetchProduct = ({ key, params = [], selectedOption }: QueryType) => {
  const { getAll, getAllWithQuery, getWithMultipleQuery } = FirebaseService
  const [productData, setProductData] = useState<ProductProps[]>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()
  const { pathname } = useLocation()

  const fetchProductData = async () => {
    setLoading(true)
    setError('')
    try {
      const data =
        params.length > 0
          ? await getWithMultipleQuery(FIREBASE_COLLECTION.PRODUCTS, key, params)
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
  }, [key, pathname, selectedOption])

  return { loading, productData, error }
}
