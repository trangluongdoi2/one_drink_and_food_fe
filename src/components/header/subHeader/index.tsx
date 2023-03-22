import { Group, Button, UnstyledButton, Text, SimpleGrid, ThemeIcon, Anchor, Divider, rem } from '@mantine/core'
import { mockdata } from '@/constants/data'
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

  return (
    <Fragment>
      <Group position='apart' px='md'>
        <Text fw={500}>Features</Text>
        <Anchor href='#' fz='xs'>
          View all
        </Anchor>
      </Group>
      <Divider my='sm' mx='-md' color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
      <SimpleGrid cols={2} spacing={0}>
        {mockdata.map((item) => (
          <SubHeaderItem key={item.id} {...item} />
        ))}
      </SimpleGrid>
      <div className={classes.dropdownFooter}>
        <Group position='apart'>
          <div>
            <Text fw={500} fz='sm'>
              Get started
            </Text>
            <Text size='xs' color='dimmed'>
              Their food sources have decreased, and their numbers
            </Text>
          </div>
          <Button variant='default'>Get started</Button>
        </Group>
      </div>
    </Fragment>
  )
}

export default SubHeaderList
