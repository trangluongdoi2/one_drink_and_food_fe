import { Flex, Paper, Text } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { useStyles } from './AddCouponTag.style'
import { useNavigate } from 'react-router-dom'

const AddCouponTag = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()

  return (
    <Paper p={10} shadow='md' maw={374} className={classes.container} onClick={() => navigate('create')}>
      <Flex justify='center' align='center' h='100%'>
        <IconPlus size={60} />
        <Text size='sm'>Thêm mã khuyến mãi</Text>
      </Flex>
    </Paper>
  )
}

export default AddCouponTag
