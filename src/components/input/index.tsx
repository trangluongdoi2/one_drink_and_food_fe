import { Flex, Input, Stack, Text, Textarea, createStyles } from '@mantine/core'
import { useTranslation } from 'react-i18next'

type InputProps = {
  name: string
  placeHolder: string
  isImperative?: boolean
  canToggleActive?: boolean
  isActiveInput?: boolean
  isTextArea?: boolean
  children?: React.ReactElement
  iconToggle?: React.ReactNode
  moreOptions?: React.ReactNode
}

const useStyles = createStyles(() => ({
  contanter: {
    gap: '10px',
    margin: '10px 0'
  },
  '.text__title': {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000'
  },
  '.text--imperative': {
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    textAlign: 'right',
    color: '#FE5F51'
  },
  input: {
    height: '40px',
    background: '#f5f5f5',
    borderRadius: '10px',
    '&:focus': {
      borderColor: '#000000'
    }
  },
  inputArea: {
    minHeight: '180px',
    background: '#f5f5f5',
    borderRadius: '10px',
    '&:focus': {
      borderColor: '#000000'
    }
  }
}))

export const AppInput = ({
  name,
  placeHolder = '',
  isImperative = false,
  isActiveInput = true,
  isTextArea = false,
  iconToggle,
  moreOptions
}: InputProps) => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  return (
    <Stack className={classes.contanter}>
      <Flex justify='space-between' align={'flex-end'}>
        <Text className={classes['.text__title']}>{name}</Text>
        <Flex align={'center'}>
          {isImperative ? <Text className={classes['.text--imperative']}>*{t('required_field')}</Text> : <></>}
          <>{iconToggle}</>
        </Flex>
      </Flex>
      {isTextArea ? (
        <Textarea placeholder={placeHolder} classNames={{ input: `${classes.inputArea}` }} disabled={!isActiveInput} />
      ) : (
        <Input placeholder={placeHolder} classNames={{ input: `${classes.input}` }} disabled={!isActiveInput} />
      )}
      <>{moreOptions}</>
    </Stack>
  )
}
