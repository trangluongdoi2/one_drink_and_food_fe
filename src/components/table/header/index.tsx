import { UnstyledButton, Group, Text } from '@mantine/core'

import { SortUserProps, UserProps } from '@/types/user'

interface ThProps {
  children?: React.ReactNode
  reversed: boolean
  width: string | number
  colNumber?: number
  onSort(): void
  position?: 'left' | 'right' | 'center'
}

const HeaderColumn = ({ children, onSort, position = 'left', width }: ThProps) => {
  return (
    <li style={{ float: 'left', width: width }}>
      <UnstyledButton onClick={onSort}>
        <Group position={position}>
          <Text fw={300} fz={12}>
            {children}
          </Text>
        </Group>
      </UnstyledButton>
    </li>
  )
}

interface TableHeaderProps {
  reverseSortDirection: boolean
  setSorting: (field: keyof SortUserProps) => void
  headerContent: {
    id: keyof UserProps | ''
    title: string
    width: string
    value: keyof SortUserProps
    position?: 'left' | 'center' | 'right'
  }[]
}

export const TableHeader = ({ reverseSortDirection, setSorting, headerContent }: TableHeaderProps) => {
  return (
    <ul
      style={{
        textDecoration: 'none',
        listStyle: 'none',
        display: 'flex',
        width: '100%',
        fontSize: 12,
        padding: '0px 20px',
        marginLeft: 50
      }}
    >
      {headerContent.map(({ id, title, position, value, width }) => (
        <HeaderColumn
          key={id}
          reversed={reverseSortDirection}
          onSort={() => setSorting(value)}
          position={position}
          width={width}
        >
          {title}
        </HeaderColumn>
      ))}
    </ul>
  )
}
