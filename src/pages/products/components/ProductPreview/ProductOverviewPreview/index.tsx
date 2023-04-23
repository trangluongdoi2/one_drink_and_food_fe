import { ActionIcon, Flex, Stack, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { AddCircleLightIcon, DoNotDisturbLightIcon } from '@/assets/icon'
import { useStyles } from './index.styles'
import { OverviewTable } from './OverviewTable'

export const ProductOverviewPreview = () => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  return (
    <Stack className={classes.container} spacing={0}>
      <Text className={classes['text__name--empty']}>{t('product_name')}</Text>
      <Text className={classes['text__auxiliary--empty']}>{t('fill_product_auxiliary_name')}</Text>
      <Flex justify={'space-between'} align={'center'}>
        <Flex justify={'space-between'} align={'center'} columnGap={7}>
          <Text className={classes['text__auxiliary--empty']}>{t('prices')}</Text>
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