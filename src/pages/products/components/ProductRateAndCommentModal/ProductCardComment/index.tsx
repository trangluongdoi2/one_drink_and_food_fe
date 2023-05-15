import { DeleteIcon } from '@/assets/icon'
import { ActionIcon, Box, Flex, Rating, Stack, Text, createStyles } from '@mantine/core'
import { useTranslation } from 'react-i18next'

type Props = {
  data: {
    rate: number
    content: string
  }
}

const useStyles = createStyles(() => ({
  container: {
    background: '#f5f5f5',
    borderRadius: '10px',
    position: 'relative',
    padding: '20px'
  },
  text: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px'
  },
  date: {
    color: '#c4c4c4'
  },
  name: {
    fontWeight: 700,
    color: '#c4c4c4'
  },
  content: {
    fontSize: '14px',
    lineHeight: '24px'
  },
  icon: {
    position: 'absolute',
    right: 23,
    top: 22.5
  }
}))

export const ProductCardComment = ({ data }: Props) => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const onDeleleComment = () => {
    console.log('onDeleleComment')
  }
  return (
    <Box className={classes.container}>
      <Stack>
        <Flex align={'center'} justify={'space-between'}>
          <Stack spacing={10}>
            <Text className={classes.text}>{t('point_evaluation')}</Text>
            <Rating value={data.rate} fractions={10} readOnly={true} />
          </Stack>
          <Stack spacing={10} pr={30}>
            <Text className={`${classes.text} ${classes.date}`}>1/4/2023</Text>
            <Text className={`${classes.text} ${classes.name}`}>Nguyen Tin</Text>
          </Stack>
        </Flex>
        <Text className={`${classes.text} ${classes.content}`}>{data.content}</Text>
      </Stack>
      <ActionIcon onClick={onDeleleComment} className={classes.icon}>
        <DeleteIcon />
      </ActionIcon>
    </Box>
  )
}
