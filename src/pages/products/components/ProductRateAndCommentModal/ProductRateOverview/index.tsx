import { useEffect, useState } from 'react'
import { Box, Flex, Rating, Slider, Stack, Text, createStyles } from '@mantine/core'
import useTranslationMiddleware from '@/i18n/useTranslationMiddleware'
import { useStyles } from './index.styles'

const { trans } = useTranslationMiddleware()

const RateSlider = () => {
  const useStyles = createStyles(() => ({
    text__rating: {
      fontSize: '40px',
      lineHeight: '49px',
      fontWeight: 700
    },
    'text__rating--max': {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '29px',
      color: '#c4c4c4'
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '13px'
    },
    slider: {
      width: '180px'
    }
  }))

  const { classes } = useStyles()
  const evaluates = [
    {
      value: 100,
      rate: 5
    },
    {
      value: 200,
      rate: 5
    },
    {
      value: 300,
      rate: 5
    },
    {
      value: 400,
      rate: 5
    },
    {
      value: 500,
      rate: 5
    }
  ]

  const [sumEvaluates, setSumEvaluates] = useState<number>(0)

  useEffect(() => {
    const sum = evaluates.reduce((a, b) => a + b.value, 0)
    setSumEvaluates(sum)
  }, [])

  return (
    <Box>
      <Flex>
        <Text>
          <span className={classes.text__rating}>4.3</span>
          <span className={classes['text__rating--max']}>/5</span>
        </Text>
        <Rating value={4.3} fractions={10} readOnly={true} classNames={{ root: classes.rating }} />
      </Flex>
      <Stack spacing={0}>
        {evaluates.map((rate: Record<string, any>, index: number) => (
          <Flex key={index} gap={0}>
            <Slider value={(rate.value / sumEvaluates) * 100} disabled className={classes.slider}></Slider>
            <Rating value={evaluates.length - index} count={evaluates.length - index} size='xs' color='gray' readOnly />
          </Flex>
        ))}
      </Stack>
    </Box>
  )
}

export const ProductRateOverview = () => {
  const { classes } = useStyles()
  return (
    <Box className={classes.container}>
      <Text style={{ fontSize: '20px', fontWeight: 700, lineHeight: '24px' }}>Ổi</Text>
      <Text style={{ fontSize: '10px', fontWeight: 400, lineHeight: '12px' }}>{trans('juiceGlass')}</Text>
      <Text style={{ fontSize: '16px', fontWeight: 700, lineHeight: '20px' }}>{trans('sold')}: 1000</Text>
      <RateSlider />
      <Text style={{ fontSize: '12px', fontWeight: 400, lineHeight: '15px' }}>480 {trans('reviews')}</Text>
    </Box>
  )
}
