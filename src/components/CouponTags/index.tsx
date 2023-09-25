import { DeleteIcon } from '@/assets/icon'
import { TCouponType } from '@/types/coupon'
import { prettyDate } from '@/utils/convertDate'
import { ActionIcon, Divider, Flex, Image, Paper, Skeleton, Stack, Text } from '@mantine/core'
import { useStyles } from './CouponTags.style'

type TCouponTagProps = {
  data: Pick<TCouponType, 'code' | 'name' | 'image' | 'endDate'>
  loading?: boolean
  label?: string
  onDelete?: () => void
  onClick?: () => void
}

const CouponTag = ({ data, loading = false, label, onDelete, onClick }: TCouponTagProps) => {
  const { classes } = useStyles()
  if (loading) {
    return <Skeleton visible={loading} width='100%' height={100} className={classes.container} />
  }

  const { image, name, endDate, code } = data

  return (
    <Paper className={classes.container}>
      {label && (
        <Flex className={classes.tag} justify='center' align='center' onClick={onClick}>
          <Text color='#fff' fw='bold' size={14}>
            {label}
          </Text>
        </Flex>
      )}
      <Flex justify='flex-start'>
        <Flex gap={10} justify='flex-start'>
          <Image src={image} width={100} height={100} radius={10} />
          <Divider variant='dashed' size={2} orientation='vertical' />
          <Stack spacing={3} mt={10} maw={200}>
            <Text fw='bold' lh={1.4} className={classes.text}>
              {name ?? ''}
            </Text>
            <Text size={14}>MÃ : {code}</Text>
            {endDate && <Text size={12}>Đến: {prettyDate(endDate)}</Text>}
          </Stack>
        </Flex>
        {onDelete && (
          <ActionIcon onClick={onDelete}>
            <DeleteIcon />
          </ActionIcon>
        )}
      </Flex>
    </Paper>
  )
}

export default CouponTag
