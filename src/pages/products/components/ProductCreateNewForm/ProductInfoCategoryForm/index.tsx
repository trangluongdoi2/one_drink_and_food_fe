import { useState } from 'react'
import { ActionIcon, Flex, Paper, Text } from '@mantine/core'
import { useStyles } from './index.styles'
import { useTranslation } from 'react-i18next'
import { AppInput } from '@/components/input'
import { ToggleButon } from '@/components/button/ToggleButton'
import { ProductAddImageForm } from '../../ProductAddImageForm'
import { DeleteIcon, EditIconLight, TableRowsIcon } from '@/assets/icon'

export const ProductInfoCategoryForm = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const [isActive, setIsActive] = useState(true)
  const toggleActiveUpload = (value: boolean) => {
    setIsActive(value)
  }

  const updateInput = (data: any) => {
    // console.log(data, 'data')
  }

  const updateFilePaths = (data: string[]) => {
    // console.log('updateFilePaths 1', data)
  }
  return (
    <Paper className={`create-new-product-card__container`}>
      <Flex justify={'space-between'} align={'center'} sx={{ marginTop: '15px', marginBottom: '10px' }}>
        <Flex align={'center'} columnGap={12.5}>
          <ActionIcon size={20}>
            <TableRowsIcon />
          </ActionIcon>
          <Text className={classes.topic}>{t('topic_name')}</Text>
          <ActionIcon>
            <EditIconLight />
          </ActionIcon>
        </Flex>
        <Flex align={'center'}>
          <ToggleButon onToggleStatus={toggleActiveUpload} isActive={isActive} />
          <ActionIcon>
            <DeleteIcon />
          </ActionIcon>
        </Flex>
      </Flex>
      <ProductAddImageForm updateFilePaths={updateFilePaths} limitQuantity={4} hiddenTitle={true} isActive={isActive} />
      <AppInput
        title={t('content') as string}
        placeholder={t('fill_information_of_title')}
        field='content'
        updateInput={updateInput}
      />
      <ActionIcon className='title-add'>
        <Text>+{t('add_topic')}</Text>
      </ActionIcon>
    </Paper>
  )
}
