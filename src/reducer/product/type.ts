import { TProductCreateNew, ProductInfos, SaleOptionValue, TProductCreateNewAtribute } from '@/pages/products/type'
export interface ProductState extends TProductCreateNew {
  photos?: { filePaths: string[]; enabled: boolean; motionTime: number | null }
  photosStore?: File[]
  infos: Array<ProductInfos>
  introduction?: ''
}

export enum ProductType {
  SET_PRODUCT_NAME = 'SET_PRODUCT_NAME',
  SET_AUXILIARY_NAME = 'SET_AUXILIARY_NAME',
  SET_PRODUCT_PRICE = 'SET_PRODUCT_PRICE',
  SET_PRODUCT_QUANTITY = 'SET_PRODUCT_QUANTITY',
  SET_ENABLE_INCLUDE_VAT_PRICES = 'SET_ENABLE_INCLUDE_VAT_PRICES',
  SET_INTRODUCTION = 'SET_INTRODUCTION',
  SET_MAIN_FUNCTIONS = 'SET_MAIN_FUNCTIONS',
  SET_PHOTOS = 'SET_PHOTOS',
  SET_PHOTOS_STORE = 'SET_PHOTOS_STORE',
  SET_MOTION_PHOTOS = 'SET_MOTION_PHOTOS',
  ADD_ATTRIBUTE_OPTION = 'ADD_ATTRIBUTE_OPTION',
  REMOVE_ATTRIBUTE_OPTION = 'REMOVE_ATTRIBUTE_OPTION',
  SET_PRODUCT_INFOS = 'SET_PRODUCT_INFOS',
  ADD_PRODUCT_INFO = 'ADD_PRODUCT_INFO',
  REMOVE_PRODUCT_INFO = 'REMOVE_PRODUCT_INFO',
  SET_CONTENT_PRODUCT_INFO = 'SET_CONTENT_PRODUCT_INFO',
  SET_PHOTOS_PRODUCT_INFO = 'SET_PHOTOS_PRODUCT_INFO',
  SET_PHOTOS_STORE_PRODUCT_INFO = 'SET_PHOTOS_STORE_PRODUCT_INFO',
  SET_ENABLED_PRODUCT_INFO = 'SET_ENABLED_PRODUCT_INFO',
  SET_TITLE_PRODUCT_INFO = 'SET_TITLE_PRODUCT_INFO',
  SET_PRODUCT_ATTRIBUTES = 'SET_PRODUCT_ATTRIBUTES',
  SET_PRODUCT_ATTRIBUTE_OPTION = 'SET_PRODUCT_ATTRIBUTE_OPTION',
  SET_PRODUCT_MAIN_INGREDIENTS = 'SET_PRODUCT_MAIN_INGREDIENTS',
  SET_PRODUCT_ATTRIBUTE_NAME = 'SET_PRODUCT_ATTRIBUTE_NAME',
  SET_MANY_CHOICES = 'SET_MANY_CHOICES',
  SET_APPREAR_ATTRIBUTE_OPTION = 'SET_APPREAR_ATTRIBUTE_OPTION'
}

export interface SetProductName {
  type: ProductType.SET_PRODUCT_NAME
  payload: string
}

export interface SetAuxiliaryName {
  type: ProductType.SET_AUXILIARY_NAME
  payload: string
}

export interface SetProductPrice {
  type: ProductType.SET_PRODUCT_PRICE
  payload: number
}

export interface SetEnableIncludeVATPrices {
  type: ProductType.SET_ENABLE_INCLUDE_VAT_PRICES
  payload: boolean
}

export interface SetIntroductionContent {
  type: ProductType.SET_INTRODUCTION
  payload: string
}

export interface SetMainFunctions {
  type: ProductType.SET_MAIN_FUNCTIONS
  payload: string[]
}

export interface SetPhotos {
  type: ProductType.SET_PHOTOS
  payload: string[]
}

export interface SetPhotosStore {
  type: ProductType.SET_PHOTOS_STORE
  payload: File[]
}

export interface SetMotionPhotos {
  type: ProductType.SET_MOTION_PHOTOS
  payload: { enabled: boolean; motionTime: number }
}

export interface AddAttributeOption {
  type: ProductType.ADD_ATTRIBUTE_OPTION
  payload: TProductCreateNewAtribute
}

export interface RemoveAttributeOption {
  type: ProductType.REMOVE_ATTRIBUTE_OPTION
  payload: string
}

export interface SetSelectManyChoices {
  type: ProductType.SET_MANY_CHOICES
  payload: {
    data: boolean
    index: number
  }
}

export interface SetAppearAttributeOption {
  type: ProductType.SET_APPREAR_ATTRIBUTE_OPTION
  payload: {
    data: boolean
    index: number
  }
}

export interface SetProductInfos {
  type: ProductType.SET_PRODUCT_INFOS
  payload: {
    data: ProductInfos
    index: number
  }
}

export interface AddProductInfo {
  type: ProductType.ADD_PRODUCT_INFO
  payload: ProductInfos
}

export interface RemoveProductInfo {
  type: ProductType.REMOVE_PRODUCT_INFO
  payload: number
}

export interface SetContentProductInfo {
  type: ProductType.SET_CONTENT_PRODUCT_INFO
  payload: {
    data: string
    field: string
    index: number
  }
}

export interface SetPhotosProductInfo {
  type: ProductType.SET_PHOTOS_PRODUCT_INFO
  payload: {
    data: string[]
    index: number
  }
}

export interface SetPhotosStoreProductInfo {
  type: ProductType.SET_PHOTOS_STORE_PRODUCT_INFO
  payload: {
    data: File[]
    index: number
  }
}

export interface SetEnabledProductInfo {
  type: ProductType.SET_ENABLED_PRODUCT_INFO
  payload: { data: boolean; index: number }
}

export interface SetTitleProductInfo {
  type: ProductType.SET_TITLE_PRODUCT_INFO
  payload: { data: string; index: number }
}
export interface SetProductQuantity {
  type: ProductType.SET_PRODUCT_QUANTITY
  payload: number
}

export interface SetProductMainIngredients {
  type: ProductType.SET_PRODUCT_MAIN_INGREDIENTS
  payload: any
}
export interface SetProductAttribues {
  type: ProductType.SET_PRODUCT_ATTRIBUTES
  payload: Record<string, any>
}

export interface SetProductAttributeOption {
  type: ProductType.SET_PRODUCT_ATTRIBUTE_OPTION
  payload: any
}

export interface SetProductContent {
  type: ProductType.SET_PRODUCT_MAIN_INGREDIENTS
  payload: Record<string, any>
}

export interface SetProductAttributeName {
  type: ProductType.SET_PRODUCT_ATTRIBUTE_NAME
  payload: { data: string; index: number }
}

export type ProductTypeAction =
  | SetProductName
  | SetAuxiliaryName
  | SetProductPrice
  | SetEnableIncludeVATPrices
  | SetIntroductionContent
  | SetMainFunctions
  | SetPhotos
  | SetPhotosStore
  | SetMotionPhotos
  | SetSelectManyChoices
  | SetProductInfos
  | AddProductInfo
  | RemoveProductInfo
  | SetContentProductInfo
  | SetPhotosProductInfo
  | SetPhotosStoreProductInfo
  | SetEnabledProductInfo
  | SetTitleProductInfo
  | SetProductQuantity
  | SetProductAttribues
  | SetProductContent
  | SetProductAttributeName
  | SetProductMainIngredients
  | AddAttributeOption
  | RemoveAttributeOption
  | SetAppearAttributeOption
