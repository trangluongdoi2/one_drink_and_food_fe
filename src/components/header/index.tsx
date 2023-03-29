import { Header, Group, Box, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useStyles } from './index.style'
import UserMenu from '../userMenu'
import SearchField from '../searchField'

const HeaderMenu = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const { classes, theme } = useStyles()

  return (
    <Box>
      <Header height={60} px={40}>
        <Group position='apart' sx={{ height: '100%' }}>
          <SearchField />
          <UserMenu />
          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      {/* <Drawer
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
      </Drawer> */}
    </Box>
  )
}

export default HeaderMenu
