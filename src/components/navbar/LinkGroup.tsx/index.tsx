import { TNavConfig } from '@/configs/navConfig'
import { Accordion, ActionIcon, Flex, Group, Text } from '@mantine/core'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LinkList from '../LinkList'

type TLinksGroupProps = TNavConfig

const LinksGroup: FC<TLinksGroupProps> = ({ icon: Icon, active: ActiveIcon, label, links }) => {
  const [hover, setHover] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('')
  const [tab, setTab] = useState<string>('')
  const navigate = useNavigate()
  const isSelectedTab = tab === label

  const handleTabClick = () => {
    const [firstLink] = links
    setSelected(links ? firstLink.label : '')
    setTab(label)
    navigate(links ? firstLink.link : '')
  }

  return (
    <Accordion.Item value={label} sx={{ border: 'none' }}>
      <Accordion.Control px={30} py={10} onClick={handleTabClick}>
        <Group position='apart' spacing={0} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <Flex align='center' h={40}>
            <ActionIcon>{hover || isSelectedTab ? <Icon /> : <ActiveIcon />}</ActionIcon>
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
