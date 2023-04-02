import { ActionIcon, Flex, Paper, Text } from '@mantine/core'
import { useStyles } from './index.styles'
import { TableRows, EditIconLight, DeleteIcon } from '@/assets/icon'

export const ProductPortfolio = ({ title, isBasePortfolio = false }: any) => {
  const { classes } = useStyles()
  const onDeletePorfolio = () => {
    console.log('onDeletePorfolio')
  }
  const onEditPorfolio = () => {
    console.log('onEditPorfolio')
  }
  return (
    <Paper className={classes.container}>
      {isBasePortfolio ? (
        <Flex className={classes.child} align={'center'} justify={'space-between'}>
          <Text fz={18} tt='uppercase' fw={700}>
            + THÊM DANH MỤC MỚI
          </Text>
        </Flex>
      ) : (
        <Flex className={classes.child} align={'center'} justify={'space-between'}>
          <Flex align={'center'} justify={'space-between'} gap={10}>
            <ActionIcon>
              <TableRows />
            </ActionIcon>
            <Text fz={18} tt='uppercase' fw={700}>
              DANH MỤC | {title}
            </Text>
            <ActionIcon onClick={onEditPorfolio}>
              <EditIconLight/>
            </ActionIcon>
          </Flex>
          <ActionIcon onClick={onDeletePorfolio}>
            <DeleteIcon />
          </ActionIcon>
        </Flex>
      )}
    </Paper>
  )
}
