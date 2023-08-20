import { clone } from '@/utils/utility'
import { ProductState, ProductType, ProductTypeAction } from './type'
import useTranslationMiddleware from '@/i18n/useTranslationMiddleware'
const { trans } = useTranslationMiddleware()

export const initinalState: ProductState = {
  productName: '',
  productMainIngredients: '',
  auxiliaryName: '',
  mainFunctions: ['s', 's', 's'],
  productDescription: 'dsadsadsadsadasd',
  productPrice: 1000,
  productQuantity: 0,
  isVAT: true,
  motionTime: 1000,
  productType: 'juice',
  attributes: [],
  productRatingsAverage: 0,
  note: '',
  listInformation: [],

  // for state
  introduction: '',
  photos: {
    filePaths: [],
    enabled: true,
    motionTime: 1000
  },
  photosStore: [],
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
      infoPhotosStore: [],
      content: '',
      enable: true
    }
  ]
}

export const productReducer = (state: ProductState, { type, payload }: ProductTypeAction) => {
  const saleOptions = clone(state.saleOptions)
  const infos = clone(state.infos)
  switch (type) {
    case ProductType.SET_PRODUCT_NAME:
      return {
        ...state,
        productName: payload
      }
    case ProductType.SET_AUXILIARY_NAME:
      return {
        ...state,
        auxiliaryName: payload
      }
    case ProductType.SET_PRODUCT_PRICE:
      return {
        ...state,
        productPrice: payload
      }
    case ProductType.SET_PRODUCT_QUANTITY: {
      return {
        ...state,
        productQuantity: payload
      }
    }
    case ProductType.SET_INTRODUCTION:
      return {
        ...state,
        introduction: payload
      }
    case ProductType.SET_MAIN_FUNCTIONS:
      return {
        ...state,
        mainFunctions: payload
      }
    case ProductType.SET_ENABLE_INCLUDE_VAT_PRICES:
      return {
        ...state,
        isVAT: payload
      }
    case ProductType.SET_PHOTOS:
      return {
        ...state,
        photos: {
          ...state.photos,
          filePaths: payload
        }
      }
    case ProductType.SET_PHOTOS_STORE:
      return {
        ...state,
        photosStore: payload
      }
    case ProductType.SET_MOTION_PHOTOS:
      return {
        ...state,
        photos: {
          ...state.photos,
          enabled: payload.enabled,
          motionTime: payload.motionTime
        }
      }
    case ProductType.SET_SALE_OPTIONS: {
      const index = payload.index
      const { value, isOption, canSelectMultiOptions, title, field, multiOptions, enable } = payload.data
      const saleOptionsData = { value, isOption, canSelectMultiOptions, title, field, multiOptions, enable }
      saleOptions[index] = saleOptionsData
      return {
        ...state,
        saleOptions
      }
    }
    case ProductType.UPDATE_SALE_OPTION: {
      const { index, data } = payload
      saleOptions[index].value = data
      return {
        ...state,
        saleOptions
      }
    }
    case ProductType.ADD_SALE_OPTION: {
      saleOptions.push(payload)
      return {
        ...state,
        saleOptions
      }
    }
    case ProductType.SET_SELECT_MULTI_OPTIONS: {
      const { index, data } = payload
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
      infos.push(payload)
      return {
        ...state,
        infos
      }
    }
    case ProductType.REMOVE_PRODUCT_INFO: {
      infos.splice(payload, 1)
      return {
        ...state,
        infos
      }
    }
    case ProductType.SET_CONTENT_PRODUCT_INFO: {
      const { index, data, field } = payload
      infos[index][field] = data
      return {
        ...state,
        infos
      }
    }
    case ProductType.SET_PHOTOS_PRODUCT_INFO: {
      const { index, data } = payload
      infos[index].infoPhotos = [...data]
      return {
        ...state,
        infos
      }
    }
    case ProductType.SET_PHOTOS_STORE_PRODUCT_INFO: {
      const { index, data } = payload
      infos[index].infoPhotosStore = [...data]
      return {
        ...state,
        infos
      }
    }
    case ProductType.SET_ENABLED_PRODUCT_INFO: {
      const { index, data } = payload
      saleOptions[index].enable = data
      return {
        ...state,
        saleOptions
      }
    }
    case ProductType.SET_TITLE_PRODUCT_INFO: {
      const { index, data } = payload
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
