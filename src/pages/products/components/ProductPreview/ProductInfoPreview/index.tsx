import { useTranslation } from 'react-i18next'
import { EmblaOptionsType } from 'embla-carousel-react'
import { Box, Flex, Stack, Text } from '@mantine/core'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { AppCarousel } from '@/components/carousel'
import { useStyles } from './index.styles'

export const ProductInfoPreview = () => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { infos } = useProductContext()
  const OPTIONS: EmblaOptionsType = {
    loop: true
  }

  return (
    <Stack className={classes.container}>
      <Text className={classes.text__title}>{t('information_category')}</Text>
      <Stack spacing={32}>
        {infos?.length > 0 &&
          infos.map((item, index) => (
            <Flex key={index} columnGap={32} className={classes.container__category}>
              <Box className={classes.container__carousel}>
                {item.infoPhotos.length && (
                  <AppCarousel slides={item.infoPhotos} options={OPTIONS} canMove={true} hasThumbnail={false} />
                )}
              </Box>
              <Stack spacing={9} sx={{ padding: '32px', flex: '1' }}>
                <Text className={classes.text__category}>{item.title ? item.title : t('topic_name')}</Text>
                <Text className={classes['text__category-content']}>
                  {item.content ? item.content : t('fill_information_of_title')}
                </Text>
              </Stack>
            </Flex>
          ))}
      </Stack>
    </Stack>
  )
}
