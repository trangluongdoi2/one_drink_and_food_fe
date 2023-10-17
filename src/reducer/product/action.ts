import {
  TProductCreateNewAtribute,
  TProductCreateNewInformation,
  TProductInformationContent
} from '@/pages/products/type'
import {
  ProductType,
  SetProductDirty,
  SetProductName,
  SetAuxiliaryName,
  SetContentProductInfo,
  SetEnableIncludeVATPrices,
  SetIntroductionContent,
  SetMotionPhotos,
  SetPhotoUrls,
  SetPhotosProductInfo,
  SetPhotoThumbs,
  SetPhotosStoreProductInfo,
  SetProductPrice,
  SetAppearAttributeOption,
  SetSelectManyChoices,
  SetMainFunctions,
  SetProductQuantity,
  SetProductAttributeName,
  SetProductMainIngredients,
  AddAttributeOption,
  RemoveAttributeOption,
  SetAppearProductInfoItem,
  SetTitleProductInfoItem,
  AddProductInfoItem,
  RemoveProductInfoItem,
  UpdateInfoItemsInProductInfo,
  ReorderProductAttributesList
} from './type'

export const setProductDirty = (value: boolean): SetProductDirty => ({
  type: ProductType.SET_PRODUCT_DIRTY,
  payload: value
})

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

export const setMainFunctions = (value: string[]): SetMainFunctions => ({
  type: ProductType.SET_MAIN_FUNCTIONS,
  payload: value
})

export const setPhotoUrls = (value: string[]): SetPhotoUrls => ({
  type: ProductType.SET_PHOTO_URLS,
  payload: value
})

export const setPhotoThumbs = (value: File[]): SetPhotoThumbs => ({
  type: ProductType.SET_PHOTO_THUMBS,
  payload: value
})

export const setMotionPhotos = (value: { enabled: boolean; motionTime: number }): SetMotionPhotos => ({
  type: ProductType.SET_MOTION_PHOTOS,
  payload: value
})

export const setAppearAttributeOption = (value: { data: boolean; index: number }): SetAppearAttributeOption => ({
  type: ProductType.SET_APPREAR_ATTRIBUTE_OPTION,
  payload: value
})

export const setManyChoices = (value: { data: boolean; index: number }): SetSelectManyChoices => ({
  type: ProductType.SET_MANY_CHOICES,
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

export const addAttributeOption = (value: TProductCreateNewAtribute): AddAttributeOption => ({
  type: ProductType.ADD_ATTRIBUTE_OPTION,
  payload: value
})

export const removeAttributeOption = (value: string): RemoveAttributeOption => ({
  type: ProductType.REMOVE_ATTRIBUTE_OPTION,
  payload: value
})

export const reorderProductAttributesList = (value: { from: number; to: number }): ReorderProductAttributesList => ({
  type: ProductType.REORDER_PRODUCT_ATTRIBUTES_LIST,
  payload: value
})

export const addProductInfoItem = (value: TProductCreateNewInformation): AddProductInfoItem => ({
  type: ProductType.ADD_PRODUCT_INFO_ITEM,
  payload: value
})

export const removeProductInfoItem = (value: number): RemoveProductInfoItem => ({
  type: ProductType.REMOVE_PRODUCT_INFO_ITEM,
  payload: value
})

export const setTitleProductInfoItem = (value: { data: string; index: number }): SetTitleProductInfoItem => ({
  type: ProductType.SET_TITLE_PRODUCT_INFO_ITEM,
  payload: value
})

export const setAppearProductInfoItem = (value: { data: boolean; index: number }): SetAppearProductInfoItem => ({
  type: ProductType.SET_APPREAR_PRODUCT_INFO_ITEM,
  payload: value
})

export const updateInfoItemsInProductInfo = (value: {
  data: TProductInformationContent[]
  index: number
}): UpdateInfoItemsInProductInfo => ({
  type: ProductType.UPDATE_INFORMATION_ITEMS_IN_PRODUCT_INFO,
  payload: value
})
