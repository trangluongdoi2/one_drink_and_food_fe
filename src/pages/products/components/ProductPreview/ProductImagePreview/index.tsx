import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { EmblaOptionsType } from 'embla-carousel-react'
import { ActionIcon, Flex, Stack, Text, Box } from '@mantine/core'
import { DoneOutlineIcon } from '@/assets/icon'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { AppCarousel } from '@/components/carousel'
import { useStyles } from './index.styles'

export const ProductImagePreview = () => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { mainFunctions, introduction, photos } = useProductContext()
  // const { filePaths, enabled, motionTime } = photos
  const filePaths = useProductContext().photos?.filePaths as string[]
  const enabled = useProductContext().photos?.enabled
  const motionTime = useProductContext().photos?.motionTime as number
  const OPTIONS: EmblaOptionsType = {
    loop: true
  }
  const [slides, setSlides] = useState<string[]>([])

  useEffect(() => {
    if (filePaths?.length) {
      setSlides([...filePaths])
    } else {
      setSlides(['', '', '', '', '', '', '', ''])
    }
  }, [filePaths])

  return (
    <Stack className={classes.container}>
      <Box className={classes.container__carousel}>
        {slides?.length && <AppCarousel slides={slides} options={OPTIONS} enabled={enabled} motionTime={motionTime} />}
      </Box>
      <Stack>
        {mainFunctions?.length &&
          mainFunctions.map((item, index) => (
            <Flex key={index} columnGap={6}>
              <ActionIcon size={10}>
                <DoneOutlineIcon />
              </ActionIcon>
              <Text
                className={
                  item ? `${classes.text__content}` : `${classes.text__content} ${classes['text__function--empty']}`
                }
              >
                {item ? item : t('function', { index: index + 1 })}
              </Text>
            </Flex>
          ))}
      </Stack>
      <Stack spacing={1}>
        <Text className={classes.text__introduction}>{t('introduction')}</Text>
        <Text
          className={
            introduction ? `${classes.text__content}` : `${classes.text__content} ${classes['text__function--empty']}`
          }
        >
          {introduction ? introduction : t('fill_product_introduction')}
        </Text>
      </Stack>
    </Stack>
  )
}
