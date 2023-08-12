import { TNavConfig } from '@/configs/navConfig'
import { Accordion, Flex, Group, Text } from '@mantine/core'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LinkList from '../LinkList'

interface PropsType extends TNavConfig {
  getCurrentTab: (tab: string) => void
  isActive: boolean
}

const LinksGroup: FC<PropsType> = ({ getCurrentTab, isActive, icon: Icon, active: ActiveIcon, links, label }) => {
  const [hover, setHover] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('')
  const navigate = useNavigate()

  const handleTabClick = (currentTab: string) => {
    const [firstLink] = links
    setSelected(links ? firstLink.label : '')
    navigate(links ? firstLink.link : '')
    getCurrentTab(currentTab)
  }

  return (
    <Accordion.Item value={label} sx={{ border: 'none' }}>
      <Accordion.Control px={30} py={10} onClick={() => handleTabClick(label)}>
        <Group position='apart' spacing={0} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <Flex align='center' h={40}>
            {hover || isActive ? <Icon /> : <ActiveIcon />}
            <Text ml='md' size={14}>
              {label}
            </Text>
          </Flex>
        </Group>
      </Accordion.Control>
      <LinkList links={links} selected={selected} setSelected={setSelected} />
    </Accordion.Item>
  )
}

export default LinksGroup
