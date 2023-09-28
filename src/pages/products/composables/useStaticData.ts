import useTranslationMiddleware from '@/i18n/useTranslationMiddleware'
const { trans } = useTranslationMiddleware()

const test = [
  {
    title: 'Title 1',
    field: 'mainIngredient'
  },
  {
    title: 'Title 2',
    field: 'size',
    value: [
      {
        info: 'Info 1',
        price: 1000
      },
      {
        info: 'Info 2',
        price: 2000
      }
    ],
    isOption: true
  },
  {
    title: 'Title 3',
    field: 'iceContent'
  },
  {
    title: 'Title 4',
    field: 'sugarContent'
  }
]
const testName = trans('create_new_product')

const productAddTest = {
  name: 'Sinh tố lúa mạch',
  auxiliaryName: 'Bia SOS',
  prices: 20000,
  introduction: 'Đây là một sản phẩm có cồn blah blah',
  mainFunctions: ['Làm khoẻ mạnh', 'Làm mạnh khoẻ'],
  photos: {
    filePaths: ['', '', '', '', '', '', '', ''],
    enabled: true,
    motionTime: 1000
  },
  saleOptions: [
    {
      value: [
        {
          info: 'Men bia'
        },
        {
          info: 'Lúa mạch'
        },
        {
          info: 'Nước'
        }
      ],
      isOption: false,
      canSelectMultiOptions: true,
      title: 'Thành phần chính',
      field: 'mainIngredient',
      manyChoices: false
    },
    {
      value: [
        {
          info: 'Lớn (500mil)',
          price: 50000
        },
        {
          info: 'Nhỏ (330mil)',
          price: 2000
        }
      ],
      isOption: true,
      canSelectMultiOptions: true,
      title: 'Chọn size',
      field: 'size',
      manyChoices: true
    },
    {
      value: [
        {
          info: '',
          price: 0
        }
      ],
      isOption: true,
      canSelectMultiOptions: true,
      title: 'Lượng đá',
      field: 'iceContent',
      manyChoices: true
    },
    {
      value: [
        {
          info: '',
          price: 0
        }
      ],
      isOption: true,
      canSelectMultiOptions: true,
      title: 'Lượng đường',
      field: 'sugarContent',
      manyChoices: true
    }
  ],
  infos: [
    {
      title: 'Tên chủ đề',
      infoPhotos: ['', '', '', ''],
      content: 'Không có chủ đề gì cả',
      enable: true
    }
  ]
}

const productAttribue = [
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
    manyChoices: false,
    atLeastOne: true,
    appear: true,
    options: [
      {
        text: '100% Đường (Ngọt Ngây)',
        price: 0
      },
      {
        text: '50% Đường (Ngọt Vừa)',
        price: 0
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
    atLeastOne: true,
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
    manyChoices: false,
    atLeastOne: true,
    appear: true,
    options: [
      {
        text: 'Ổi x Mật Ong x Cà Rốt',
        price: 0
      },
      {
        text: 'Ổi x Mật Ong x Lê',
        price: 0
      },
      {
        text: 'Ổi x Mật Ong x Dứa',
        price: 0
      },
      {
        text: 'Ổi x Mật Ong x Dưa Hấu',
        price: 0
      },
      {
        text: 'Ổi x Mật Ong x Cần Tây',
        price: 0
      }
    ]
  }
]

const editProductData = {
  _id: '6500448b9967beb72af43a7f',
  productName: 'Sản phẩm 1',
  auxiliaryName: 'Tên phụ trợ 1',
  isVAT: true,
  productMainIngredients: 'Ổi',
  productThumbs: [
    {
      name: 'thumb1',
      url: 'https://one-drink-food.s3.ap-southeast-1.amazonaws.com/d571492a-f79c-4bad-ba96-96d84ea4976a-thumb1',
      key: 'd571492a-f79c-4bad-ba96-96d84ea4976a-thumb1'
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
  ],
  motionTime: 1000,
  mainFunctions: ['Function1', 'Function2', 'Function3'],
  productDescription: 'dsadsadsadsadasd',
  productPrice: 1,
  productQuantity: 1,
  productRatingsAverage: 4.5,
  category: '650034ac8ff5743043cad6d7',
  note: '',
  createdAt: '2023-09-12T10:59:24.374Z',
  updatedAt: '2023-09-12T10:59:25.748Z',
  productSlug: 'san-pham-1',
  introduction: 'Gioi thieu ehehhe',
  __v: 0
}

export { test, productAddTest, testName, productAttribue, editProductData }
