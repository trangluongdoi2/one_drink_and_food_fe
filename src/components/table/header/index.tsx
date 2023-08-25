import { List } from '@mantine/core'

import { HeaderProps } from '@/types/table'
import { FC } from 'react'
import { HeaderColumn } from './HeaderColumn'
import { useStyles } from './index.style'

type TTableHeaderProps = {
  headerContent: HeaderProps<string>[]
}

export const TableHeader: FC<TTableHeaderProps> = ({ headerContent }) => {
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
