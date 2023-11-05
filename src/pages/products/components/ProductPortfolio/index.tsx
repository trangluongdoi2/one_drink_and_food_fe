import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ActionIcon, Flex, Paper, Text } from '@mantine/core'
import { ProductType, TCategoryCreate } from '@/pages/products/type'
import { TableRowsIcon, EditIconLight, DeleteIcon } from '@/assets/icon'
import { useCategoryCreateMutation } from '@/pages/products/query/category'
import CategoryApi from '@/pages/products/api/category'
import { ProductCategoryAddFormModal } from '../ProductCategoryAddFormModal'
import { useStyles } from './index.styles'

type ProductPorfolioProps = {
  title?: string
  isBasePortfolio?: boolean
}

export const ProductPortfolio = ({ title, isBasePortfolio = false }: ProductPorfolioProps) => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const { productType } = useParams()
  const categoryApi = new CategoryApi()
  const { mutate, isLoading } = useCategoryCreateMutation({})
  const [categoryForm, setCategoryForm] = useState<TCategoryCreate>({
    productType: productType as any,
    order: 0,
    name: ''
  })
  const [visible, setVisible] = useState<boolean>(false)
  const [errorNotify, setErrorNotify] = useState<string>('')

  const onDeletePorfolio = () => {
    console.log('onDeletePorfolio')
  }

  const onEditPorfolio = () => {
    console.log('onEditPorfolio')
  }

  const checkExistCategoryByProductType = async () => {
    const categoryData = await categoryApi.findByProductType(productType as any)
    if (categoryData?.length) {
      return !!categoryData.find((item: any) => item.name === categoryForm.name)
    }
    return false
  }

  const onUpdateInput = (data: { field: string; value: string | number }) => {
    setErrorNotify('')
    if (data.field === 'product-sub-type') {
      setCategoryForm({
        ...categoryForm,
        name: data.value as string
      })
      return
    }
    setCategoryForm({
      ...categoryForm,
      order: 0
    })
  }

  const addNewCategory = async () => {
    const isExistCategory = await checkExistCategoryByProductType()
    if (isExistCategory) {
      setErrorNotify(t('exist_product_category') as string)
      return
    }
    mutate(categoryForm)
  }

  const onCloseModal = (status: boolean) => {
    setVisible(status)
  }

  const onOpenAddCategoryModal = () => {
    setVisible(true)
  }

  useEffect(() => {
    if (!isLoading) {
      setVisible(false)
    }
  }, [isLoading])

  return (
    <Paper className={classes.container}>
      {isBasePortfolio ? (
        <Flex className={classes.child} align={'center'} justify={'space-between'}>
          <ActionIcon sx={{ width: '100%', justifyContent: 'flex-start' }} onClick={onOpenAddCategoryModal}>
            <Text fz={18} fw={700} tt='uppercase' color='#000000'>
              + {t('add_new_category')}
            </Text>
          </ActionIcon>
          <ProductCategoryAddFormModal
            visible={visible}
            productType={productType as ProductType}
            isProcessing={isLoading}
            errorNotify={errorNotify}
            updateInput={onUpdateInput}
            confirmAddNewCategory={addNewCategory}
            cancel={onCloseModal}
          />
        </Flex>
      ) : (
        <Flex className={classes.child} align={'center'} justify={'space-between'}>
          <Flex align={'center'} justify={'space-between'} gap={10}>
            <ActionIcon>
              <TableRowsIcon />
            </ActionIcon>
            <Text fz={18} fw={700}>
              {t('category')} | {title}
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
