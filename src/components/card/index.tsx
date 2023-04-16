import { ICardProps } from '@/pages/overview/components'
import { Paper, Stack, Text } from '@mantine/core'

const CardItem = (content: ICardProps) => {
  const { title1, title2, content1, content2 } = content

  return (
    <Paper p={40} radius={10} shadow='md'>
      <Stack spacing={15}>
        <Stack spacing={10}>
          <Text size='sm'>{title1}</Text>
          <Text fw={700} size={24} lh={1.1}>
            {content1}
          </Text>
        </Stack>
        <Stack>
          <Text size='sm'>{title2}</Text>
          <Text fw={700} size={24} lh={1.1}>
            {content2}
          </Text>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default CardItem
