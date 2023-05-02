import { ProductSaleOptionsContent, SaleOptionValue } from '@/pages/products/type'
export interface ProductState {
  name: string
  auxiliaryName?: string
  prices: number
  introduction?: string
  photos?: { filePaths: string[]; canMove: boolean; motionDelays: number | null }
  typicalFunction?: string[]
  saleOptions: Array<ProductSaleOptionsContent>
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
  SET_SELECT_MULTI_OPTIONS = 'SET_SELECT_MULTI_OPTIONS'
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
