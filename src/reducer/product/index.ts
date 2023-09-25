import { clone } from '@/utils/utility'
import { TProductCreateNewAtribute, TProductThumbs } from '@/pages/products/type'
import { ProductState, ProductType, ProductTypeAction } from './type'

const pureProductAttributes: TProductCreateNewAtribute[] = [
  {
    value: 'CHỌN SIZE',
    order: 0,
    manyChoices: false,
    atLeastOne: true,
    appear: true,
    options: [
      {
        text: '',
        price: 0
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
        text: '',
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
        text: '',
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
        text: '',
        price: 0
      }
    ]
  }
]

const pureProductThumbs: TProductThumbs[] = [
  {
    name: 'thumb1',
    url: null,
    key: null
  },
  {
    name: 'thumb2',
    url: null,
    key: null
  },
  {
    name: 'thumb3',
    url: null,
    key: null
  },
  {
    name: 'thumb4',
    url: null,
    key: null
  },
  {
    name: 'thumb5',
    url: null,
    key: null
  },
  {
    name: 'thumb6',
    url: null,
    key: null
  },
  {
    name: 'thumb7',
    url: null,
    key: null
  },
  {
    name: 'thumb8',
    url: null,
    key: null
  }
]

export const initinalState: ProductState = {
  productName: '',
  productMainIngredients: 'Ổi',
  productThumbs: pureProductThumbs,
  auxiliaryName: '',
  mainFunctions: ['s', 's', 's'],
  productDescription: 'dsadsadsadsadasd',
  productPrice: 1000,
  productQuantity: 1,
  isVAT: true,
  motionTime: 1000,
  productType: 'juice',
  productRatingsAverage: 0,
  note: '',
  listInformation: [
    {
      title: 'Tiêu đề 1',
      order: 0,
      appear: true,
      informationItems: [
        {
          text: 'Thông tin 1'
        },
        {
          text: 'Thông tin 2'
        }
      ]
    }
  ],
  attributes: pureProductAttributes,
  // for state
  introduction: '',
  photos: {
    filePaths: [],
    enabled: true,
    motionTime: 1000
  },
  tempPhotoThumbs: []
}

export const productReducer = (state: ProductState, { type, payload }: ProductTypeAction) => {
  let attributes = clone(state.attributes)
  const listInformation = clone(state.listInformation)
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
        productPrice: Number(payload)
      }
    case ProductType.SET_PRODUCT_QUANTITY: {
      return {
        ...state,
        productQuantity: Number(payload)
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
    case ProductType.SET_PHOTO_URLS:
      return {
        ...state,
        photos: {
          ...state.photos,
          filePaths: payload
        }
      }
    case ProductType.SET_PHOTO_THUMBS:
      return {
        ...state,
        tempPhotoThumbs: payload
      }
    // case ProductType.SET_MOTION_PHOTOS:
    //   return {
    //     ...state,
    //     photos: {
    //       ...state.photos,
    //       enabled: payload.enabled,
    //       motionTime: payload.motionTime
    //     }
    //   }
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
    case ProductType.REORDER_PRODUCT_ATTRIBUTES_LIST: {
      console.log(JSON.parse(JSON.stringify(attributes)), 'attrs before')
      ;[attributes[payload.from], attributes[payload.to]] = [attributes[payload.to], attributes[payload.from]]
      console.log(JSON.parse(JSON.stringify(attributes)), 'attrs after')
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
    case ProductType.ADD_PRODUCT_INFO_ITEM: {
      return {
        ...state,
        listInformation: [...listInformation, payload]
      }
    }
    case ProductType.SET_APPREAR_PRODUCT_INFO_ITEM: {
      listInformation[payload.index].appear = payload.data
      return {
        ...state,
        listInformation: [...listInformation]
      }
    }
    case ProductType.SET_TITLE_PRODUCT_INFO_ITEM: {
      listInformation[payload.index].title = payload.data
      return {
        ...state,
        listInformation: [...listInformation]
      }
    }
    case ProductType.REMOVE_PRODUCT_INFO_ITEM: {
      if (listInformation.length > 1) {
        listInformation.splice(payload, 1)
        return {
          ...state,
          listInformation: [...listInformation]
        }
      }
      return { ...state }
    }
    case ProductType.UPDATE_INFORMATION_ITEMS_IN_PRODUCT_INFO: {
      listInformation[payload.index].informationItems = payload.data
      return {
        ...state,
        listInformation: [...listInformation]
      }
    }

    // Todo
    // case ProductType.SET_PHOTOS_PRODUCT_INFO: {
    //   const { index, data } = payload
    //   infos[index].infoPhotos = [...data]
    //   return {
    //     ...state,
    //     infos
    //   }
    // }
    // case ProductType.SET_PHOTOS_STORE_PRODUCT_INFO: {
    //   const { index, data } = payload
    //   infos[index].infoPhotosStore = [...data]
    //   return {
    //     ...state,
    //     infos
    //   }
    // }
    default:
      return {
        ...state
      }
  }
}
