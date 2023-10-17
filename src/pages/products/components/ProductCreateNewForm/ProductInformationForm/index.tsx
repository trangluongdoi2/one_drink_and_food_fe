import { useEffect, useState } from 'react'
import { ActionIcon, Box, Flex, Paper, Text } from '@mantine/core'
import { useStyles } from './index.styles'
import { useTranslation } from 'react-i18next'
import { AppInput } from '@/components/input'
import { ToggleButon } from '@/components/button/ToggleButton'
import { ProductAddImageForm } from '../../ProductAddImageForm'
import { DeleteIcon, EditIconDark, EditIconLight, TableRowsIcon } from '@/assets/icon'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { TProductCreateNewInformation, TProductInformationContent } from '@/pages/products/type'
import {
  setTitleProductInfoItem,
  setAppearProductInfoItem,
  updateInfoItemsInProductInfo,
  removeProductInfoItem,
  setPhotosProductInfo,
  setPhotosStoreProductInfo
} from '@/reducer/product/action'
import { clone } from 'lodash'

type Props = {
  infoItem: TProductCreateNewInformation
  index: number
}
export const ProductInformationForm = ({ infoItem, index }: Props) => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const { dispatch } = useProductContext()

  const [editableInfo, setEditable] = useState<boolean>(false)
  const [listEditableTopic, setListEditableTopic] = useState<boolean[]>(
    // @ts-ignore
    infoItem.informationItems?.map(() => false)
  )

  const setEnabled = (data: boolean) => {
    dispatch(setAppearProductInfoItem({ data, index }))
  }

  const updateNameTopic = (data: string, i = 0) => {
    const cloneInformationItems = clone(infoItem.informationItems) ?? []
    if (cloneInformationItems?.length) {
      // @ts-ignore
      cloneInformationItems[i].topicName = data
    }
    console.log(cloneInformationItems, 'cloneInformationItems.....')
    dispatch(updateInfoItemsInProductInfo({ data: cloneInformationItems, index }))
  }

  const updateTextTopic = (data: string, i = 0) => {
    const cloneInformationItems = clone(infoItem.informationItems) ?? []
    if (cloneInformationItems?.length) {
      cloneInformationItems[i].text = data
    }
    dispatch(updateInfoItemsInProductInfo({ data: cloneInformationItems, index }))
  }

  const addTopicOfProductInfoItem = () => {
    const cloneInformationItems = clone(infoItem.informationItems) ?? []
    const initTopicItem = {
      text: ''
    }
    cloneInformationItems.push(initTopicItem)
    dispatch(updateInfoItemsInProductInfo({ data: cloneInformationItems, index }))
  }

  const removeTopicOfProductInfoItem = (i: number) => {
    const cloneInformationItems = clone(infoItem.informationItems) ?? []
    if (cloneInformationItems?.length === 1) {
      return
    }
    cloneInformationItems.splice(i, 1)
    dispatch(updateInfoItemsInProductInfo({ data: cloneInformationItems, index }))
  }

  const updateInput = (data: { value: string | number; field: string }, childIndex?: number) => {
    switch (data.field) {
      case 'title':
        dispatch(setTitleProductInfoItem({ data: data.value as string, index }))
        break
      case 'nameTopic':
        updateNameTopic(data.value as string, childIndex)
        break
      case 'text':
        updateTextTopic(data.value as string, childIndex)
        break
      default:
        break
    }
  }

  const onEditTitleProductInformation = (status: boolean) => {
    setEditable(!status)
  }

  const onEditTopicProductInfoItem = (status: boolean, index: number) => {
    const listEditable = [...listEditableTopic]
    listEditable[index] = !status
    setListEditableTopic(listEditable)
  }

  const onRemoveProductInfoItem = () => {
    dispatch(removeProductInfoItem(index))
  }

  const updateFilePaths = (data: string[], index: number) => {
    // dispatch(setPhotosProductInfo({ data, index }))
  }

  const updateFileStores = (data: File[], index: number) => {
    // dispatch(setPhotosStoreProductInfo({ data, index }))
  }

  return (
    <Paper className={`create-new-product-card__container`}>
      <Box>
        <Flex justify={'space-between'} align={'center'} sx={{ marginTop: '15px', marginBottom: '10px' }}>
          <Flex align={'center'} columnGap={12.5}>
            <ActionIcon size={20}>
              <TableRowsIcon />
            </ActionIcon>
            {editableInfo ? (
              <AppInput
                placeholder={t('fill_information_category')}
                field='title'
                updateInput={updateInput}
                value={infoItem.title}
                classNames={classes.input__title}
              />
            ) : (
              <Text className={classes.topic}>
                {infoItem.title !== '' ? infoItem.title : t('information_category')}
              </Text>
            )}
            <ActionIcon onClick={() => onEditTitleProductInformation(editableInfo)}>
              {editableInfo ? <EditIconDark /> : <EditIconLight />}
            </ActionIcon>
          </Flex>
          <Flex align={'center'}>
            <ToggleButon onToggleStatus={(event) => setEnabled(event)} isActive={infoItem.appear} />
            <ActionIcon onClick={() => dispatch(removeProductInfoItem(index))}>
              <DeleteIcon />
            </ActionIcon>
          </Flex>
        </Flex>
        {infoItem.informationItems?.length &&
          infoItem.informationItems.map((item: any, index: number) => (
            <div key={index}>
              <Flex justify={'space-between'} align={'center'} sx={{ marginTop: '15px', marginBottom: '10px' }}>
                <Flex align={'center'} columnGap={12.5}>
                  <ActionIcon size={20}>
                    <TableRowsIcon />
                  </ActionIcon>
                  {listEditableTopic[index] ? (
                    <AppInput
                      placeholder={t('fill_topic_name')}
                      field='nameTopic'
                      updateInput={(event) => updateInput(event, index)}
                      value={item.topicName}
                      classNames={classes.input__title}
                    />
                  ) : (
                    <Text className={classes.topic}>{!item.topicName ? t('topic_name') : item.topicName}</Text>
                  )}
                  <ActionIcon onClick={() => onEditTopicProductInfoItem(listEditableTopic[index], index)}>
                    {listEditableTopic[index] ? <EditIconDark /> : <EditIconLight />}
                  </ActionIcon>
                </Flex>
                <Flex align={'center'}>
                  <ActionIcon onClick={() => removeTopicOfProductInfoItem(index)}>
                    <DeleteIcon />
                  </ActionIcon>
                </Flex>
              </Flex>
              <ProductAddImageForm
                updateFilePaths={(event) => updateFilePaths(event, index)}
                updateFileStores={(event) => updateFileStores(event, index)}
                limitQuantity={4}
                hiddenTitle={true}
                isActive={true}
              />
              <AppInput
                title={t('content') as string}
                placeholder={t('fill_information_of_title')}
                field='text'
                value={item.text}
                updateInput={(event) => updateInput(event, index)}
              />
            </div>
          ))}
      </Box>
      <ActionIcon className='title-add' onClick={addTopicOfProductInfoItem}>
        <Text>+{t('add_topic')}</Text>
      </ActionIcon>
    </Paper>
  )
}
