import { useTranslation } from 'react-i18next'
import { Flex, Stack, Text } from '@mantine/core'
import { useStyles } from './index.styles'

export const ProductInfoPreview = () => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const listInfo = [
    {
      topicName: '1',
      value: '1'
    },
    {
      topicName: '1',
      value: '1'
    },
    {
      topicName: '1',
      value: '1'
    }
  ]

  return (
    <Stack className={classes.container}>
      <Text className={classes.text__title}>{t('information_category')}</Text>
      <Stack spacing={32}>
        {listInfo.map((item, index) => (
          <Flex key={index} columnGap={32} className={classes.container__category}>
            <div className={classes.image}></div>
            <Stack spacing={9} sx={{ padding: '32px' }}>
              <Text className={classes.text__category}>{t('topic_name')}</Text>
              <Text className={classes['text__category-content']}>{t('fill_information_of_title')}</Text>
            </Stack>
          </Flex>
        ))}
      </Stack>
    </Stack>
  )
}
