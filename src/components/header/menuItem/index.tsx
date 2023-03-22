import { Anchor, HoverCard } from '@mantine/core'
import { useStyles } from '../index.style'

interface MenuItemProps {
  id: number
  link: string
  item: string | React.ReactNode
  hasSubMenu: boolean
  subList?: string | React.ReactNode
}

const MenuItem = ({ item, hasSubMenu = false, subList }: MenuItemProps) => {
  const { classes } = useStyles()
  return !hasSubMenu ? (
    <Anchor href='#' className={classes.link}>
      {item}
    </Anchor>
  ) : (
    <HoverCard width={600} position='bottom' radius='md' shadow='md' withinPortal>
      <HoverCard.Target>
        <Anchor href='#' className={classes.link}>
          {item}
        </Anchor>
      </HoverCard.Target>

      <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>{subList}</HoverCard.Dropdown>
    </HoverCard>
  )
}

export default MenuItem
