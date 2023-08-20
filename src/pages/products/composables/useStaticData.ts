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
  typicalFunction: ['Làm khoẻ mạnh', 'Làm mạnh khoẻ'],
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
      multiOptions: false
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
      multiOptions: true
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
      multiOptions: true
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
      multiOptions: true
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

export { test, productAddTest, testName }
