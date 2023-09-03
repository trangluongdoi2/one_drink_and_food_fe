import ImageDropzone from '@/components/form/ImageDropzone'
import ImageMotion from '@/components/form/ImageMotion'
import { AppInput } from '@/components/input'
import { Flex, Paper, Stack } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import CouponHeader from '../CouponHeader'

const CreateCouponForm = () => {
  const { t } = useTranslation()
  return (
    <Paper p={40} radius={10} shadow='md'>
      <CouponHeader title='Thêm hình ảnh' size='sm' />
      <Flex gap={10} justify='flex-start'>
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
        updateInput={() => console.log('aa')}
      />
      <AppInput
        title={t('coupon.discount_events') as string}
        placeholder={t('coupon.title_placeholder')}
        field=''
        isImperative={true}
        hiddenToggleIcon={true}
        updateInput={() => console.log('aa')}
      />
      <AppInput
        title={t('introduction') as string}
        placeholder={t('fill_product_introduction')}
        field=''
        hiddenToggleIcon={true}
        updateInput={() => console.log('aa')}
        typeInput='area'
      />
      <AppInput
        title={t('coupon.code') as string}
        placeholder={t('coupon.code_placeholder')}
        field=''
        isImperative={true}
        hiddenToggleIcon={true}
        updateInput={() => console.log('aa')}
      />
      <AppInput
        title={t('start_date') as string}
        placeholder={t('start_date_placeholder')}
        field=''
        hiddenToggleIcon={true}
        updateInput={() => console.log('aa')}
      />
      <AppInput
        title={t('end_date') as string}
        placeholder={t('end_date_placeholder')}
        field=''
        hiddenToggleIcon={true}
        updateInput={() => console.log('aa')}
      />
      <AppInput
        title={t('coupon.value') as string}
        placeholder={t('coupon.quantity_placeholder')}
        field=''
        hiddenToggleIcon={true}
        updateInput={() => console.log('aa')}
        typeInput='number'
      />
      <AppInput
        title={t('coupon.quantity') as string}
        placeholder={t('coupon.quantity_placeholder')}
        field=''
        hiddenToggleIcon={true}
        updateInput={() => console.log('aa')}
      />
    </Paper>
  )
}

export default CreateCouponForm
