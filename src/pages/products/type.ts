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
  manyChoices?: boolean
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
  manyChoices?: boolean
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

export enum ProductTypeEnum {
  JUICE = 'juice',
  VITAMIN = 'vitamin',
  YOGURT = 'yogurt',
  TEA = 'tea',
  COFFEE = 'coffee',
  ITEM = 'item'
}

export type ProductType = 'juice' | 'coffee' | 'tea' | 'smoothie' | 'yogurt'

export interface TProductAttributeOption {
  text: string | number
  price?: number
}

export interface TProductCreateNewAtribute {
  value: string
  order: number
  manyChoices: boolean
  atLeastOne: boolean
  appear: boolean
  options?: TProductAttributeOption[]
}

export interface TProductInformationContent {
  image: string
  text: string
}
export interface TProductCreateNewInformation {
  title: string
  order: number
  appear: boolean
  informationItems?: TProductInformationContent[]
}

export interface TProductCreateNew {
  productName: string
  auxiliaryName: string
  isVAT: string | boolean
  productMainIngredients: string
  motionTime: number | null
  mainFunctions: string[]
  productDescription: string
  productPrice: number
  productQuantity: number
  productType: ProductType
  productRatingsAverage: number
  attributes: TProductCreateNewAtribute[]
  listInformation: TProductCreateNewInformation[]
  category?: string
  note: string
}

export interface TCategoryCreate {
  name: string
  order: number
  productType: ProductType
}
