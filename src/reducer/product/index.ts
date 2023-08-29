import { clone } from '@/utils/utility'
import { ProductState, ProductType, ProductTypeAction } from './type'
import useTranslationMiddleware from '@/i18n/useTranslationMiddleware'
import { TProductAttributeOption, TProductCreateNewAtribute } from '@/pages/products/type'
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
  infos: [
    {
      title: trans('topic_name'),
      infoPhotos: [],
      infoPhotosStore: [],
      content: '',
      enable: true
    }
  ],
  attributes: [
    {
      value: 'CHỌN SIZE',
      order: 0,
      manyChoices: false,
      atLeastOne: true,
      appear: true,
      options: [
        {
          text: 'Size M',
          price: 0
        },
        {
          text: 'Size L',
          price: 5000
        }
      ]
    },
    {
      value: 'LIỀU LƯỢNG NGỌT',
      order: 0,
      manyChoices: true,
      atLeastOne: false,
      appear: true,
      options: [
        {
          text: '100% Đường (Ngọt Ngây)',
          price: 1000
        },
        {
          text: '50% Đường (Ngọt Vừa)',
          price: 2000
        },
        {
          text: '0% Đường (Nguyên Chất)',
          price: 0
        }
      ]
    },
    {
      value: 'LIỀU LƯỢNG ĐÁ',
      order: 0,
      manyChoices: false,
      atLeastOne: false,
      appear: true,
      options: [
        {
          text: '100% Đá (Bình Thường)',
          price: 0
        },
        {
          text: '50% Đá (Ít Đá)',
          price: 0
        },
        {
          text: '0% Đá (Đá Riêng)',
          price: 0
        }
      ]
    },
    {
      value: 'KẾT HỢP THÊM',
      order: 0,
      manyChoices: true,
      atLeastOne: false,
      appear: true,
      options: [
        {
          text: 'Ổi x Mật Ong x Cà Rốt',
          price: 1000
        },
        {
          text: 'Ổi x Mật Ong x Lê',
          price: 2000
        },
        {
          text: 'Ổi x Mật Ong x Dứa',
          price: 2000
        },
        {
          text: 'Ổi x Mật Ong x Dưa Hấu',
          price: 3000
        },
        {
          text: 'Ổi x Mật Ong x Cần Tây',
          price: 1000
        }
      ]
    }
  ]
}

export const productReducer = (state: ProductState, { type, payload }: ProductTypeAction) => {
  const infos = clone(state.infos)
  let attributes = clone(state.attributes)
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
    case ProductType.SET_PRODUCT_MAIN_INGREDIENTS:
      return {
        ...state,
        productMainIngredients: payload.data
      }
    case ProductType.SET_PRODUCT_ATTRIBUTES: {
      const index = attributes.findIndex((attr: any) => attr.value === payload.attrVal)
      if (index !== -1) {
        attributes[index].options = [...payload.options]
      }
      return {
        ...state,
        attributes: [...attributes]
      }
    }
    case ProductType.SET_PRODUCT_ATTRIBUTE_NAME:
      attributes[payload.index].value = payload.data
      return {
        ...state,
        attributes: [...attributes]
      }
    case ProductType.SET_MANY_CHOICES: {
      const { index, data } = payload
      attributes[index].manyChoices = data
      attributes[index].atLeastOne = !data
      return {
        ...state,
        attributes: [...attributes]
      }
    }
    case ProductType.SET_APPREAR_ATTRIBUTE_OPTION: {
      const { index, data } = payload
      attributes[index].appear = data
      return {
        ...state,
        attributes: [...attributes]
      }
    }
    case ProductType.REMOVE_ATTRIBUTE_OPTION: {
      attributes = attributes.filter((attr: TProductCreateNewAtribute) => attr.value !== payload)
      return {
        ...state,
        attributes: [...attributes]
      }
    }
    case ProductType.ADD_ATTRIBUTE_OPTION: {
      attributes.push(payload)
      return {
        ...state,
        attributes: [...attributes]
      }
    }

    // case ProductType.

    // Todo
    case ProductType.SET_PRODUCT_INFOS: {
      const { index, data } = payload
      return {
        ...state,
        infos: state.infos.splice(index, 1, data)
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
    default:
      return {
        ...state
      }
  }
}
