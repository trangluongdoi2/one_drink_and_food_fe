import { Navbar, Group, ScrollArea, createStyles, ActionIcon } from '@mantine/core'
import LinksGroup from './LinkGroup.tsx'
import { OneLogo } from '@/assets'
import { CloseButton } from '@/assets/icon/CloseButton'
import { navConfig } from '@/configs/navConfig'

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
    boxShadow: '1px 0px 10px #ccc'
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl
  }
}))

const NavbarHeader = () => {
  const { classes } = useStyles()
  const links = navConfig.map((item) => <LinksGroup {...item} key={item.label} />)

  return (
    <Navbar height='100vh' width={{ sm: 240 }} p='md' className={classes.navbar}>
      <Navbar.Section mt={16} mx={20}>
        <Group position='apart'>
          <OneLogo />
          <ActionIcon>
            <CloseButton />
          </ActionIcon>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  )
}

export default NavbarHeader
