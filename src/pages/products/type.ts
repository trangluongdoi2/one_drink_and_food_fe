export interface ProductGridProps {
  type?: string
}

export interface ProductOverview {
  name: string
  title: string
  img: string
}
export interface ProductCardProps {
  forNewProduct?: boolean
  productOverview?: ProductOverview
}

export enum JuiceType {
  JUICE_BOTTLED = 'Nước ép đóng chai',
  JUICE_GLASS = 'Nước ép ly'
}

export enum ProductType {
  JUICE = 'Nước ép',
  VITAMIN = 'Sinh tố',
  YOGURT = 'Yogurt',
  TEA = 'Trà',
  COFFEE = 'Cà phê',
  ITEMS = 'Vật phẩm'
}
