import { ChangeEvent, useState } from 'react'
import { ActionIcon, Divider, Flex, Input, NumberInput, Paper, Stack, Text } from '@mantine/core'
import {
  DeleteIcon,
  EditIconDark,
  EditIconLight,
  SelectOptionDarkIcon,
  SelectOptionLightIcon,
  TableRowsIcon,
  CloseButton,
  AddFillIcon
} from '@/assets/icon'
import { useStyles } from './index.styles'
import { ProductOptionFrameProps } from '@/pages/products/type'
import { ToggleButon } from '@/components/button/ToggleButton'
import { useTranslation } from 'react-i18next'

export const ProductOptionFrame = ({
  title,
  defaultPlaceholder,
  canSelectMultiOptions = false,
  hasPrice = false,
  isActive = true
}: ProductOptionFrameProps) => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const [canSelectMultiOptionsTest, setCanSelectMultiOptionsTest] = useState(true)
  const [isActiveTest, setIsActiveTest] = useState(true)
  const toggleSelectMulti = () => {
    setCanSelectMultiOptionsTest(!canSelectMultiOptionsTest)
  }
  const onChangeOption = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event?.target.value, 'onChangeOption')
  }
  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event?.target.value, 'onChangePrice')
  }
  const onToggleStatus = (status: boolean) => {
    setIsActiveTest(status)
  }
  const removeOption = () => {
    console.log('removeOption')
  }
  return (
    <Paper className={classes.container}>
      <Stack>
        <Flex justify={'space-between'} align={'center'}>
          <Flex align={'center'} columnGap={12.5}>
            <ActionIcon size={20}>
              <TableRowsIcon />
            </ActionIcon>
            <Text className={classes.title}>{title}</Text>
            <ActionIcon>
              <EditIconLight />
            </ActionIcon>
          </Flex>
          <Flex align={'center'}>
            <ToggleButon onToggleStatus={onToggleStatus} isActive={isActiveTest} />
            <ActionIcon>
              <DeleteIcon />
            </ActionIcon>
          </Flex>
        </Flex>
        <Flex>
          <ActionIcon onClick={toggleSelectMulti} sx={{ marginRight: '10px'}}>
            {canSelectMultiOptionsTest ? <SelectOptionDarkIcon /> : <SelectOptionLightIcon />}
          </ActionIcon>
          <Flex gap={12} direction={'column'} sx={{ flex: 1 }}>
            <Flex gap={12} align={'center'}>
              <Input
                value=''
                placeholder={defaultPlaceholder}
                classNames={{ input: classes.input }}
                sx={{ flex: 1 }}
                onChange={onChangeOption}
                disabled={!isActiveTest}
              />
              {hasPrice ? (
                <NumberInput
                  value=''
                  placeholder='Giá'
                  sx={{ width: '104px' }}
                  classNames={{ input: classes.input, rightSection: classes.rightSection }}
                  onChange={() => onChangePrice}
                  disabled={!isActiveTest}
                />
              ) : (
                <></>
              )}
              <ActionIcon onClick={removeOption}>
                <CloseButton />
              </ActionIcon>
            </Flex>
            <ActionIcon sx={{ width: '100%', justifyContent: 'flex-start' }}>
              <AddFillIcon />
              <Text>{t('add_option')}</Text>
            </ActionIcon>
          </Flex>
        </Flex>
      </Stack>
    </Paper>
  )
}
