import { UnstyledButton, Group, Text } from '@mantine/core'

import { HeaderProps } from '@/types/table'

interface ThProps {
  children?: React.ReactNode
  width: string | number
  colNumber?: number
  // onSort(): void
  position?: 'left' | 'right' | 'center'
}

const HeaderColumn = ({ children, position = 'left', width }: ThProps) => {
  return (
    <li style={{ float: 'left', width: width }}>
      <UnstyledButton>
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
  // reverseSortDirection: boolean
  // setSorting: (field: keyof SortUserProps) => void
  headerContent: HeaderProps<string>[]
}

export const TableHeader = ({ headerContent }: TableHeaderProps) => {
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
      {headerContent.map(({ id, title, position, width }) => (
        <HeaderColumn
          key={id}
          // onSort={() => setSorting(value)}
          position={position}
          width={width}
        >
          {title}
        </HeaderColumn>
      ))}
    </ul>
  )
}
