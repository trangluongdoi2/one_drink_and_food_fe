import { UnstyledButton, Group, Text } from '@mantine/core'
import { useStyles } from './index.style'
import { UserListHeaderProps } from '@/types/user'

interface ThProps {
  children?: React.ReactNode
  reversed: boolean
  // sorted: boolean
  onSort(): void
  width: number
  position?: 'left' | 'right' | 'center'
}

function Th({ width, children, onSort, position = 'left' }: ThProps) {
  const { classes } = useStyles()
  return (
    <th className={classes.th} style={{ width: width }}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position={position}>
          <Text fw={300} fz={12}>
            {children}
          </Text>
        </Group>
      </UnstyledButton>
    </th>
  )
}

const TableHeader = ({ reverseSortDirection, setSorting, header }: UserListHeaderProps) => {
  return (
    <>
      <thead style={{ fontSize: 12 }}>
        <tr>
          {header.map(({ id, width, title, position, value }) => (
            <Th
              // sorted={sortBy === id}
              key={id}
              reversed={reverseSortDirection}
              width={width}
              onSort={() => setSorting(value)}
              position={position}
            >
              {title}
            </Th>
          ))}
        </tr>
      </thead>
    </>
  )
}

export default TableHeader
