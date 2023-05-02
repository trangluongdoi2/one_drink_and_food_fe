import { ActionIcon, Flex, Stack, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { AddCircleLightIcon, DoNotDisturbLightIcon } from '@/assets/icon'
import { useStyles } from './index.styles'
import { OverviewTable } from './OverviewTable'
import { useProductContext } from '@/context/ProductContext/ProductContext'

export const ProductOverviewPreview = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const { name, auxiliaryName, prices } = useProductContext()

  return (
    <Stack spacing={0}>
      <Text className={name ? classes.text__name : classes['text__name--empty']}>
        {name ? name : t('product_name')}
      </Text>
      <Text className={auxiliaryName ? classes.text__auxiliary : classes['text__auxiliary--empty']}>
        {auxiliaryName ? auxiliaryName : t('fill_product_auxiliary_name')}
      </Text>
      <Flex justify={'space-between'} align={'center'}>
        <Flex justify={'space-between'} align={'center'} columnGap={7}>
          <Text className={prices ? classes.text__auxiliary : classes['text__auxiliary--empty']}>
            {prices ? prices : t('prices')}
          </Text>
          <Text className={classes.text__price}>({t('include_VAT')})</Text>
        </Flex>
        <Flex align={'center'} rowGap={15}>
          <ActionIcon size={18}>
            <AddCircleLightIcon />
          </ActionIcon>
          <Text className={classes.text__count}>1</Text>
          <ActionIcon size={18}>
            <DoNotDisturbLightIcon />
          </ActionIcon>
        </Flex>
      </Flex>
      <OverviewTable />
    </Stack>
  )
}