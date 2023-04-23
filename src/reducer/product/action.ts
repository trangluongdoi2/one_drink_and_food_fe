import {
  ProductType,
  SetAuxiliaryName,
  SetIntroductionContent,
  SetMotionPhotos,
  SetName,
  SetPhotos,
  SetPrices,
  SetTypicalFunction
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
