import { UserHeaderProps, UserProps } from './user'

export interface TableActionProps {
  checkbox: string
  tool: string
}

export type HeaderProps = UserHeaderProps

export interface SortingProps {
  sortBy: keyof UserProps | null
  reverseSortDirection: boolean
  setSorting: (field: keyof UserProps) => void
}

export type RowData = UserProps
