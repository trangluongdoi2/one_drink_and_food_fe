import { ActionIcon, Flex, Paper, Text } from '@mantine/core'
import { useStyles } from './index.styles'
import { TableRowsIcon, EditIconLight, DeleteIcon } from '@/assets/icon'
import { JuiceType } from '@/pages/products/type'

type ProductPorfolioProps = {
  title?: string
  isBasePortfolio?: boolean
}

export const ProductPortfolio = ({ title, isBasePortfolio = false }: ProductPorfolioProps) => {
  const { classes } = useStyles()

  const convertTitle = (title: string) => {
    switch (title) {
      case JuiceType.JUICE_BOTTLED:
        return 'Nước ép đóng chai'
      case JuiceType.JUICE_GLASS:
        return 'Nước ép ly'
    }
  }

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
              <TableRowsIcon />
            </ActionIcon>
            <Text fz={18} fw={700}>
              DANH MỤC | {convertTitle(title as string)}
            </Text>
            <ActionIcon onClick={onEditPorfolio}>
              <EditIconLight />
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
