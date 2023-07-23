import { TNavLink } from '@/configs/navConfig'
import { Accordion } from '@mantine/core'
import { Dispatch, FC, SetStateAction } from 'react'
import { LinkItem } from '../LinkItem'

type TLinkListProps = {
  links: TNavLink[]
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}

const LinkList: FC<TLinkListProps> = ({ links, selected, setSelected }) => {
  const hasLinks = Array.isArray(links)

  if (!hasLinks) return null

  return (
    <Accordion.Panel>
      {links.map((link, index) => (
        <LinkItem link={link} selected={selected} setSelected={setSelected} key={index} />
      ))}
    </Accordion.Panel>
  )
}

export default LinkList
