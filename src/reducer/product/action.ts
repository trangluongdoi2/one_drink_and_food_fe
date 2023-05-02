import { ProductSaleOptionsContent, SaleOptionValue } from '@/pages/products/type'
import {
  AddSaleOption,
  ProductType,
  SetAuxiliaryName,
  SetIntroductionContent,
  SetMotionPhotos,
  SetName,
  SetPhotos,
  SetPrices,
  SetSaleOptions,
  SetSelectMultiOption,
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

export const updateSaleOption = (value: { data: SaleOptionValue[]; index: number }): UpdateSaleOption => ({
  type: ProductType.UPDATE_SALE_OPTION,
  payload: value
})

export const setSelectMultiOption = (value: { data: boolean; index: number }): SetSelectMultiOption => ({
  type: ProductType.SET_SELECT_MULTI_OPTIONS,
  payload: value
})
