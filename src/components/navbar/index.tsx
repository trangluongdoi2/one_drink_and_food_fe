import { Navbar, Group, ScrollArea, createStyles, ActionIcon, Box, Center } from '@mantine/core'
import LinksGroup from './LinkGroup.tsx'
import { OneLogo } from '@/assets/icon'
import { HiddenIcon } from '@/assets/icon'
import { navConfig } from '@/configs/navConfig'
import { IconChevronRight } from '@tabler/icons-react'
import { useState } from 'react'

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
  const [selected, setSelected] = useState<string>('')
  const [hiddenNav, setHiddenNav] = useState<boolean>(false)
  const links = navConfig.map((item: any) => (
    <LinksGroup {...item} key={item.label} selected={selected} setSelected={setSelected} />
  ))

  return (
    <>
      {!hiddenNav ? (
        <Navbar height='100vh' width={{ sm: 240 }} p='md' className={classes.navbar}>
          <Navbar.Section mt={16} mx={20}>
            <Group position='apart'>
              <OneLogo />
              <ActionIcon onClick={() => setHiddenNav(!hiddenNav)}>
                <HiddenIcon />
              </ActionIcon>
            </Group>
          </Navbar.Section>

          <Navbar.Section grow className={classes.links} component={ScrollArea}>
            <div className={classes.linksInner}>{links}</div>
          </Navbar.Section>
        </Navbar>
      ) : (
        <Box
          sx={{
            position: 'absolute',
            top: 100,
            backgroundColor: '#fff',
            borderRadius: 10,
            height: 80,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Center>
            <ActionIcon onClick={() => setHiddenNav(!hiddenNav)}>
              <IconChevronRight />
            </ActionIcon>
          </Center>
        </Box>
      )}
    </>
  )
}

export default NavbarHeader
