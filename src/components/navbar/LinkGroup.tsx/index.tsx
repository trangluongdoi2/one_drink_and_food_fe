import { Dispatch, SetStateAction, useState } from 'react'
import { Group, Text, Accordion, Flex } from '@mantine/core'
import { useStyles } from './index.style'
import { Link, useNavigate } from 'react-router-dom'

interface LinksGroupProps {
  icon: React.FC<any> | string
  active: React.FC<any> | string
  label: string
  initiallyOpened?: boolean
  links?: { label: string; link: string }[]
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
  tab: string
  setTab: Dispatch<SetStateAction<string>>
}

function LinksGroup({
  icon: Icon,
  active: ActiveIcon,
  label,
  links,
  selected,
  setSelected,
  tab,
  setTab
}: LinksGroupProps) {
  const { classes } = useStyles()
  const hasLinks = Array.isArray(links)
  const [hover, setHover] = useState<boolean>(false)
  const navigate = useNavigate()
  const isSelectedTab = tab === label

  const handleTabClick = () => {
    setSelected(links ? links[0].label : '')
    setTab(label)
    navigate(links ? links[0].link : '')
  }

  console.log('selected', selected)
  console.log('tab', tab)

  const items = (hasLinks ? links : []).map((link, index) => {
    const handleOnClick = () => setSelected(link.label)

    const isSelected = selected === link.label

    return (
      <Link to={link.link} style={{ textDecoration: 'none' }} key={index}>
        <Text
          className={classes.link}
          sx={{ backgroundColor: isSelected ? '#000' : '', color: isSelected ? '#fff' : '' }}
          onClick={handleOnClick}
        >
          {link.label}
        </Text>
      </Link>
    )
  })

  return (
    <Accordion.Item
      value={label}
      sx={{
        border: 'none'
      }}
    >
      <Accordion.Control px={30} py={10} onClick={handleTabClick}>
        <Group position='apart' spacing={0} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <Flex align='center' h={40}>
            {hover || isSelectedTab ? <ActiveIcon size={20} /> : <Icon size={20} />}
            <Text ml='md' size={14}>
              {label}
            </Text>
          </Flex>
        </Group>
      </Accordion.Control>
      {hasLinks ? <Accordion.Panel>{items}</Accordion.Panel> : null}
    </Accordion.Item>
  )
}

export default LinksGroup
