import { useEffect, useState } from 'react'
import { ProductType } from '../type'
import { useCategoryGetByProductType } from '../query/category'

const productTypeArr = ['juice', 'coffee', 'tea', 'smoothie', 'yogurt']

const useGetProductTypeAndSubtype = (productType: ProductType) => {
  const { data: productDataThroughType, isFetching, refetch } = useCategoryGetByProductType(productType, {})
  const [productData, setProductData] = useState<Record<string, any>>({})
  const [subTypeArrays, setSubTypeArrays] = useState<string[]>([])

  const getSubTypeListFromType = () => {
    if (!productDataThroughType?.length) {
      return new Map()
    }
    const subTypeList = productDataThroughType.map((item: any) => item.name)
    const subTypeListSet = new Set(subTypeList)
    const subTypeListArr = Array.from(subTypeListSet) as string[]
    const newMap = new Map()
    subTypeListArr.forEach((subType: string) => newMap.set(subType, []))
    return newMap
  }

  const setSubTypeMap = () => {
    const cloneData = { ...productData }
    const subTypeMap = getSubTypeListFromType()
    cloneData[productType] = subTypeMap
    if (subTypeMap.size) {
      for (const key of subTypeMap.keys()) {
        const dataFilter = productDataThroughType.filter((item: any) => item.name === key)[0]?.products
        cloneData[productType].set(key, dataFilter)
      }
    }
    setProductData(cloneData)
    setSubTypeArrays(Array.from(subTypeMap.keys()))
  }

  useEffect(() => {
    refetch()
  }, [productType])

  useEffect(() => {
    if (!isFetching) {
      setSubTypeMap()
    }
  }, [productType, isFetching])

  useEffect(() => {
    const initObj: Record<string, any> = {}
    productTypeArr.forEach((type: string) => {
      initObj[type] = new Map()
    })
    setProductData(initObj)
  }, [])

  return { subTypeArrays, productData, isFetching }
}

export default useGetProductTypeAndSubtype
