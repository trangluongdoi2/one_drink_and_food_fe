import { Anchor, Breadcrumbs, Flex, Paper, Stack, Text } from '@mantine/core'
import { ProductPortfolio } from '../../components/ProductPortfolio'
import { ProductGrid } from '../../components/ProductGrid'
import { useStyles } from './index.styles'
import { ProductTypeEnum, JuiceType } from '@/pages/products/type'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

export const ProductJuiceGrid = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const splitPath = useLocation().pathname.split('/')
  const items = [
    { title: t(ProductTypeEnum.JUICE), href: `products/${ProductTypeEnum.JUICE}`, currentPath: ProductTypeEnum.JUICE }
  ].map((item, index) => (
    <Anchor
      href={item.href}
      key={index}
      sx={{ color: splitPath[splitPath.length - 1] === item.currentPath ? '#000000' : '' }}
    >
      {item.title}
    </Anchor>
  ))
  return (
    <Paper className={classes.container}>
      <Breadcrumbs className={classes.containerText}>{items}</Breadcrumbs>
      <Stack spacing={20}>
        <ProductPortfolio isBasePortfolio={true} />
        <Flex direction={'column'} gap={20}>
          <ProductGrid title={JuiceType.JUICE_GLASS} productSubType={JuiceType.JUICE_GLASS} />
          <ProductGrid title={JuiceType.JUICE_BOTTLED} productSubType={JuiceType.JUICE_BOTTLED} />
        </Flex>
      </Stack>
    </Paper>
  )
}
