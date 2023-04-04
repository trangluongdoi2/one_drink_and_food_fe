import { UserHeaderProps, UserProps, SortUserProps, UserListHeaderProps } from './user'

export interface TableActionProps {
  checkbox: string
  tool: string
}

export type HeaderProps = UserHeaderProps

export interface SortingProps {
  reverseSortDirection: boolean
  setSorting: (field: keyof SortUserProps) => void
  headerContent: UserListHeaderProps['header']
}

export type RowData = UserProps
