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
  field: string
  updateProductOption: (data: any) => void
}

export interface ProductContentFrame {
  title: string
  field: string
  value?: string
  price?: number | string
  isOption?: boolean
}

// export interface ProductOption {
//   title: string
//   field: string
//   value?: string
//   price?: number | string
// }

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
