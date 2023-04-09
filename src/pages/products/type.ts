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
