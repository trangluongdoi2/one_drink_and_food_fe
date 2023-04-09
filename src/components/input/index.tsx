import { Flex, Input, Stack, Text, createStyles } from '@mantine/core'
import { useTranslation } from 'react-i18next'

type InputProps = {
  name: string
  placeHolder: string
  isImperative?: boolean
  canToggleActive?: boolean
  isActiveInput?: boolean
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
    '&:focus': {
      borderColor: '#000000'
    }
  }
}))

export const AppInput = ({
  name,
  placeHolder = '',
  isImperative = false,
  iconToggle,
  isActiveInput = true,
  moreOptions
}: InputProps) => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  return (
    <Stack className={classes.contanter}>
      <Flex justify='space-between' align={'center'}>
        <Text className={classes['.text__title']}>{name}</Text>
        <Flex align={'center'}>
          {isImperative ? (
            <>
              <Text className={classes['.text--imperative']}>*{t('required_field')}</Text>
            </>
          ) : (
            <></>
          )}
          <>{iconToggle}</>
        </Flex>
      </Flex>
      <Input placeholder={placeHolder} classNames={{ input: `${classes.input}` }} disabled={!isActiveInput} />
      <>{moreOptions}</>
    </Stack>
  )
}
