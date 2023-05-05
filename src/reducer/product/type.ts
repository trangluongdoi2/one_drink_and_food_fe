import { ProductInfos, ProductSaleOptionsContent, SaleOptionValue } from '@/pages/products/type'
export interface ProductState {
  name: string
  auxiliaryName?: string
  prices: number
  introduction?: string
  photos?: { filePaths: string[]; canMove: boolean; motionDelays: number | null }
  typicalFunction?: string[]
  saleOptions: Array<ProductSaleOptionsContent>
  infos: Array<ProductInfos>
}

export enum ProductType {
  SET_NAME = 'SET_NAME',
  SET_AUXILIARY_NAME = 'SET_AUXILIARY_NAME',
  SET_PRICES = 'SET_PRICES',
  SET_INTRODUCTION = 'SET_INTRODUCTION',
  SET_TYPICAL_FUNCTION = 'SET_TYPICAL_FUNCTION',
  SET_PHOTOS = 'SET_PHOTOS',
  SET_MOTION_PHOTOS = 'SET_MOTION_PHOTOS',
  SET_SALE_OPTIONS = 'SET_SALE_OPTIONS',
  ADD_SALE_OPTION = 'ADD_SALE_OPTION',
  UPDATE_SALE_OPTION = 'UPDATE_SALE_OPTION',
  SET_SELECT_MULTI_OPTIONS = 'SET_SELECT_MULTI_OPTIONS',
  SET_PRODUCT_INFOS = 'SET_PRODUCT_INFOS',
  ADD_PRODUCT_INFO = 'ADD_PRODUCT_INFO',
  REMOVE_PRODUCT_INFO = 'REMOVE_PRODUCT_INFO',
  SET_CONTENT_PRODUCT_INFO = 'SET_CONTENT_PRODUCT_INFO',
  SET_PHOTOS_PRODUCT_INFO = 'SET_PHOTOS_PRODUCT_INFO',
  SET_ENABLED_PRODUCT_INFO = 'SET_ENABLED_PRODUCT_INFO'
}

export interface SetName {
  type: ProductType.SET_NAME
  payload: string
}

export interface SetAuxiliaryName {
  type: ProductType.SET_AUXILIARY_NAME
  payload: string
}

export interface SetPrices {
  type: ProductType.SET_PRICES
  payload: number
}

export interface SetIntroductionContent {
  type: ProductType.SET_INTRODUCTION
  payload: string
}

export interface SetTypicalFunction {
  type: ProductType.SET_TYPICAL_FUNCTION
  payload: string[]
}

export interface SetPhotos {
  type: ProductType.SET_PHOTOS
  payload: string[]
}

export interface SetMotionPhotos {
  type: ProductType.SET_MOTION_PHOTOS
  payload: { canMove: boolean; motionDelays: number }
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

export interface SetEnabledProductInfo {
  type: ProductType.SET_ENABLED_PRODUCT_INFO
  payload: {
    data: boolean
    index: number
  }
}

export type ProductTypeAction =
  | SetName
  | SetAuxiliaryName
  | SetPrices
  | SetIntroductionContent
  | SetTypicalFunction
  | SetPhotos
  | SetMotionPhotos
  | SetSaleOptions
  | AddSaleOption
  | UpdateSaleOption
  | SetSelectMultiOption
  | SetProductInfos
  | AddProductInfo
  | RemoveProductInfo
  | SetContentProductInfo
  | SetPhotosProductInfo
  | SetEnabledProductInfo
