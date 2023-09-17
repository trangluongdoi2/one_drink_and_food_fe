import { DeleteIcon, ToggleDarkLgIcon, ToggleLightLgIcon } from '@/assets/icon'
import { ActionIcon, Flex, Group, MantineSize, Text, Title } from '@mantine/core'
import { FC } from 'react'

type TCouponHeaderProps = {
  title: string
  withToolbar?: boolean
  onDelete?: () => void
  onActive?: (value: boolean) => void
  active?: boolean
  size?: MantineSize | number
}

const CouponHeader: FC<TCouponHeaderProps> = ({
  title,
  withToolbar = false,
  onDelete,
  onActive,
  active = false,
  size = 24
}) => {
  return (
    <Flex justify='space-between'>
      <Text size={size} fw='bolder'>
        {title}
      </Text>
      {withToolbar && (
        <Group spacing={10}>
          <ActionIcon onClick={onDelete}>
            <DeleteIcon />
          </ActionIcon>
          <ActionIcon onClick={() => onActive && onActive(!active)}>
            {active ? <ToggleDarkLgIcon /> : <ToggleLightLgIcon />}
          </ActionIcon>
        </Group>
      )}
    </Flex>
  )
}

export default CouponHeader
