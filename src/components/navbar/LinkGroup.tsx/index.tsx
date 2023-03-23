import { useState } from 'react'
import { Group, Box, Collapse, Text, UnstyledButton } from '@mantine/core'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { useStyles } from './index.style'
import { Link } from 'react-router-dom'

interface LinksGroupProps {
  icon: React.FC<any>
  label: string
  initiallyOpened?: boolean
  links?: { label: string; link: string }[]
}

function LinksGroup({ icon: Icon, label, initiallyOpened, links }: LinksGroupProps) {
  const { classes, theme } = useStyles()
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const ChevronIcon = theme.dir === 'ltr' ? IconChevronDown : IconChevronUp
  const items = (hasLinks ? links : []).map((link, index) => (
    <Link to={link.link} style={{ textDecoration: 'none' }} key={index}>
      <Text className={classes.link}>{link.label}</Text>
    </Link>
  ))

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control} px={30}>
        <Group position='apart' spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: 40 }}>
            <Icon size={20} />
            <Box ml='md'>{label}</Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size='1rem'
              stroke={1.5}
              style={{
                transform: opened ? `rotate(${theme.dir === 'rtl' ? 180 : -180}deg)` : 'none'
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}

export default LinksGroup
