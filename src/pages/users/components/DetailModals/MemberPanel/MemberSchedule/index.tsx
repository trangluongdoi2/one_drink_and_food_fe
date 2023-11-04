import { Box, Button, Divider, Flex, Grid, Image, Stack, Text, createStyles } from '@mantine/core'
import memberBackground from '@/assets/image/member-background.png'
import fruit from '@/assets/image/fruit.png'
import fruit1 from '@/assets/image/monday-fruit.png'
import fruit2 from '@/assets/image/tuesday-fruit.png'
import fruit3 from '@/assets/image/wednesday-fruit.png'
import fruit4 from '@/assets/image/thursday-fruit.png'
import fruit5 from '@/assets/image/friday-fruit.png'
import fruit6 from '@/assets/image/saturday-fruit.png'
import fruit7 from '@/assets/image/sunday-fruit.png'
import { useTranslation } from 'react-i18next'
import { ChevronLeftIcon, ChevronRightIcon } from '@/assets/icon'

const useStyles = createStyles(() => ({
  container: {
    position: 'relative'
  },
  schedule: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '40px'
  },
  schedule__card: {
    width: '100px',
    height: '100px',
    background: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
  },
  'schedule__card--last': {
    height: '100px',
    width: '100%'
  },
  'text--bold': {
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '17px'
  },
  button: {
    background: '#ffffff',
    borderRadius: '10px',
    width: '40px',
    height: '40px',
    '&:hover': {
      background: '#ffffff !important'
    }
  },
  icon: {
    marginRight: '-5px'
  }
}))
export const MemberSchedule = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const scheduleData = [
    {
      label: t('monday'),
      date: '10/4/2023',
      plus: 10,
      src: fruit1
    },
    {
      label: t('tuesday'),
      date: '11/4/2023',
      plus: 10,
      src: fruit2
    },
    {
      label: t('wednesday'),
      date: '12/4/2023',
      plus: 10,
      src: fruit3
    },
    {
      label: t('thursday'),
      date: '13/4/2023',
      plus: 10,
      src: fruit4
    },
    {
      label: t('friday'),
      date: '14/4/2023',
      plus: 10,
      src: fruit5
    },
    {
      label: t('saturday'),
      date: '15/4/2023',
      plus: 10,
      src: fruit6
    },
    {
      label: t('sunday'),
      date: '16/4/2023',
      plus: 10,
      src: fruit7
    }
  ]
  return (
    <Box className={classes.container}>
      <Image width={414} height={668} src={memberBackground} withPlaceholder style={{ scale: '1.1', zIndex: '-1' }} />
      <Box className={classes.schedule}>
        <Flex align={'center'} justify={'space-between'}>
          <Stack>
            <Text style={{ fontSize: '18px', fontWeight: '700', lineHeight: '24px', textTransform: 'uppercase' }}>
              Tuần mới bắt đầu
            </Text>
            <Text className={classes['text--bold']}>Từ 10/4 - 16/4</Text>
            <Text className={classes['text--bold']}>Chào Tín</Text>
          </Stack>
          <Image width={107} height={117} src={fruit}></Image>
        </Flex>
        <Text pb={20} pt={40} style={{ fontSize: '12px', lineHeight: '18px' }}>
          Hãy chăm chỉ điểm danh mỗi ngày để tích điểm nhận quà nhé
        </Text>
        <Grid grow>
          {scheduleData.map((item: any, index: number) => (
            <Grid.Col key={index} span={3}>
              <Box
                className={`${classes.schedule__card} ${
                  index === scheduleData.length - 1 ? classes['schedule__card--last'] : ''
                }`}
              >
                <Stack spacing={0}>
                  <Stack
                    spacing={0}
                    display={'flex'}
                    justify={'center'}
                    align={'center'}
                    style={{ background: '#E5E5E5', borderRadius: '10px 10px 0 0', padding: '6px' }}
                  >
                    <Text className={classes['text--bold']}>{item.label}</Text>
                    <Text style={{ fontSize: '10px', fontWeight: '400', lineHeight: '12px' }}>{item.date}</Text>
                  </Stack>
                  {index === scheduleData.length - 1 ? (
                    <Flex align={'center'} justify={'center'} p={'10px'} style={{ height: '60px' }}>
                      <Flex align={'center'} justify={'space-between'} mr={20}>
                        <Image
                          src={item.src}
                          width={'80%'}
                          height={'80%'}
                          style={{ maxWidth: '30px', maxHeight: '30px' }}
                        />
                        <Stack spacing={0}>
                          <Text className={classes['text--bold']}>+{item.plus}</Text>
                          <Text className={classes['text--bold']}>ONE</Text>
                        </Stack>
                      </Flex>
                      <Divider orientation={'vertical'} color='dark' />
                      <Text
                        style={{
                          fontSize: '14px',
                          fontWeight: '700',
                          lineHeight: '24px',
                          textTransform: 'uppercase',
                          overflowWrap: 'normal',
                          width: '119px',
                          marginLeft: '14px'
                        }}
                      >{`Cuối tuần vẫn chăm chỉ <3`}</Text>
                    </Flex>
                  ) : (
                    <Flex align={'center'} justify={'space-between'} p={'13px 14px'}>
                      <Image
                        src={item.src}
                        width={'80%'}
                        height={'80%'}
                        style={{ maxWidth: '30px', maxHeight: '30px' }}
                      />
                      <Stack spacing={0}>
                        <Text className={classes['text--bold']}>+{item.plus}</Text>
                        <Text className={classes['text--bold']}>ONE</Text>
                      </Stack>
                    </Flex>
                  )}
                </Stack>
              </Box>
            </Grid.Col>
          ))}
          <Grid.Col>
            <Flex justify={'space-around'} align={'center'}>
              <Button
                className={classes.button}
                leftIcon={<ChevronLeftIcon />}
                classNames={{ leftIcon: classes.icon }}
              />
              <Text align={'center'} style={{ fontSize: '12px', lineHeight: '18px' }} p={'0 16px'}>
                Xem lịch hằng ngày để cập nhập các thông tin ưu đãi mới
              </Text>
              <Button
                className={classes.button}
                leftIcon={<ChevronRightIcon />}
                classNames={{ leftIcon: classes.icon }}
              />
            </Flex>
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  )
}
