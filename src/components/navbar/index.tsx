import { Navbar, Group, ScrollArea, ActionIcon, Box, Center, Accordion } from '@mantine/core'
import LinksGroup from './LinkGroup.tsx'
import { OneLogo, HiddenIcon } from '@/assets/icon'
import { navConfig } from '@/configs/navConfig'
import { IconChevronRight } from '@tabler/icons-react'
import { useState } from 'react'
import { useStyles } from './index.style.js'

const NavbarHeader = () => {
  const { classes } = useStyles()
  const [selected, setSelected] = useState<string>('')
  const [tab, setTab] = useState<string>('')
  const [hiddenNav, setHiddenNav] = useState<boolean>(false)
  const links = navConfig.map((item: any) => (
    <LinksGroup {...item} key={item.label} selected={selected} setSelected={setSelected} tab={tab} setTab={setTab} />
  ))

  return (
    <>
      {!hiddenNav ? (
        <Navbar height='100vh' width={{ sm: 240 }} p='md' className={classes.navbar} hidden>
          <Navbar.Section mt={16} mx={20}>
            <Group position='apart'>
              <OneLogo />
              <ActionIcon onClick={() => setHiddenNav(!hiddenNav)}>
                <HiddenIcon />
              </ActionIcon>
            </Group>
          </Navbar.Section>

          <Navbar.Section grow className={classes.links} component={ScrollArea}>
            <Accordion
              chevronPosition='right'
              defaultValue='Tổng quan'
              variant='default'
              transitionDuration={300}
              styles={(theme) => ({
                content: { padding: 0 },
                control: {
                  backgroundColor: theme.white
                },
                item: {
                  padding: 0
                }
              })}
            >
              <div className={classes.linksInner}>{links}</div>
            </Accordion>
          </Navbar.Section>
        </Navbar>
      ) : (
        <Box className={classes.icon}>
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
