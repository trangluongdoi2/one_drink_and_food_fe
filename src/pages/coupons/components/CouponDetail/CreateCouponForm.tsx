import ImageDropzone from '@/components/form/ImageDropzone'
import ImageMotion from '@/components/form/ImageMotion'
import { AppInput } from '@/components/input'
import { Flex, Paper } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useCreateCouponFormContext } from '../../form'
import CouponHeader from '../CouponHeader'

export const CreateCouponForm = () => {
  const { t } = useTranslation()
  const { values, setValues } = useCreateCouponFormContext()

  return (
    <Paper p={40} radius={10} shadow='md'>
      <CouponHeader title='Thêm hình ảnh' size='sm' />
      <Flex gap={10} justify='flex-start' w='100%' wrap='wrap' mt={20}>
        <ImageDropzone />
        <ImageDropzone />
        <ImageDropzone />
        <ImageDropzone />
      </Flex>
      <ImageMotion
        motionValue={10}
        onMotionChange={() => console.log('')}
        active={false}
        onChangeActive={() => console.log('aaa')}
      />
      <AppInput
        title={t('coupon.main_title') as string}
        placeholder={t('coupon.title_placeholder')}
        field=''
        isImperative={true}
        hiddenToggleIcon={true}
        updateInput={(data) => setValues({ title: data.value as string })}
        value={values.title}
      />
      <AppInput
        title={t('coupon.discount_events') as string}
        placeholder={t('coupon.title_placeholder')}
        field=''
        isImperative={true}
        hiddenToggleIcon={true}
        value={values.name}
        updateInput={(data) => setValues({ name: data.value as string })}
      />
      <AppInput
        title={t('introduction') as string}
        placeholder={t('fill_product_introduction')}
        field=''
        hiddenToggleIcon={true}
        updateInput={(data) => setValues({ description: data.value as string })}
        typeInput='area'
      />
      <AppInput
        title={t('coupon.code') as string}
        placeholder={t('coupon.code_placeholder')}
        field=''
        isImperative={true}
        hiddenToggleIcon={true}
        value={values.code}
        updateInput={(data) => setValues({ code: data.value as string })}
      />
      <AppInput
        title={t('start_date') as string}
        placeholder={t('start_date_placeholder')}
        field=''
        hiddenToggleIcon={true}
        value={values.endDate}
        updateInput={(data) => setValues({ startDate: data.value as string })}
      />
      <AppInput
        title={t('end_date') as string}
        placeholder={t('end_date_placeholder')}
        field=''
        hiddenToggleIcon={true}
        value={values.endDate}
        updateInput={(data) => setValues({ endDate: data.value as string })}
      />
      <AppInput
        title={t('coupon.value') as string}
        placeholder={t('coupon.quantity_placeholder')}
        field=''
        hiddenToggleIcon={true}
        value={values.value}
        updateInput={(data) => setValues({ value: data.value as number })}
        typeInput='number'
      />
      <AppInput
        title={t('coupon.quantity') as string}
        placeholder={t('coupon.quantity_placeholder')}
        field=''
        hiddenToggleIcon={true}
        value={values.maxUsesPerUser}
        updateInput={(data) => setValues({ maxUsesPerUser: data.value as number })}
      />
    </Paper>
  )
}
