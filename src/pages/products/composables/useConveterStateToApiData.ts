/* eslint-disable @typescript-eslint/ban-ts-comment */
import { cloneDeep } from 'lodash'
import { TProductCreateNew } from '../type'
import { ProductState } from '@/reducer/product/type'

export default function useConveterStateToApiData(input: ProductState): TProductCreateNew {
  const cloneInput = cloneDeep(input)
  // @ts-ignore
  delete cloneInput.infos
  // @ts-ignore
  delete cloneInput.dispatch
  // @ts-ignore
  delete cloneInput.photos
  // @ts-ignore
  delete cloneInput.photosStore
  // @ts-ignore
  delete cloneInput.saleOptions
  return {
    ...(input as TProductCreateNew),
    productName: 'productName',
    auxiliaryName: 'auxiliaryName',
    // infos: undefined,
    // dispatch: undefined,
    // photos: undefined,
    // photosStore: undefined,
    // saleOptions: undefined,
    isVAT: true,
    productMainIngredients: '123',
    mainFunctions: ['s', 's', 's'],
    // motionTime: 1000,
    attributes: [
      {
        value: 'Sizes',
        order: 0,
        manyChoices: false,
        atLeastOne: false,
        appear: true,
        options: [
          {
            text: 'xxx',
            price: 0
          }
        ]
      }
    ],
    productQuantity: 1,
    productDescription: '...',
    productRatingsAverage: 5,
    // note: '',
    category: '123',
    listInformation: [
      {
        title: 'haha',
        order: 1,
        appear: true,
        informationItems: [
          {
            text: 'xxx',
            image: 'true'
          },
          {
            text: 'yyy',
            image: 'false'
          }
        ]
      }
    ]
  }
}
