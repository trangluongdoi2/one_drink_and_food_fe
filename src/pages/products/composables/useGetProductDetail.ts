import { useParams } from 'react-router-dom'
import { useProductDetailsQuery } from '../query/product'
import { useEffect, useState } from 'react'

export const useGetProductDetail = () => {
  const { id } = useParams()
  const { data, isFetching, refetch } = useProductDetailsQuery(id)
  const [productDetails, setProductDetails] = useState<any>()

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    if (data) {
      setProductDetails(data)
    }
  }, [data])

  return { productDetails, isFetching }
}
