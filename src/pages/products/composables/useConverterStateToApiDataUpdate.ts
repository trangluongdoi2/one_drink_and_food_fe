import { cloneDeep } from 'lodash'
import { ProductType, TProductCreateNewInformation, TProductInformationContent, TProductUpdate } from '../type'
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

export const upInformationsImages = async (data: any) => {
  return data
}

export const useConverterListInformationProductionData = (data: TProductCreateNewInformation[]) => {
  data.forEach((el: TProductCreateNewInformation) => {
    el.informationItems?.forEach((info: TProductInformationContent) => {
      // Before delete should save to up information-images
      delete info.filePaths
      delete info.fileStores
    })
  })
  return data
}

export default function useConveterStateToApiDataUpdate(
  input: ProductState | any,
  options?: { productType: ProductType; productSubType: string }
): TProductUpdate | any {
  const cloneInput = cloneDeep(input) as TProductUpdate
  const converterListInformation = useConverterListInformationProductionData(cloneInput.listInformation)

  removeAttributes.forEach((attr: string) => {
    // @ts-ignore
    delete cloneInput[attr]
  })
  return {
    ...cloneInput,
    listInformation: converterListInformation
  }
}
