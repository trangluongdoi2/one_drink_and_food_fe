export interface ProductGridProps {
  productType?: string
  productSubType?: string
  title?: string
  data: TProductDetail[]
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
  item?: TProductDetail
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
  removeProductOptionItem: () => void
}

export interface SaleOptionValue {
  info: string | number
  price?: number
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

export interface TProductThumbs {
  name: string
  url: string | null
  key: string | null
}
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
  image?: string
  topicName?: string
  text: string
  filePaths?: string[]
  fileStores?: File[]
}
export interface TProductCreateNewInformation {
  title: string
  order: number
  appear: boolean
  informationItems?: TProductInformationContent[]
}

export interface TProductCreateNew {
  _id?: string
  productName: string
  auxiliaryName: string
  isVAT: string | boolean
  productMainIngredients: string
  productThumbs: TProductThumbs[]
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

export interface TProductDetail {
  _id: string
  productName: string
  auxiliaryName: string
  isVAT: string | boolean
  productMainIngredients: string
  productThumbs: TProductThumbs[]
  motionTime: number | null
  mainFunctions: string[]
  productDescription: string
  productPrice: number
  productQuantity: number
  productType: ProductType
  productRatingsAverage: number
  attributes: TProductCreateNewAtribute[]
  listInformation: TProductCreateNewInformation[]
  category: TCategoryDetail
  note: string
  productSlug: string
  createdAt: string
  updatedAt: string
}

export type TProductUpdate = TProductCreateNew

export interface TCategoryDetail {
  _id: string
  name: string
  productType: ProductType
}

export interface TCategoryCreate {
  name: string
  order: number
  productType: ProductType
}
