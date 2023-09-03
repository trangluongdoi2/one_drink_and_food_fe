import { DeleteIcon } from '@/assets/icon'
import { TCouponType } from '@/types/coupon'
import { Divider, Flex, Image, Paper, Skeleton, Stack, Text } from '@mantine/core'
import { useStyles } from './CouponTags.style'

type TCouponTagProps = {
  data: TCouponType
  loading: boolean
  label?: string
}

const CouponTag = ({ data, loading, label }: TCouponTagProps) => {
  const { classes } = useStyles()
  if (loading) {
    return <Skeleton visible={loading} width='100%' height={100} className={classes.container} />
  }

  const { image, couponTitle, couponEndDate, couponCode } = data

  return (
    <Paper p={10} shadow='md' className={classes.container}>
      {label && (
        <Flex className={classes.tag} justify='center' align='center'>
          <Text color='#fff' fw='bold' size={14}>
            {label}
          </Text>
        </Flex>
      )}
      <Flex justify='space-between'>
        <Flex gap={10} justify='flex-start'>
          <Image src={image} width={100} height={100} radius={10} />
          <Divider variant='dashed' size={2} orientation='vertical' />
          <Stack spacing={3} mt={10} sx={{ maxWidth: 200 }} justify='flex-start'>
            <Text fw='bold' lh={1.4}>
              {couponTitle ?? ''}
            </Text>
            <Text size={14}>MÃ : {couponCode}</Text>
            {couponEndDate && <Text size={12}>Đến: {couponEndDate}</Text>}
          </Stack>
        </Flex>
        <DeleteIcon />
      </Flex>
    </Paper>
  )
}

export default CouponTag
