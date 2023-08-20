import { TProductCreateNew, ProductInfos, ProductSaleOptionsContent, SaleOptionValue } from '@/pages/products/type'
export interface ProductState extends TProductCreateNew {
  photos?: { filePaths: string[]; enabled: boolean; motionTime: number | null }
  photosStore?: File[]
  typicalFunction?: string[]
  saleOptions: Array<ProductSaleOptionsContent>
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
  SET_SALE_OPTIONS = 'SET_SALE_OPTIONS',
  ADD_SALE_OPTION = 'ADD_SALE_OPTION',
  REMOVE_SALE_OPTION = 'REMOVE_SALE_OPTION',
  UPDATE_SALE_OPTION = 'UPDATE_SALE_OPTION',
  SET_SELECT_MULTI_OPTIONS = 'SET_SELECT_MULTI_OPTIONS',
  SET_PRODUCT_INFOS = 'SET_PRODUCT_INFOS',
  ADD_PRODUCT_INFO = 'ADD_PRODUCT_INFO',
  REMOVE_PRODUCT_INFO = 'REMOVE_PRODUCT_INFO',
  SET_CONTENT_PRODUCT_INFO = 'SET_CONTENT_PRODUCT_INFO',
  SET_PHOTOS_PRODUCT_INFO = 'SET_PHOTOS_PRODUCT_INFO',
  SET_PHOTOS_STORE_PRODUCT_INFO = 'SET_PHOTOS_STORE_PRODUCT_INFO',
  SET_ENABLED_PRODUCT_INFO = 'SET_ENABLED_PRODUCT_INFO',
  SET_TITLE_PRODUCT_INFO = 'SET_TITLE_PRODUCT_INFO',
}

export interface SetName {
  type: ProductType.SET_PRODUCT_NAME
  payload: string
}

export interface SetAuxiliaryName {
  type: ProductType.SET_AUXILIARY_NAME
  payload: string
}

export interface SetPrices {
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

export interface SetTypicalFunction {
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

export interface SetSaleOptions {
  type: ProductType.SET_SALE_OPTIONS
  payload: {
    data: ProductSaleOptionsContent
    index: number
  }
}

export interface AddSaleOption {
  type: ProductType.ADD_SALE_OPTION
  payload: ProductSaleOptionsContent
}

export interface RemoveSaleOption {
  type: ProductType.REMOVE_SALE_OPTION
  payload: number
}

export interface UpdateSaleOption {
  type: ProductType.UPDATE_SALE_OPTION
  payload: {
    data: SaleOptionValue[]
    index: number
  }
}

export interface SetSelectMultiOption {
  type: ProductType.SET_SELECT_MULTI_OPTIONS
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
  payload: {
    data: boolean
    index: number
  }
}

export interface SetTitleProductInfo {
  type: ProductType.SET_TITLE_PRODUCT_INFO
  payload: {
    data: string
    index: number
  }
}
export interface SetProductQuantity {
  type: ProductType.SET_PRODUCT_QUANTITY
  payload: number
}

export type ProductTypeAction =
  | SetName
  | SetAuxiliaryName
  | SetPrices
  | SetEnableIncludeVATPrices
  | SetIntroductionContent
  | SetTypicalFunction
  | SetPhotos
  | SetPhotosStore
  | SetMotionPhotos
  | SetSaleOptions
  | AddSaleOption
  | RemoveSaleOption
  | UpdateSaleOption
  | SetSelectMultiOption
  | SetProductInfos
  | AddProductInfo
  | RemoveProductInfo
  | SetContentProductInfo
  | SetPhotosProductInfo
  | SetPhotosStoreProductInfo
  | SetEnabledProductInfo
  | SetTitleProductInfo
  | SetProductQuantity
