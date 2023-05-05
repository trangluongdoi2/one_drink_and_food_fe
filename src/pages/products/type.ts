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
  updateSelectMultiOption: (data: boolean) => void
  updateProductOption: (data: ProductSaleOptionsContent) => void
}

export interface ProductSaleOptionsContent {
  title?: string
  field?: string
  value: Array<SaleOptionValue>
  isOption: boolean
  canSelectMultiOptions?: boolean
  multiOptions?: boolean
}

export interface SaleOptionValue {
  info: string | number
  price?: number
}

export interface ProductInfos {
  title: string
  infoPhotos: string[]
  content: string
  enable: boolean
}

export enum JuiceType {
  JUICE_BOTTLED = 'juiceBottled',
  JUICE_GLASS = 'juiceGlass'
}

export enum ProductType {
  JUICE = 'Nước ép',
  VITAMIN = 'Sinh tố',
  YOGURT = 'Yogurt',
  TEA = 'Trà',
  COFFEE = 'Cà phê',
  ITEMS = 'Vật phẩm'
}
