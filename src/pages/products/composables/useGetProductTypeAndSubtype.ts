import { useEffect, useState } from 'react';
import CategoryApi from '../api/category';
import { ProductType } from '../type'

const useGetProductTypeAndSubtype = (producType: ProductType) => {
  const categoryApi = new CategoryApi()
  const [productSubTypeList, setProductSubtypeList] = useState<string[]>([])

  const getProductSubtypeFromType = async () => {
    const data = await categoryApi.findByProductType(producType)
    if (data?.length) {
      const subTypeList = data.map((item: any) => item.name)
      const subTypeListSet = new Set(subTypeList)
      setProductSubtypeList(Array.from(subTypeListSet) as string[])
    }
  }

  const productSubTypeMap = {
    juice: ['juiceGlass', 'juiceBottle'],
    coffee: ['coffeeGlass', 'coffeeBottle'],
    tea: ['tea1', 'tea2'],
    smoothie: ['smoothie1', 'smoothie2'],
    yogurt: ['yogurt1', 'yogurt2']
  }

  useEffect(() => {
    getProductSubtypeFromType().catch(console.error)
  }, [producType])

  return { productSubTypeMap, productSubTypeList }
}

export default useGetProductTypeAndSubtype
