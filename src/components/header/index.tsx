import {
  Header,
  Group,
  UnstyledButton,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Image,
  Drawer,
  Collapse,
  ScrollArea,
  rem
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import { useStyles } from './index.style'
import { mockdata } from '@/constants/data'
import Logo from '@/assets/note-logo.png'
import UserMenu from '../userMenu'
import { LogoutButton } from '../button'
import { menuItem } from '@/constants/menu'
import { SubHeaderItem } from './subHeader'
import MenuItem from './menuItem'

const HeaderMenu = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const { classes, theme } = useStyles()

  return (
    <Box>
      <Header height={60} px='md'>
        <Group position='apart' sx={{ height: '100%' }}>
          <Image src={Logo} width={140} />

          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            {menuItem.map((item) => (
              <MenuItem {...item} key={item.id} />
            ))}
          </Group>

          <UserMenu />

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size='100%'
        title={<Image src={Logo} width={120} />}
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`}>
          <Divider my='sm' color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Anchor href='#' className={classes.link}>
            Home
          </Anchor>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component='span' mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>
            {mockdata.map((item) => (
              <SubHeaderItem key={item.id} {...item} />
            ))}
          </Collapse>
          <Anchor href='#' className={classes.link}>
            Learn
          </Anchor>
          <Anchor href='#' className={classes.link}>
            Academy
          </Anchor>

          <Divider my='sm' color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <LogoutButton color='red' fullWidth />
        </ScrollArea>
      </Drawer>
    </Box>
  )
}

export default HeaderMenu
