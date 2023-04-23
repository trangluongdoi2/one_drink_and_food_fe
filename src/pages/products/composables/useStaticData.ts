import { useTranslation } from 'react-i18next'
// const { t } = useTranslation()

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

export { test }
// export {}
