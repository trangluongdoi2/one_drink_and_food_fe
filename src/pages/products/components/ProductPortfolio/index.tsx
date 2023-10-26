import { ActionIcon, Flex, Paper, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { TableRowsIcon, EditIconLight, DeleteIcon } from '@/assets/icon'
import { useStyles } from './index.styles'

type ProductPorfolioProps = {
  title?: string
  isBasePortfolio?: boolean
}

export const ProductPortfolio = ({ title, isBasePortfolio = false }: ProductPorfolioProps) => {
  const { classes } = useStyles()
  const { t } = useTranslation()

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
          <ActionIcon sx={{ width: '100%', justifyContent: 'flex-start' }}>
            <Text fz={18} fw={700} tt='uppercase' color='#000000'>
              + {t('add_new_category')}
            </Text>
          </ActionIcon>
        </Flex>
      ) : (
        <Flex className={classes.child} align={'center'} justify={'space-between'}>
          <Flex align={'center'} justify={'space-between'} gap={10}>
            <ActionIcon>
              <TableRowsIcon />
            </ActionIcon>
            <Text fz={18} fw={700}>
              {t('category')} | {t(title as string)}
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
