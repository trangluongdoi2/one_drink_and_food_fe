import { clone } from '@/utils/utility'
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
  },
  saleOptions: [
    {
      title: 'Thành phần chính',
      field: 'mainIngredient',
      isOption: false,
      multiOptions: false,
      value: []
    },
    {
      // title: t('choose_size'),
      title: 'Chọn size',
      field: 'size',
      isOption: true,
      multiOptions: true,
      canSelectMultiOptions: true,
      value: []
    },
    {
      // title: t('ice_content'),
      title: 'Lượng đá',
      field: 'iceContent',
      isOption: true,
      multiOptions: true,
      canSelectMultiOptions: true,
      value: []
    },
    {
      // title: t('sugar_content'),
      title: 'Lượng đường',
      field: 'sugarContent',
      isOption: true,
      multiOptions: true,
      canSelectMultiOptions: true,
      value: []
    }
  ],
  infos: [
    {
      title: 'Tên chủ đề',
      infoPhotos: [],
      content: '',
      enable: true
    }
  ]
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
    case ProductType.SET_SALE_OPTIONS: {
      const index = payload.index
      const { value, isOption, canSelectMultiOptions, title, field, multiOptions } = payload.data
      const saleOptions = clone(state.saleOptions)
      const saleOptionsData = { value, isOption, canSelectMultiOptions, title, field, multiOptions }
      saleOptions[index] = saleOptionsData
      return {
        ...state,
        saleOptions
      }
    }
    case ProductType.UPDATE_SALE_OPTION: {
      const { index, data } = payload
      const saleOptions = clone(state.saleOptions)
      saleOptions[index].value = data
      return {
        ...state,
        saleOptions
      }
    }
    case ProductType.SET_SELECT_MULTI_OPTIONS: {
      const { index, data } = payload
      const saleOptions = clone(state.saleOptions)
      saleOptions[index].canSelectMultiOptions = data
      return {
        ...state,
        saleOptions
      }
    }
    case ProductType.SET_PRODUCT_INFOS: {
      const { index, data } = payload
      return {
        ...state,
        infos: state.infos.splice(index, 1, data)
      }
    }
    case ProductType.ADD_PRODUCT_INFO: {
      const infos = clone(state.infos)
      infos.push(payload)
      return {
        ...state,
        infos
      }
    }
    case ProductType.REMOVE_PRODUCT_INFO: {
      const infos = clone(state.infos)
      infos.splice(payload, 1)
      return {
        ...state,
        infos
      }
    }
    case ProductType.SET_CONTENT_PRODUCT_INFO: {
      const { index, data, field } = payload
      const infos = clone(state.infos)
      infos[index][field] = data
      return {
        ...state,
        infos
      }
    }
    case ProductType.SET_PHOTOS_PRODUCT_INFO: {
      const { index, data } = payload
      const infos = clone(state.infos)
      infos[index].infoPhotos = [...data]
      return {
        ...state,
        infos
      }
    }
    case ProductType.SET_ENABLED_PRODUCT_INFO: {
      const { index, data } = payload
      const infos = clone(state.infos)
      infos[index].enable = data
      return {
        ...state,
        infos
      }
    }
    default:
      return {
        ...state
      }
  }
}
