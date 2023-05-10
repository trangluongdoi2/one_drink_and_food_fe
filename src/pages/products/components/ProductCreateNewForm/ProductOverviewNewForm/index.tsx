import { useState } from 'react'
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
  setName,
  setPhotos,
  setPhotosStore,
  setPrices,
  setTypicalFunction
} from '@/reducer/product/action'
import { AppInput } from '@/components/input'
import { AppInputList } from '@/components/input-list'
import useTranslationMiddleware from '@/i18n/useTranslationMiddleware'
import { useStyles } from './index.styles'

const { trans: t } = useTranslationMiddleware()

type MotionImageProps = {
  motionValue: { canMove: boolean; motionDelays: number }
  updateMotion: (data: { canMove: boolean; motionDelays: number }) => void
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
    updateMotion({ canMove: true, motionDelays: Number(event.target.value) })
  }

  const toggleActive = () => {
    updateMotion({ canMove: !motionValue.canMove, motionDelays: motionValue.motionDelays })
  }
  return (
    <Flex className={classes.moreOption} justify={'space-between'}>
      <Flex align={'center'}>
        <Text className={classes.title} sx={{ marginBottom: '0', marginRight: '10px' }}>
          {t('motion_images')}
        </Text>
        <ActionIcon className={classes.iconToggle} onClick={toggleActive}>
          {motionValue.canMove ? <ToggleDarkLgIcon /> : <ToggleLightLgIcon />}
        </ActionIcon>
      </Flex>
      <NumberInput
        placeholder={t('fill_time_value') || ''}
        defaultValue={1000}
        classNames={{ input: classes.inputMotionTime, rightSection: classes.rightSection }}
        sx={{ flex: '1', marginLeft: '10px' }}
        disabled={!motionValue.canMove}
        onBlur={changeMotionDelays}
      />
    </Flex>
  )
}

export const ProductOverviewNewForm = () => {
  const { classes } = useStyles()
  const { dispatch, photos } = useProductContext()

  const motionValue = { canMove: photos?.canMove as boolean, motionDelays: photos?.motionDelays as number }
  const optionImageUploadForm = {
    hasMotion: true
  }

  const updateFunctionList = (data: string[]) => {
    dispatch(setTypicalFunction(data))
  }

  const updateFilePaths = (data: string[]) => {
    dispatch(setPhotos(data))
  }

  const updateFileStores = (data: any) => {
    dispatch(setPhotosStore(data))
  }

  const updateInput = (data: { value: string | number; field: string }) => {
    switch (data.field) {
      case 'name':
        dispatch(setName(data.value as string))
        break
      case 'auxiliaryName':
        dispatch(setAuxiliaryName(data.value as string))
        break
      case 'prices':
        dispatch(setPrices(data.value as number))
        break
      case 'introduction':
        dispatch(setIntroductionContent(data.value as string))
        break
      default:
        break
    }
  }

  const updateMotions = (data: { canMove: boolean; motionDelays: number }) => {
    dispatch(setMotionPhotos(data))
  }

  const updatePrices = (data: boolean) => {
    dispatch(setEnableIncludeVATPrices(data))
  }

  return (
    <Paper className={`${classes.container} create-new-product-card__container`}>
      <ProductAddImageForm
        limitQuantity={8}
        updateFilePaths={updateFilePaths}
        options={optionImageUploadForm}
        updateFileStores={updateFileStores}
      />
      <MotionImage motionValue={motionValue} updateMotion={updateMotions} />
      <AppInput
        title={t('product_name')}
        placeholder={t('fill_product_name')}
        field='name'
        isImperative={true}
        hiddenToggleIcon={true}
        updateInput={updateInput}
      />
      <AppInput
        title={t('auxiliary_name')}
        placeholder={t('fill_product_auxiliary_name')}
        field='auxiliaryName'
        updateInput={updateInput}
      />
      <AppInput
        title={t('prices')}
        placeholder={t('fill_product_prices')}
        field='prices'
        typeInput='number'
        isImperative={true}
        hiddenToggleIcon={true}
        moreOptions={<IncludePricesVAT enableVAT={updatePrices} />}
        updateInput={updateInput}
      />
      <AppInputList
        title={t('typical_function')}
        field='typicalFunction'
        iconStatus={<DoneOutlineIcon />}
        updateList={updateFunctionList}
      ></AppInputList>
      <AppInput
        title={t('introduction')}
        placeholder={t('fill_product_introduction')}
        typeInput='area'
        field='introduction'
        updateInput={updateInput}
      />
    </Paper>
  )
}
