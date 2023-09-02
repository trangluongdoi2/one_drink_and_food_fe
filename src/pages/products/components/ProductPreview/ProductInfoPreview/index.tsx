import { useTranslation } from 'react-i18next'
import { EmblaOptionsType } from 'embla-carousel-react'
import { Box, Flex, Stack, Text } from '@mantine/core'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { AppCarousel } from '@/components/carousel'
import { useStyles } from './index.styles'

export const ProductInfoPreview = () => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { listInformation } = useProductContext()
  const OPTIONS: EmblaOptionsType = {
    loop: true
  }

  return (
    <Stack className={classes.container}>
      <Stack spacing={32}>
        {listInformation?.length > 0 &&
          listInformation.map((item: any, index) => (
            <Stack key={index}>
              <Text className={classes.text__title}>{!item.title ? t('information_category') : item.title}</Text>
              <Flex key={index} columnGap={32} className={classes.container__category}>
                {item.informationItems?.length &&
                  item.informationItems.map((topic: any, childIndex: number) => (
                    <div key={childIndex}>
                      {/* <Box className={classes.container__carousel}>
                        {item?.infoPhotos && (
                          <AppCarousel slides={item.infoPhotos} options={OPTIONS} enabled={true} hasThumbnail={false} />
                        )}
                      </Box> */}
                      <Stack spacing={9} sx={{ padding: '32px', flex: '1' }}>
                        <Text className={classes.text__category}>
                          {!topic.topicName ? t('topic_name') : topic.topicName}
                        </Text>
                        <Text className={classes['text__category-content']}>
                          {topic.text ? topic.text : t('fill_information_of_title')}
                        </Text>
                      </Stack>
                    </div>
                  ))}
              </Flex>
            </Stack>
          ))}
      </Stack>
    </Stack>
  )
}
