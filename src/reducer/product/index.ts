import { ProductState, ProductType, ProductTypeAction } from './type'

export const initinalState: ProductState = {
  name: '',
  auxiliaryName: '',
  prices: 0,
  introduction: '',
  typicalFunction: [],
  photos: {
    filePaths: [],
    canMove: true,
    motionDelays: 1000
  }
}

export const productReducer = (state: ProductState, { type, payload }: ProductTypeAction) => {
  switch (type) {
    case ProductType.SET_NAME:
      return {
        ...state,
        name: payload
      }
    case ProductType.SET_AUXILIARY_NAME:
      return {
        ...state,
        auxiliaryName: payload
      }
    case ProductType.SET_INTRODUCTION:
      return {
        ...state,
        introduction: payload
      }
    case ProductType.SET_TYPICAL_FUNCTION:
      return {
        ...state,
        typicalFunction: payload
      }
    case ProductType.SET_PRICES:
      return {
        ...state,
        prices: payload
      }
    case ProductType.SET_PHOTOS:
      return {
        ...state,
        photos: {
          ...state.photos,
          filePaths: payload
        }
      }
    case ProductType.SET_MOTION_PHOTOS:
      return {
        ...state,
        photos: {
          ...state.photos,
          canMove: payload.canMove,
          motionDelays: payload.motionDelays
        }
      }
    default:
      return {
        ...state
      }
  }
}
