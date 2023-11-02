import { cloneDeep } from 'lodash'
import { ProductType, TProductCreateNew } from '../type'
import { ProductState } from '@/reducer/product/type'
import CategoryApi from '../api/category'

const categoryApi = new CategoryApi()
const removeAttributes = [
  'infos',
  'dispatch',
  'photos',
  'tempPhotoThumbs',
  'productThumbs',
  'productType',
  'productRatingsAverage',
  'isVAT',
  'introduction',
  'dirty'
]

export default async function useConveterStateToApiData(
  input: ProductState | any,
  options?: { productType: ProductType; productSubType: string }
): Promise<TProductCreateNew | any> {
  const cloneInput = cloneDeep(input)
  removeAttributes.forEach((attr: string) => {
    delete cloneInput[attr]
  })
  let categoryData = await categoryApi.findByProductType(options?.productType as any)
  if (!categoryData?.length) {
    categoryData = await categoryApi.create({
      name: options?.productSubType as string,
      productType: options?.productType as ProductType,
      order: 0
    })
  }
  const categoryId = categoryData.filter((item: any) => item.name === options?.productSubType)[0]._id
  return {
    ...(cloneInput as any),
    category: categoryId
  }
}
