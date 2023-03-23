import { Group, Button, UnstyledButton, Text, SimpleGrid, ThemeIcon, Anchor, Divider, rem } from '@mantine/core'
import { useStyles } from '../index.style'
import { Fragment } from 'react'

interface SubHeaderItemProps {
  title: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
}

export const SubHeaderItem = ({ title, description, icon: MenuIcon }: SubHeaderItemProps) => {
  const { classes, theme } = useStyles()
  return (
    <UnstyledButton className={classes.subLink} key={title}>
      <Group noWrap align='flex-start'>
        <ThemeIcon size={34} variant='default' radius='md'>
          <MenuIcon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size='sm' fw={500}>
            {title}
          </Text>
          <Text size='xs' color='dimmed'>
            {description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  )
}

const SubHeaderList = () => {
  const { classes, theme } = useStyles()

  return <Fragment></Fragment>
}

export default SubHeaderList
