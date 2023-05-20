import { Box, Flex, ScrollArea, Select, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useStyles } from './index.styles'
import { ArrowDownIcon } from '@/assets/icon'
import { ProductCardComment } from '../ProductCardComment'

export const ProductCommentDetails = ({ data }: any) => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const dataSelect = [t('lastest_rate'), t('oldest_rate'), t('highest_point'), t('lowest_point')]
  return (
    <Box className={classes.container}>
      <Flex align={'center'} justify={'space-between'}>
        <Select
          placeholder='Pick one'
          rightSectionWidth={30}
          defaultValue={t('lastest_rate')}
          rightSection={<ArrowDownIcon />}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          data={dataSelect}
          classNames={{ input: classes.comments__input, dropdown: classes.comments__dropdown, item: classes.item }}
        />
        <Text>238 {t('reviews')}</Text>
      </Flex>
      <Box className={classes.comments}>
        {data.map((item: any, index: number) => (
          <Box key={index}>
            <ProductCardComment data={item} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
