export type TColumnsProps = {
  id: string
  title?: string
  width: string
  render?: (data?: any, isEdit?: boolean) => React.ReactNode | string
  position?: 'left' | 'center'
}
