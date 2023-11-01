import { useEffect, useState, useTransition } from 'react'
import { ActionIcon, Flex, NumberInput, Paper, Text } from '@mantine/core'
import { DoneOutlineIcon, ToggleDarkLgIcon, ToggleLightLgIcon } from '@/assets/icon'
import { ProductAddImageForm } from '@/pages/products/components/ProductAddImageForm'
import { ToggleButon } from '@/components/button/ToggleButton'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import {
  setAuxiliaryName,
  setEnableIncludeVATPrices,
  setIntroductionContent,
  setMotionPhotos,
  setProductName,
  setPhotoUrls,
  setPhotoThumbs,
  setProductPrice,
  setMainFunctions,
  setProductQuantity
} from '@/reducer/product/action'
import { AppInput } from '@/components/input'
import { AppInputList } from '@/components/input-list'
import useTranslationMiddleware from '@/i18n/useTranslationMiddleware'
import { useStyles } from './index.styles'

const { trans: t } = useTranslationMiddleware()

type MotionImageProps = {
  motionValue: { enabled: boolean; motionTime: number | null }
  updateMotion: (data: { enabled: boolean; motionTime: number }) => void
}

type IncludePricesVATProps = {
  enableVAT: (data: boolean) => void
}

const IncludePricesVAT = ({ enableVAT }: IncludePricesVATProps) => {
  const { classes } = useStyles()
  const [isActive, setIsActive] = useState<boolean>(true)
  const onToggleStatus = (status: boolean) => {
    setIsActive(status)
    enableVAT(status)
  }
  return (
    <Flex align={'center'} columnGap={5}>
      <Text className={classes.textIncludesVAT}>{t('include_VAT')}</Text>
      <ToggleButon onToggleStatus={onToggleStatus} isActive={isActive} />
    </Flex>
  )
}

const MotionImage = ({ motionValue, updateMotion }: MotionImageProps) => {
  const { classes } = useStyles()

  const changeMotionDelays = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log(Number(event.target.value), ' Number(event.target.value)...')
    // updateMotion({ enabled: true, motionTime: Number(event.target.value) })
  }

  const toggleActive = () => {
    console.log('toggleActive...')
    // updateMotion({ enabled: !motionValue.enabled, motionTime: motionValue.motionTime })
  }
  return (
    <Flex className={classes.moreOption} justify={'space-between'}>
      <Flex align={'center'}>
        <Text className={classes.title} sx={{ marginBottom: '0', marginRight: '10px' }}>
          {t('motion_images')}
        </Text>
        <ActionIcon className={classes.iconToggle} onClick={toggleActive}>
          {motionValue.enabled ? <ToggleDarkLgIcon /> : <ToggleLightLgIcon />}
        </ActionIcon>
      </Flex>
      <NumberInput
        placeholder={t('fill_time_value') || ''}
        defaultValue={1000}
        classNames={{ input: classes.inputMotionTime, rightSection: classes.rightSection }}
        sx={{ flex: '1', marginLeft: '10px' }}
        disabled={!motionValue.enabled}
        onBlur={changeMotionDelays}
      />
    </Flex>
  )
}

export const ProductOverviewNewForm = () => {
  const { classes } = useStyles()
  const {
    motionTime,
    productName,
    auxiliaryName,
    productPrice,
    productQuantity,
    introduction,
    mainFunctions,

    dispatch
  } = useProductContext()

  const motionValue = { enabled: true, motionTime: motionTime }

  const optionImageUploadForm = {
    hasMotion: true
  }

  const updateMainFunctions = (data: string[]) => {
    dispatch(setMainFunctions(data))
  }

  const updateFilePaths = (data: string[]) => {
    dispatch(setPhotoUrls(data))
  }

  const updateFileStores = (data: any) => {
    dispatch(setPhotoThumbs(data))
  }

  const updateInput = (data: { value: string | number; field: string }) => {
    switch (data.field) {
      case 'productName':
        console.log('???? setProductName...')
        dispatch(setProductName(data.value as string))
        break
      case 'auxiliaryName':
        dispatch(setAuxiliaryName(data.value as string))
        break
      case 'productPrice':
        dispatch(setProductPrice(data.value as number))
        break
      case 'productQuantity':
        dispatch(setProductQuantity(data.value as number))
        break
      case 'introduction':
        dispatch(setIntroductionContent(data.value as string))
        break
      default:
        break
    }
  }

  const updateMotions = (data: { enabled: boolean; motionTime: number }) => {
    dispatch(setMotionPhotos(data))
  }

  const toggleIsVAT = (data: boolean) => {
    dispatch(setEnableIncludeVATPrices(data))
  }

  return (
    <Paper className={`${classes.container} create-new-product-card__container`}>
      <ProductAddImageForm
        limitQuantity={8}
        options={optionImageUploadForm}
        updateFilePaths={updateFilePaths}
        updateFileStores={updateFileStores}
      />
      <MotionImage motionValue={motionValue} updateMotion={updateMotions} />
      <AppInput
        title={t('product_name')}
        placeholder={t('fill_product_name')}
        field='productName'
        value={productName}
        isImperative={true}
        hiddenToggleIcon={true}
        updateInput={updateInput}
      />
      <AppInput
        title={t('auxiliary_name')}
        placeholder={t('fill_product_auxiliary_name')}
        value={auxiliaryName}
        field='auxiliaryName'
        updateInput={updateInput}
      />
      <AppInput
        typeInput='number'
        title={t('prices')}
        placeholder={t('fill_product_prices')}
        field='productPrice'
        value={productPrice}
        isImperative={true}
        hiddenToggleIcon={true}
        moreOptions={<IncludePricesVAT enableVAT={toggleIsVAT} />}
        updateInput={updateInput}
      />
      <AppInput
        title={t('product_quantity')}
        placeholder={t('fill_product_quantity')}
        field='productQuantity'
        value={productQuantity}
        typeInput='number'
        isImperative={true}
        hiddenToggleIcon={true}
        updateInput={updateInput}
      />
      <AppInputList
        title={t('main_functions')}
        field='mainFunctions'
        value={mainFunctions}
        iconStatus={<DoneOutlineIcon />}
        updateList={updateMainFunctions}
      ></AppInputList>
      <AppInput
        title={t('introduction')}
        placeholder={t('fill_product_introduction')}
        typeInput='area'
        field='introduction'
        value={introduction}
        updateInput={updateInput}
      />
    </Paper>
  )
}
