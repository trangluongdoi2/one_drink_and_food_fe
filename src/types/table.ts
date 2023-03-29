import { UserHeaderProps, UserProps, SortUserProps } from './user'

export interface TableActionProps {
  checkbox: string
  tool: string
}

export type HeaderProps = UserHeaderProps

export interface SortingProps {
  reverseSortDirection: boolean
  setSorting: (field: keyof SortUserProps) => void
}

export type RowData = UserProps
