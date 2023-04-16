export enum ProductGroup {
  JUICE = 'juice',
  SMOOTHY = 'smoothy',
  YOGURT = 'yogurt',
  TEA = 'tea',
  COFFEE = 'coffee',
  ITEM = 'item'
}

enum SizeOptions {
  SMALL = '250ml',
  MEDIUM = '350ml'
}

export interface ProductProps {
  fireBaseId: string
  amount: number
  code: string
  group: ProductGroup
  mlAndPrice: {
    price: {
      sale: number
      import: number
    }
    ml: SizeOptions
  }[]
  name: string
  photo: string[]
  type: string
}
