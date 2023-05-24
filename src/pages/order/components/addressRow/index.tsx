import { Grid, Text } from '@mantine/core'
import { useStyles } from './index.style'

interface IAddressRowProps {
  title: string
  content: string
}

const AddressRow = ({ title, content }: IAddressRowProps) => {
  const { classes } = useStyles()
  return (
    <Grid w='100%' gutter={2} columns={6}>
      <Grid.Col span={2} className={classes.title}>
        <Text>{title}</Text>
      </Grid.Col>
      <Grid.Col span={4} className={classes.content}>
        <Text>{content}</Text>
      </Grid.Col>
    </Grid>
  )
}
export default AddressRow
