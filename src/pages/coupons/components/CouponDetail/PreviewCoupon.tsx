import CouponTag from '@/components/CouponTags'
import {
  Box,
  Button,
  Center,
  Divider,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
  TypographyStylesProvider
} from '@mantine/core'
import { useCreateCouponFormContext } from '../../form'
import CouponHeader from '../CouponHeader'
import { useTranslation } from 'react-i18next'
import { prettyDate } from '@/utils/convertDate'
import { ButtonGroup } from '@mantine/core/lib/Button/ButtonGroup/ButtonGroup'

export const PreviewCoupon = () => {
  const { values } = useCreateCouponFormContext()
  const { t } = useTranslation()

  return (
    <Stack spacing={55}>
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
            {t('expired_date')}: {values.startDate} - {values.endDate}
          </Text>

          <Button radius={20} color='dark'>
            Thêm mã khuyến mãi
          </Button>
        </Stack>
      </Paper>
      <Paper p={40} radius={10} shadow='md'>
        <Stack spacing={10}>
          <Center>
            <CouponHeader title='CÓ 2 ĐƠN VỊ GIẢM GIÁ' size='sm' />
          </Center>
          <Text size='sm' fw='bold' mt={20}>
            Giá trị khuyến mãi
          </Text>
          <Stack spacing={20}>
            <TextInput
              placeholder='0'
              rightSectionWidth={90}
              rightSection={
                <Button.Group>
                  <Button color='dark.1' sx={{ color: 'black' }}>
                    Đ
                  </Button>
                  <Button color='dark.0' sx={{ color: 'black' }} variant='outlined'>
                    %
                  </Button>
                </Button.Group>
              }
            />
            <TextInput
              placeholder='0.0000'
              rightSectionWidth={90}
              rightSection={
                <Button.Group>
                  <Button color='dark.0' sx={{ color: 'black' }} variant='outlined'>
                    Đ
                  </Button>
                  <Button color='dark.1' sx={{ color: 'black' }}>
                    %
                  </Button>
                </Button.Group>
              }
            />
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  )
}
