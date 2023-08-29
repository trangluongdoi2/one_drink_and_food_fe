import { Group, List, Text, UnstyledButton } from '@mantine/core'
import { FC } from 'react'

import { TColumnsProps } from '../type'
import { useStyles } from './index.style'

type TTableHeaderProps = {
  headerContent: TColumnsProps[]
}

export const Header: FC<TTableHeaderProps> = ({ headerContent }) => {
  const { classes } = useStyles()
  return (
    <List className={classes.list}>
      {headerContent.map(({ id, title, position, width }) => (
        <HeaderColumn key={id} position={position} width={width}>
          {title}
        </HeaderColumn>
      ))}
    </List>
  )
}

type THeaderColumnProps = {
  children?: React.ReactNode
  width: string | number
  colNumber?: number
  position?: 'left' | 'right' | 'center'
}

const HeaderColumn: FC<THeaderColumnProps> = ({ children, position = 'left', width }) => {
  return (
    <List.Item style={{ textAlign: position, width: width }}>
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
