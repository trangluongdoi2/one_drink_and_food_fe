import { clone } from '@/utils/utility'
import { ProductState, ProductType, ProductTypeAction } from './type'
import useTranslationMiddleware from '@/i18n/useTranslationMiddleware'
const { trans } = useTranslationMiddleware()

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
      title: trans('main_ingredient'),
      field: 'mainIngredient',
      isOption: false,
      multiOptions: false,
      value: [],
      enable: true
    },
    {
      title: trans('choose_size'),
      field: 'size',
      isOption: true,
      multiOptions: true,
      canSelectMultiOptions: true,
      value: [],
      enable: true
    },
    {
      title: trans('ice_content'),
      field: 'iceContent',
      isOption: true,
      multiOptions: true,
      canSelectMultiOptions: true,
      value: [],
      enable: true
    },
    {
      title: trans('sugar_content'),
      field: 'sugarContent',
      isOption: true,
      multiOptions: true,
      canSelectMultiOptions: true,
      value: [],
      enable: true
    }
  ],
  infos: [
    {
      title: trans('topic_name'),
      infoPhotos: [],
      content: '',
      enable: true
    }
  ]
}

export const productReducer = (state: ProductState, { type, payload }: ProductTypeAction) => {
  const saleOptions = clone(state.saleOptions)
  const infos = clone(state.infos)
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
      const { value, isOption, canSelectMultiOptions, title, field, multiOptions, enable } = payload.data
      // const saleOptions = clone(state.saleOptions)
      const saleOptionsData = { value, isOption, canSelectMultiOptions, title, field, multiOptions, enable }
      saleOptions[index] = saleOptionsData
      return {
        ...state,
        saleOptions
      }
    }
    case ProductType.UPDATE_SALE_OPTION: {
      const { index, data } = payload
      // const saleOptions = clone(state.saleOptions)
      saleOptions[index].value = data
      return {
        ...state,
        saleOptions
      }
    }
    case ProductType.ADD_SALE_OPTION: {
      // const saleOptions = clone(state.saleOptions)
      saleOptions.push(payload)
      return {
        ...state,
        saleOptions
      }
    }
    case ProductType.SET_SELECT_MULTI_OPTIONS: {
      const { index, data } = payload
      // const saleOptions = clone(state.saleOptions)
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
      // const infos = clone(state.infos)
      infos.push(payload)
      return {
        ...state,
        infos
      }
    }
    case ProductType.REMOVE_PRODUCT_INFO: {
      // const infos = clone(state.infos)
      infos.splice(payload, 1)
      return {
        ...state,
        infos
      }
    }
    case ProductType.SET_CONTENT_PRODUCT_INFO: {
      const { index, data, field } = payload
      // const infos = clone(state.infos)
      infos[index][field] = data
      return {
        ...state,
        infos
      }
    }
    case ProductType.SET_PHOTOS_PRODUCT_INFO: {
      const { index, data } = payload
      // const infos = clone(state.infos)
      infos[index].infoPhotos = [...data]
      return {
        ...state,
        infos
      }
    }
    case ProductType.SET_ENABLED_PRODUCT_INFO: {
      const { index, data } = payload
      // const saleOptions = clone(state.saleOptions)
      saleOptions[index].enable = data
      return {
        ...state,
        saleOptions
      }
    }
    case ProductType.SET_TITLE_PRODUCT_INFO: {
      const { index, data } = payload
      // const saleOptions = clone(state.saleOptions)
      saleOptions[index].title = data
      return {
        ...state,
        saleOptions
      }
    }
    case ProductType.REMOVE_SALE_OPTION: {
      saleOptions.splice(payload, 1)
      return {
        ...state,
        saleOptions
      }
    }
    default:
      return {
        ...state
      }
  }
}
