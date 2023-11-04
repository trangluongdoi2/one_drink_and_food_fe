import { useTranslation } from 'react-i18next'
import { ActionIcon, Box, createStyles, Flex, Image, Slider, Stack, Text } from '@mantine/core'
import barcodeBackground from '@/assets/image/barcode-background.png'
import { OneAdminIcon, ThumbSliderIcon } from '@/assets/icon'
import JsBarcode from 'jsbarcode'
import { useEffect } from 'react'

const useStyles = createStyles(() => ({
  container: {
    background: '#fffffff',
    width: '414px',
    height: '414px'
  },
  'container__bar-code': {
    borderRadius: '10px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
  },
  'bar-code': {
    padding: '20px',
    position: 'relative'
  },
  'bar-code__card': {
    position: 'absolute',
    top: '37px',
    left: '40px'
  },
  'bar-code__ticker': {
    position: 'absolute',
    top: '21px',
    right: '21px',
    background: 'linear-gradient(270deg, #000000 0%, #434343 100%)',
    width: '120px',
    height: '35px',
    borderBottomLeftRadius: '10px',
    borderTopRightRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontWeight: 700,
    lineHeight: '17px',
    fintSize: '14px'
  },
  'bar-code__image': {
    scale: '1.1'
  },
  'bar-code--generate': {
    position: 'absolute',
    left: '40px',
    bottom: '40px',
    width: '334px',
    height: '100px',
    background: '#f5f5f5',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  'bar-code__slider': {
    padding: '0 20px',
    height: '10px'
  },
  'bar-code__member-name': {
    color: '#ffffff',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '24px'
  },
  text: {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '15px'
  },
  text_fade: {
    color: '#c4c4c4'
  }
}))

export const MemberBarCode = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()

  useEffect(() => {
    JsBarcode('#barcode', 'M1616382949', {
      height: 45,
      background: '#f5f5f5'
    })
  }, [])
  return (
    <Box className={classes.container}>
      <Stack className={classes['container__bar-code']} spacing={0}>
        <Box className={classes['bar-code']}>
          <Image
            width={374}
            height={232}
            src={barcodeBackground}
            withPlaceholder
            className={classes['bar-code__image']}
          />
          <Box className={classes['bar-code__card']}>
            <Text className={classes['bar-code__member-name']}>Tín Nguyễn</Text>
            <Flex align={'center'} justify={'flex-start'}>
              <OneAdminIcon />
              <Text
                style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  lineHeight: '20px',
                  color: '#ffffff',
                  paddingLeft: '8px'
                }}
              >
                200 ONE
              </Text>
            </Flex>
            <Text className={classes.text}>({t('current_points')})</Text>
          </Box>
          <Box className={classes['bar-code__ticker']}>
            <Text>{t('accumulate_points')}</Text>
          </Box>
          <Box className={classes['bar-code--generate']}>
            <svg id='barcode' width={260} height={45}></svg>
          </Box>
        </Box>
        <Slider
          value={70}
          className={classes['bar-code__slider']}
          color='dark'
          thumbChildren={
            <ActionIcon size={60}>
              <ThumbSliderIcon />
            </ActionIcon>
          }
        />
        <Flex align={'center'} justify={'space-between'} ml={20} mr={20} mt={10}>
          <Text className={classes.text}>{t('total_points')}</Text>
          <Text className={classes.text}>700/1000</Text>
        </Flex>
        <Flex align={'center'} justify={'space-between'} ml={20} mr={20} mt={10}>
          <Text className={`${classes.text} ${classes.text_fade}`}>{t('used')}</Text>
          <Text className={`${classes.text} ${classes.text_fade}`}>{t('not_enough_points')}</Text>
        </Flex>
        <Flex align={'center'} justify={'center'} direction={'column'} mt={20} mb={30}>
          <Text style={{ fontSize: '14px', fontWeight: '700', textTransform: 'capitalize', lineHeight: '17px' }}>
            Tích điểm ONE để thăng hạng
          </Text>
          <Text style={{ fontSize: '10px', fontWeight: '400', textTransform: 'capitalize', lineHeight: '14px' }}>
            Dùng ONE để quy đổi các phần quà & ưu đãi hấp dẫn!
          </Text>
        </Flex>
      </Stack>
      <Stack spacing={0} display={'flex'} align={'center'} mt={30}>
        <Text className={classes.text}>Điểm được tích từ điểm danh: 200</Text>
        <Text className={classes.text}>Điểm được tích từ mua hàng: 500</Text>
      </Stack>
    </Box>
  )
}
