import { ProductInfos, ProductSaleOptionsContent, SaleOptionValue } from '@/pages/products/type'
import {
  AddProductInfo,
  AddSaleOption,
  ProductType,
  RemoveProductInfo,
  RemoveSaleOption,
  SetAuxiliaryName,
  SetContentProductInfo,
  SetEnableIncludeVATPrices,
  SetEnabledProductInfo,
  SetIntroductionContent,
  SetMotionPhotos,
  SetName,
  SetPhotos,
  SetPhotosProductInfo,
  SetPhotosStore,
  SetPhotosStoreProductInfo,
  SetPrices,
  SetProductInfos,
  SetSaleOptions,
  SetSelectMultiOption,
  SetTitleProductInfo,
  SetTypicalFunction,
  UpdateSaleOption
} from './type'

export const setName = (value: string): SetName => ({
  type: ProductType.SET_NAME,
  payload: value
})

export const setAuxiliaryName = (value: string): SetAuxiliaryName => ({
  type: ProductType.SET_AUXILIARY_NAME,
  payload: value
})

export const setPrices = (value: number): SetPrices => ({
  type: ProductType.SET_PRICES,
  payload: value
})

export const setEnableIncludeVATPrices = (value: boolean): SetEnableIncludeVATPrices => ({
  type: ProductType.SET_ENABLE_INCLUDE_VAT_PRICES,
  payload: value
})

export const setIntroductionContent = (value: string): SetIntroductionContent => ({
  type: ProductType.SET_INTRODUCTION,
  payload: value
})

export const setTypicalFunction = (value: string[]): SetTypicalFunction => ({
  type: ProductType.SET_TYPICAL_FUNCTION,
  payload: value
})

export const setPhotos = (value: string[]): SetPhotos => ({
  type: ProductType.SET_PHOTOS,
  payload: value
})

export const setPhotosStore = (value: File[]): SetPhotosStore => ({
  type: ProductType.SET_PHOTOS_STORE,
  payload: value
})

export const setMotionPhotos = (value: { canMove: boolean; motionDelays: number }): SetMotionPhotos => ({
  type: ProductType.SET_MOTION_PHOTOS,
  payload: value
})

export const setProductSaleOptions = (value: { data: ProductSaleOptionsContent; index: number }): SetSaleOptions => ({
  type: ProductType.SET_SALE_OPTIONS,
  payload: value
})

export const addProductSaleOption = (value: ProductSaleOptionsContent): AddSaleOption => ({
  type: ProductType.ADD_SALE_OPTION,
  payload: value
})

export const removeProductSaleOption = (value: number): RemoveSaleOption => ({
  type: ProductType.REMOVE_SALE_OPTION,
  payload: value
})

export const updateSaleOption = (value: { data: SaleOptionValue[]; index: number }): UpdateSaleOption => ({
  type: ProductType.UPDATE_SALE_OPTION,
  payload: value
})

export const setSelectMultiOption = (value: { data: boolean; index: number }): SetSelectMultiOption => ({
  type: ProductType.SET_SELECT_MULTI_OPTIONS,
  payload: value
})

export const setProductInfo = (value: { data: ProductInfos; index: number }): SetProductInfos => ({
  type: ProductType.SET_PRODUCT_INFOS,
  payload: value
})

export const addProductInfo = (value: ProductInfos): AddProductInfo => ({
  type: ProductType.ADD_PRODUCT_INFO,
  payload: value
})

export const removeProductInfo = (value: number): RemoveProductInfo => ({
  type: ProductType.REMOVE_PRODUCT_INFO,
  payload: value
})

export const setContentProductInfo = (value: {
  data: string
  field: string
  index: number
}): SetContentProductInfo => ({
  type: ProductType.SET_CONTENT_PRODUCT_INFO,
  payload: value
})

export const setPhotosProductInfo = (value: { data: string[]; index: number }): SetPhotosProductInfo => ({
  type: ProductType.SET_PHOTOS_PRODUCT_INFO,
  payload: value
})

export const setPhotosStoreProductInfo = (value: { data: File[]; index: number }): SetPhotosStoreProductInfo => ({
  type: ProductType.SET_PHOTOS_STORE_PRODUCT_INFO,
  payload: value
})

export const setEnabledProductInfo = (value: { data: boolean; index: number }): SetEnabledProductInfo => ({
  type: ProductType.SET_ENABLED_PRODUCT_INFO,
  payload: value
})

export const setTitleProductInfo = (value: { data: string; index: number }): SetTitleProductInfo => ({
  type: ProductType.SET_TITLE_PRODUCT_INFO,
  payload: value
})
