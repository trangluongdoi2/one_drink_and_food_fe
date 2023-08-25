export type TColumnsProps = {
  id: string
  title?: string
  width: string
  render?: React.ReactNode | string
  position?: 'left' | 'center'
}

export type TTable = {
  data: any[]
  columns: TColumnsProps[]
  searchValue?: string
  rowPerPage?: number
}
