import { TNavLink } from '@/configs/navConfig'
import { Text, clsx } from '@mantine/core'
import { Dispatch, FC, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './index.style'

type TLinkItemProps = {
  link: TNavLink
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}

export const LinkItem: FC<TLinkItemProps> = ({ link, selected, setSelected }) => {
  const { classes } = useStyles()
  const handleOnClick = () => setSelected(link.label)
  const isSelected = selected === link.label

  return (
    <Link to={link.link} style={{ textDecoration: 'none' }}>
      <Text className={clsx(classes.link, { [classes.selected]: isSelected })} onClick={handleOnClick}>
        {link.label}
      </Text>
    </Link>
  )
}
