import { CustomInput } from '@/components/form/CustomInput'
import CurrencyLabel from '@/components/form/CustomInput/CurrencyLabel'
import ImageDropzone from '@/components/form/ImageDropzone'
import ImageMotion from '@/components/form/ImageMotion'
import { Flex, Paper } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useCreateCouponFormContext } from '../../form'
import CouponHeader from '../CouponHeader'

export const CreateCouponForm = () => {
  const { t } = useTranslation()
  const { values, setValues, getInputProps } = useCreateCouponFormContext()

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
      <CustomInput
        title={t('coupon.main_title')}
        placeholder={t('coupon.title_placeholder')}
        isImperative
        hiddenToggleIcon
        {...getInputProps('title')}
      />

      <CustomInput
        title={t('coupon.discount_events')}
        placeholder={t('coupon.title_placeholder')}
        isImperative
        hiddenToggleIcon
        {...getInputProps('name')}
      />

      <CustomInput
        title={t('introduction')}
        placeholder={t('fill_product_introduction')}
        typeInput='area'
        {...getInputProps('description')}
      />
      <CustomInput
        title={t('coupon.code')}
        placeholder={t('coupon.code_placeholder')}
        isImperative
        hiddenToggleIcon
        {...getInputProps('code')}
      />
      <CustomInput
        title={t('start_date')}
        placeholder={t('start_date_placeholder')}
        hiddenToggleIcon
        {...getInputProps('startDate')}
        value={values.startDate ?? ''}
      />
      <CustomInput
        title={t('end_date')}
        placeholder={t('end_date_placeholder')}
        hiddenToggleIcon
        {...getInputProps('endDate')}
        value={values.endDate ?? ''}
      />
      <CustomInput
        title={t('coupon.value')}
        placeholder={t('coupon.quantity_placeholder')}
        hiddenToggleIcon
        typeInput='number'
        rightSection={<CurrencyLabel type={values.type} onChange={(value) => setValues({ type: value })} />}
        rightSectionWidth={100}
        {...getInputProps('value')}
      />
      <CustomInput
        title={t('coupon.quantity') as string}
        placeholder={t('coupon.quantity_placeholder')}
        hiddenToggleIcon
        typeInput='number'
        {...getInputProps('maxUsesPerUser')}
      />
    </Paper>
  )
}
