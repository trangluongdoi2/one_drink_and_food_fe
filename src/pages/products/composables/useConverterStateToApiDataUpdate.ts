import { cloneDeep } from 'lodash'
import { ProductType, TProductUpdate } from '../type'
import { ProductState } from '@/reducer/product/type'

const removeAttributes = [
  'infos',
  'dispatch',
  'photos',
  'tempPhotoThumbs',
  'productThumbs',
  'productType',
  // 'productRatingsAverage',
  // 'isVAT',
  'introduction',
  'dirty'
]

export default function useConveterStateToApiDataUpdate(
  input: ProductState | any,
  options?: { productType: ProductType; productSubType: string }
): TProductUpdate | any {
  const cloneInput = cloneDeep(input)
  console.log(cloneInput, 'cloneInput...')
  removeAttributes.forEach((attr: string) => {
    delete cloneInput[attr]
  })
  return cloneInput

}
