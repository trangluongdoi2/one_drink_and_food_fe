export interface ProductGridProps {
  productType?: string
  productSubType?: string
  title?: string
}

export interface ProductOverview {
  name: string
  title: string
  img: string
}
export interface ProductCardProps {
  forNewProduct?: boolean
  productOverview?: ProductOverview
  productType?: string
  productSubType?: string
}

export interface ProductOptionFrameProps {
  canSelectMultiOptions?: boolean
  isActive?: boolean
  title?: string
  defaultPlaceholder: string
  isOption?: boolean
  field?: string
  multiOptions?: boolean
  enable?: boolean
  updateTitle: (data: string) => void
  updateEnable: (data: boolean) => void
  updateSelectMultiOption: (data: boolean) => void
  updateProductOption: (data: ProductSaleOptionsContent) => void
  removeProductOptionItem: () => void
}

export interface ProductSaleOptionsContent {
  title?: string
  field?: string
  value: Array<SaleOptionValue>
  isOption: boolean
  canSelectMultiOptions?: boolean
  multiOptions?: boolean
  enable?: boolean
}

export interface SaleOptionValue {
  info: string | number
  price?: number
}

export interface ProductInfos {
  title: string
  infoPhotos: string[]
  infoPhotosStore: File[]
  content: string
  enable: boolean
}

export enum JuiceType {
  JUICE_BOTTLED = 'juiceBottled',
  JUICE_GLASS = 'juiceGlass'
}

export enum ProductType {
  JUICE = 'juice',
  VITAMIN = 'vitamin',
  YOGURT = 'yogurt',
  TEA = 'tea',
  COFFEE = 'coffee',
  ITEM = 'item'
}

export interface ProductCreateNew {
  productName: string
  auxiliaryName: string
  isVAT: string
  productMainIngredients: string
  motionTime: 0
  mainFunctions: string[]
  productDescription: string
  productPrice: 0
  productQuantity: 0
  productType: string
  productRatingsAverage: 0
  attributes: string[]
  listInformation: string[]
  note: string
}
