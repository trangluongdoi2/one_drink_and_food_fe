import { notify } from '@/utils/notification'
import { Paper, SimpleGrid, Stack } from '@mantine/core'
import { isNotEmpty } from '@mantine/form'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { CreateCouponForm, PreviewCoupon } from '../../components/CouponDetail'
import CouponHeader from '../../components/CouponHeader'
import { CreateCouponFormProvider, defaultCoupon, useCreateCouponForm } from '../../form'
import { useCreateCoupon, useGetCoupon, useUpdateCoupon } from '../../services/hook'

type TAddCouponDetailProps = {
  type?: 'edit' | 'create'
}

const AddCouponDetail: FC<TAddCouponDetailProps> = ({ type = 'create' }) => {
  const [active, setActive] = useState<boolean>(false)
  const { id } = useParams()
  const { t } = useTranslation()
  const form = useCreateCouponForm({
    initialValues: defaultCoupon,
    validateInputOnBlur: true,
    validate: {
      title: isNotEmpty(t('notEmpty')),
      name: isNotEmpty(t('notEmpty')),
      code: isNotEmpty(t('notEmpty'))
    }
  })
  const couponMutation = useCreateCoupon()
  const updateCouponMutation = useUpdateCoupon()
  const { data } = useGetCoupon({
    page: 1,
    limit: 10,
    sort: 'title'
  })

  const handleAddSubmit = async () => {
    const dataSend = {
      ...form.values,
      startDate: new Date(form.values.startDate ?? '').toISOString(),
      endDate: new Date(form.values.endDate ?? '').toISOString()
    }

    await couponMutation.mutateAsync(dataSend, {
      onSuccess: () => notify({ message: t('message.coupon.createSuccess') }),
      onError: () => notify({ message: t('message.coupon.createFailed') })
    })
  }

  const handleUpdateSubmit = async () => {
    const dataSend = {
      ...form.values,
      startDate: new Date(form.values.startDate ?? '').toISOString(),
      endDate: new Date(form.values.endDate ?? '').toISOString()
    }

    await updateCouponMutation.mutateAsync(
      { params: dataSend, id: id ?? '' },
      {
        onSuccess: () => notify({ message: t('message.coupon.updateSuccess') }),
        onError: () => notify({ message: t('message.coupon.updateFailed') })
      }
    )
  }

  useEffect(() => {
    if (type === 'edit' && data && data.length) {
      const selectedCoupon = data.find((coupon) => coupon._id === id)
      form.setValues({ ...selectedCoupon })
    }
    form.resetDirty()
  }, [data])

  return (
    <CreateCouponFormProvider form={form}>
      <form onSubmit={form.onSubmit(type === 'edit' ? handleUpdateSubmit : handleAddSubmit)}>
        <Paper p={40} sx={(theme) => ({ backgroundColor: theme.colors.dark[0], zIndex: 1 })}>
          <Stack spacing={20}>
            <CouponHeader
              title={t('coupon.add')}
              withToolbar
              active={active}
              onActive={(value) => {
                setActive(value)
                form.setValues({ isActive: value })
              }}
            />

            <SimpleGrid cols={2} spacing={20}>
              <CreateCouponForm />
              <PreviewCoupon type={type} />
            </SimpleGrid>
          </Stack>
        </Paper>
      </form>
    </CreateCouponFormProvider>
  )
}

export default AddCouponDetail
