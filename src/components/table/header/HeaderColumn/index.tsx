import { Group, List, UnstyledButton, Text } from '@mantine/core'
import { FC } from 'react'

type THeaderColumnProps = {
  children?: React.ReactNode
  width: string | number
  colNumber?: number
  position?: 'left' | 'right' | 'center'
}

export const HeaderColumn: FC<THeaderColumnProps> = ({ children, position = 'left', width }) => {
  return (
    <List.Item style={{ float: 'left', width: width }}>
      <UnstyledButton>
        <Group position={position}>
          <Text fw={300} fz={12}>
            {children}
          </Text>
        </Group>
      </UnstyledButton>
    </List.Item>
  )
}
