import CouponTag from '@/components/CouponTags'
import { prettyDate } from '@/utils/convertDate'
import { Button, Divider, Paper, Stack, Text, TypographyStylesProvider } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useCreateCouponFormContext } from '../../form'
import CouponHeader from '../CouponHeader'
import { FC } from 'react'

type TPreviewCouponProps = {
  type: 'edit' | 'create'
}

export const PreviewCoupon: FC<TPreviewCouponProps> = ({ type }) => {
  const { values, isDirty } = useCreateCouponFormContext()
  const { t } = useTranslation()
  const isEdit = type === 'edit'

  return (
    <Paper p={40} radius={10} shadow='md'>
      <Stack spacing={20}>
        <CouponHeader title='Giao diện hiển thị xem trước' size='sm' />
        <CouponTag data={values} label='Lưu mã' />

        <Divider />

        <Text fw='bold' size={24} lineClamp={1} tt='uppercase'>
          {values.title || '[TIÊU ĐỀ CHÍNH]'}
        </Text>

        <Text lineClamp={3}>
          <TypographyStylesProvider pt={0}>
            <Stack spacing={10}>
              <Text fw='bold' size='lg'>
                {values.name || '[CHƯƠNG TRÌNH KHUYẾN MÃI]'}
              </Text>
              <div dangerouslySetInnerHTML={{ __html: values.description || '[Giới thiệu]' }} />
            </Stack>
          </TypographyStylesProvider>
        </Text>

        <Text size='sm'>
          {t('coupon.code')}: {values.code || '[MÃ CODE]'}
        </Text>

        <Text size='xs'>
          {t('expired_date')}: {prettyDate(values.startDate)} - {prettyDate(values.endDate)}
        </Text>

        <Button radius={20} color='dark' type='submit' disabled={!isDirty()}>
          {isEdit ? t('coupon.update') : t('coupon.add')}
        </Button>
      </Stack>
    </Paper>
  )
}
