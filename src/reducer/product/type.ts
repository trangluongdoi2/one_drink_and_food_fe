import {
  TProductCreateNew,
  TProductCreateNewAtribute,
  TProductInformationContent,
  TProductCreateNewInformation
} from '@/pages/products/type'
export interface ProductState extends TProductCreateNew {
  photos?: { filePaths: string[]; enabled: boolean; motionTime: number | null }
  tempPhotoThumbs?: File[]
  introduction?: ''
  dirty?: boolean
}

export enum ProductType {
  SET_PRODUCT_DIRTY = 'SET_PRODUCT_DIRTY',
  SET_PRODUCT_NAME = 'SET_PRODUCT_NAME',
  SET_AUXILIARY_NAME = 'SET_AUXILIARY_NAME',
  SET_PRODUCT_PRICE = 'SET_PRODUCT_PRICE',
  SET_PRODUCT_QUANTITY = 'SET_PRODUCT_QUANTITY',
  SET_ENABLE_INCLUDE_VAT_PRICES = 'SET_ENABLE_INCLUDE_VAT_PRICES',
  SET_INTRODUCTION = 'SET_INTRODUCTION',
  SET_MAIN_FUNCTIONS = 'SET_MAIN_FUNCTIONS',
  SET_PHOTO_URLS = 'SET_PHOTO_URLS',
  SET_PHOTO_THUMBS = 'SET_PHOTO_THUMBS',
  SET_MOTION_PHOTOS = 'SET_MOTION_PHOTOS',
  ADD_ATTRIBUTE_OPTION = 'ADD_ATTRIBUTE_OPTION',
  REMOVE_ATTRIBUTE_OPTION = 'REMOVE_ATTRIBUTE_OPTION',
  ADD_PRODUCT_INFO_ITEM = 'ADD_PRODUCT_INFO_ITEM',
  REMOVE_PRODUCT_INFO_ITEM = 'REMOVE_PRODUCT_INFO_ITEM',
  SET_CONTENT_PRODUCT_INFO = 'SET_CONTENT_PRODUCT_INFO',
  SET_PHOTOS_PRODUCT_INFO = 'SET_PHOTOS_PRODUCT_INFO',
  SET_PHOTOS_STORE_PRODUCT_INFO = 'SET_PHOTOS_STORE_PRODUCT_INFO',
  SET_ENABLED_PRODUCT_INFO = 'SET_ENABLED_PRODUCT_INFO',
  SET_PRODUCT_ATTRIBUTES = 'SET_PRODUCT_ATTRIBUTES',
  REORDER_PRODUCT_ATTRIBUTES_LIST = 'REORDER_PRODUCT_ATTRIBUTES_LIST',
  SET_PRODUCT_ATTRIBUTE_OPTION = 'SET_PRODUCT_ATTRIBUTE_OPTION',
  SET_PRODUCT_MAIN_INGREDIENTS = 'SET_PRODUCT_MAIN_INGREDIENTS',
  SET_PRODUCT_ATTRIBUTE_NAME = 'SET_PRODUCT_ATTRIBUTE_NAME',
  SET_MANY_CHOICES = 'SET_MANY_CHOICES',
  SET_APPREAR_ATTRIBUTE_OPTION = 'SET_APPREAR_ATTRIBUTE_OPTION',
  SET_APPREAR_PRODUCT_INFO_ITEM = 'SET_APPREAR_PRODUCT_INFO_ITEM',
  SET_TITLE_PRODUCT_INFO_ITEM = 'SET_TITLE_PRODUCT_INFO_ITEM',
  UPDATE_INFORMATION_ITEMS_IN_PRODUCT_INFO = 'UPDATE_INFORMATION_ITEMS_IN_PRODUCT_INFO'
}

export interface SetProductDirty {
  type: ProductType.SET_PRODUCT_DIRTY
  payload: boolean
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

export interface SetPhotoUrls {
  type: ProductType.SET_PHOTO_URLS
  payload: string[]
}

export interface SetPhotoThumbs {
  type: ProductType.SET_PHOTO_THUMBS
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

export interface ReorderProductAttributesList {
  type: ProductType.REORDER_PRODUCT_ATTRIBUTES_LIST
  payload: { from: number; to: number }
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

export interface SetAppearProductInfoItem {
  type: ProductType.SET_APPREAR_PRODUCT_INFO_ITEM
  payload: { data: boolean; index: number }
}

export interface SetTitleProductInfoItem {
  type: ProductType.SET_TITLE_PRODUCT_INFO_ITEM
  payload: { data: string; index: number }
}

export interface AddProductInfoItem {
  type: ProductType.ADD_PRODUCT_INFO_ITEM
  payload: TProductCreateNewInformation
}

export interface RemoveProductInfoItem {
  type: ProductType.REMOVE_PRODUCT_INFO_ITEM
  payload: number
}

export interface UpdateInfoItemsInProductInfo {
  type: ProductType.UPDATE_INFORMATION_ITEMS_IN_PRODUCT_INFO
  payload: { data: TProductInformationContent[]; index: number }
}

export type ProductTypeAction =
  | SetProductDirty
  | SetProductName
  | SetAuxiliaryName
  | SetProductPrice
  | SetEnableIncludeVATPrices
  | SetIntroductionContent
  | SetMainFunctions
  | SetPhotoUrls
  | SetPhotoThumbs
  | SetMotionPhotos
  | SetSelectManyChoices
  | SetContentProductInfo
  | SetPhotosProductInfo
  | SetPhotosStoreProductInfo
  | SetProductQuantity
  | SetProductAttribues
  | ReorderProductAttributesList
  | SetProductContent
  | SetProductAttributeName
  | SetProductMainIngredients
  | AddAttributeOption
  | RemoveAttributeOption
  | SetAppearAttributeOption
  | AddProductInfoItem
  | SetAppearProductInfoItem
  | SetTitleProductInfoItem
  | UpdateInfoItemsInProductInfo
  | RemoveProductInfoItem
