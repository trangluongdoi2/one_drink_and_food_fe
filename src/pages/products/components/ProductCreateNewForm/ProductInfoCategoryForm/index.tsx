import { useEffect, useState } from 'react'
import { ActionIcon, Box, Flex, Paper, Text } from '@mantine/core'
import { useStyles } from './index.styles'
import { useTranslation } from 'react-i18next'
import { AppInput } from '@/components/input'
import { ToggleButon } from '@/components/button/ToggleButton'
import { ProductAddImageForm } from '../../ProductAddImageForm'
import { DeleteIcon, EditIconDark, EditIconLight, TableRowsIcon } from '@/assets/icon'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { ProductInfos } from '@/pages/products/type'
import {
  addProductInfo,
  removeProductInfo,
  setContentProductInfo,
  setEnabledProductInfo,
  setPhotosProductInfo,
  setPhotosStoreProductInfo
} from '@/reducer/product/action'

export const ProductInfoCategoryForm = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const { infos, dispatch } = useProductContext()
  const initialProductInfos: ProductInfos = {
    title: '',
    infoPhotos: [],
    infoPhotosStore: [],
    content: '',
    enable: true
  }

  const [listEditableInfos, setListEditableInfos] = useState<boolean[]>(
    Array.from({ length: infos.length }, () => false)
  )

  const toggleActiveUpload = (data: boolean, index: number) => {
    dispatch(setEnabledProductInfo({ data, index }))
  }

  const updateInput = (data: { value: string | number; field: string }, index: number) => {
    dispatch(setContentProductInfo({ data: data.value as string, field: data.field, index }))
  }

  const updateFilePaths = (data: string[], index: number) => {
    dispatch(setPhotosProductInfo({ data, index }))
  }

  const updateFileStores = (data: File[], index: number) => {
    // console.log(data, 'updateFileStores')
    dispatch(setPhotosStoreProductInfo({ data, index }))
  }

  const addProduct = () => {
    dispatch(addProductInfo(initialProductInfos))
  }

  const onEditTitleProductInfo = (value: boolean, index: number) => {
    const listEditable = [...listEditableInfos]
    listEditable[index] = !value
    setListEditableInfos(listEditable)
  }

  const removeProduct = (index: number) => {
    if (infos?.length === 1) {
      return
    }
    dispatch(removeProductInfo(index))
  }

  return (
    <Paper className={`create-new-product-card__container`}>
      {infos?.length &&
        infos.map((info: ProductInfos, index: number) => (
          <Box key={index}>
            <Flex justify={'space-between'} align={'center'} sx={{ marginTop: '15px', marginBottom: '10px' }}>
              <Flex align={'center'} columnGap={12.5}>
                <ActionIcon size={20}>
                  <TableRowsIcon />
                </ActionIcon>
                {listEditableInfos[index] ? (
                  <AppInput
                    placeholder={t('fill_information_of_title')}
                    field='title'
                    updateInput={(event) => updateInput(event, index)}
                    value={info.title}
                    classInput={classes.input__title}
                  />
                ) : (
                  <Text className={classes.topic}>{info.title !== '' ? info.title : t('topic_name')}</Text>
                )}
                <ActionIcon onClick={() => onEditTitleProductInfo(listEditableInfos[index], index)}>
                  {listEditableInfos[index] ? <EditIconDark /> : <EditIconLight />}
                </ActionIcon>
              </Flex>
              <Flex align={'center'}>
                <ToggleButon onToggleStatus={(event) => toggleActiveUpload(event, index)} isActive={info.enable} />
                <ActionIcon onClick={() => removeProduct(index)}>
                  <DeleteIcon />
                </ActionIcon>
              </Flex>
            </Flex>
            <ProductAddImageForm
              updateFilePaths={(event) => updateFilePaths(event, index)}
              updateFileStores={(event) => updateFileStores(event, index)}
              limitQuantity={4}
              hiddenTitle={true}
              isActive={info.enable}
            />
            <AppInput
              title={t('content') as string}
              placeholder={t('fill_information_of_title')}
              field='content'
              updateInput={(event) => updateInput(event, index)}
            />
          </Box>
        ))}
      <ActionIcon className='title-add' onClick={addProduct}>
        <Text>+{t('add_topic')}</Text>
      </ActionIcon>
    </Paper>
  )
}
