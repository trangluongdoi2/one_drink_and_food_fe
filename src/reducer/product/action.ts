import { ProductInfos } from '@/pages/products/type'
import {
  AddProductInfo,
  ProductType,
  RemoveProductInfo,
  SetAuxiliaryName,
  SetContentProductInfo,
  SetEnableIncludeVATPrices,
  SetEnabledProductInfo,
  SetIntroductionContent,
  SetMotionPhotos,
  SetProductName,
  SetPhotos,
  SetPhotosProductInfo,
  SetPhotosStore,
  SetPhotosStoreProductInfo,
  SetProductPrice,
  SetProductInfos,
  SetSelectMultiOption,
  SetTitleProductInfo,
  SetTypicalFunction,
  SetProductQuantity,
  SetProductAttributeName,
  SetProductMainIngredients,
  SetProductAttributeOption
} from './type'

export const setProductName = (value: string): SetProductName => ({
  type: ProductType.SET_PRODUCT_NAME,
  payload: value
})

export const setAuxiliaryName = (value: string): SetAuxiliaryName => ({
  type: ProductType.SET_AUXILIARY_NAME,
  payload: value
})

export const setProductPrice = (value: number): SetProductPrice => ({
  type: ProductType.SET_PRODUCT_PRICE,
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

export const setMainFunctions = (value: string[]): SetTypicalFunction => ({
  type: ProductType.SET_MAIN_FUNCTIONS,
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

export const setMotionPhotos = (value: { enabled: boolean; motionTime: number }): SetMotionPhotos => ({
  type: ProductType.SET_MOTION_PHOTOS,
  payload: value
})

export const setManyChoices = (value: { data: boolean; index: number }): SetSelectMultiOption => ({
  type: ProductType.SET_MANY_CHOICES,
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

export const setProductQuantity = (value: number): SetProductQuantity => ({
  type: ProductType.SET_PRODUCT_QUANTITY,
  payload: value
})

export const updateProductAttributeOption = (value: any): any => ({
  type: ProductType.SET_PRODUCT_ATTRIBUTES,
  payload: value
})

export const updateProductMainIngredients = (value: any): SetProductMainIngredients => ({
  type: ProductType.SET_PRODUCT_MAIN_INGREDIENTS,
  payload: value
})

export const updateProductAttributeOptionName = (value: { data: string; index: number }): SetProductAttributeName => ({
  type: ProductType.SET_PRODUCT_ATTRIBUTE_NAME,
  payload: value
})
