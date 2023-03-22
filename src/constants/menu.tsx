import SubHeaderList from '@/components/header/subHeader'
import { Box, Center } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

export const menuItem = [
  {
    id: 1,
    item: 'Home',
    link: '#',
    hasSubMenu: false
  },
  {
    id: 2,
    item: (
      <Center inline>
        <Box component='span' mr={5}>
          Features
        </Box>
        <IconChevronDown size={16} color='#339af0' />
      </Center>
    ),
    hasSubMenu: true,
    subList: <SubHeaderList />,
    link: '#'
  },
  {
    id: 3,
    item: 'Learn',
    link: '#',
    hasSubMenu: false
  },
  {
    id: 4,
    item: 'Academy',
    link: '#',
    hasSubMenu: false
  }
]
