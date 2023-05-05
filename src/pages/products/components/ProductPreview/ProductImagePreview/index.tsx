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
  const { typicalFunction, introduction } = useProductContext()
  const filePaths = useProductContext().photos?.filePaths as string[]
  const canMove = useProductContext().photos?.canMove
  const motionDelays = useProductContext().photos?.motionDelays as number
  const OPTIONS: EmblaOptionsType = {
    loop: true
  }
  const [slides, setSlides] = useState<string[]>([])

  useEffect(() => {
    setSlides(filePaths)
  }, [filePaths])

  return (
    <Stack className={classes.container}>
      <Box className={classes.container__carousel}>
        {slides.length > 0 && (
          <AppCarousel slides={slides} options={OPTIONS} canMove={canMove} motionDelays={motionDelays} />
        )}
      </Box>
      <Stack>
        {typicalFunction &&
          typicalFunction.map((item, index) => (
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
