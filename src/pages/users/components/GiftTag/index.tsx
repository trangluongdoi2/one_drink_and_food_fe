import { Flex, Paper, Image, Stack, Text, Center, Skeleton } from '@mantine/core'
import { DeleteIcon } from '@/assets/icon'
import { useStyles } from './index.style'
import { useFetchOne } from '@/hook/useFetchOne'
import { FIREBASE_COLLECTION } from '@/firebase/collection'

const GiftTag = ({ query }: { query: string }) => {
  const { classes } = useStyles()
  const { data, loading } = useFetchOne(FIREBASE_COLLECTION.GIFTS, query)

  if (!data || loading) {
    return <Skeleton visible={loading} width='100%' height={100}></Skeleton>
  }
  const { item, point, ml, image, type, receivedTime } = data

  return (
    <Paper p={10} shadow='md' sx={{ position: 'relative' }}>
      <Flex className={classes.tag}>
        <Center>
          <Text color='#fff' fw='bold' size={14}>
            -{point} ONE
          </Text>
        </Center>
      </Flex>

      <Flex gap={15} justify='space-between'>
        <Image src={image} width={124} height={124} radius={10} />
        <Stack spacing={2} mt={10} sx={{ minWidth: 150 }}>
          <Text fw='bold' size={14} lh={1.4}>
            {item} <br />
            {ml} ml
          </Text>
          <Text size={12}>{type}</Text>
          <Text size={12}>
            {receivedTime.date} {receivedTime.time}
          </Text>
        </Stack>
        <DeleteIcon />
      </Flex>
    </Paper>
  )
}

export default GiftTag
