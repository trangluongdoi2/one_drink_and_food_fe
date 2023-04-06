import { UnstyledButton, Group, Text } from '@mantine/core'
import { OrderProps } from '@/types/order'

interface ThProps {
  children?: React.ReactNode
  width: string | number
  colNumber?: number
  position?: 'left' | 'right' | 'center'
}

const OrderColumn = ({ children, position = 'left', width }: ThProps) => {
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

interface OrderHeaderProps {
  headerContent: {
    id: keyof OrderProps | ''
    title: string
    width: string
    position?: 'left' | 'center' | 'right'
  }[]
}

export const OrderHeader = ({ headerContent }: OrderHeaderProps) => {
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
        <OrderColumn key={id} position={position} width={width}>
          {title}
        </OrderColumn>
      ))}
    </ul>
  )
}
