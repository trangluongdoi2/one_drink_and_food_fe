import { Navbar, Group, ScrollArea, ActionIcon, Box, Center, Accordion } from '@mantine/core'
import LinksGroup from './LinkGroup.tsx'
import { OneLogo, HiddenIcon } from '@/assets/icon'
import { TNavConfig, navConfig } from '@/configs/navConfig'
import { IconChevronRight } from '@tabler/icons-react'
import { useState } from 'react'
import { useStyles } from './index.style.js'

const NavbarHeader = () => {
  const { classes } = useStyles()
  const [hiddenNav, setHiddenNav] = useState<boolean>(false)
  const [currentTab, setCurrentTab] = useState<string>(navConfig[0].label)
  const getCurrentTab = (tab: string) => {
    setCurrentTab(tab)
  }
  const links = navConfig.map((item: TNavConfig) => (
    <LinksGroup getCurrentTab={getCurrentTab} isActive={currentTab === item.label} {...item} key={item.label} />
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
              classNames={{ content: classes.accordion, control: classes.control, item: classes.accordion }}
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
