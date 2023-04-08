import { Flex, Input, Stack, Text, createStyles } from '@mantine/core'
import { useTranslation } from 'react-i18next'

type InputProps = {
  name: string
  placeHolder: string
  isImperative?: boolean
  canToggleActive?: boolean
  children?: React.ReactElement
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

// const Slot = ({ children }: any) => <div>{children}</div>
// Slot.Icon = (props: any) => <div className='icon'>{props.children}</div>
// Slot.MoreTitle = (props: any) => <div className='more-title'>{props.children}</div>

export const AppInput = ({
  name,
  placeHolder = '',
  isImperative = false,
  canToggleActive = false,
  children,
}: InputProps) => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  return (
    <Stack className={classes.contanter}>
      <Flex justify='space-between'>
        <Text className={classes['.text__title']}>{name}</Text>
        <Flex align={'center'}>
          {isImperative ? (
            <>
              <Text className={classes['.text--imperative']}>*phần bắt buộc</Text>
            </>
          ) : (
            <></>
          )}
          <>{t('nguyen_tan_vinh')}</>
        </Flex>
      </Flex>
      <Input placeholder={placeHolder} classNames={{ input: `${classes.input}` }} />
      <>Slot more option</>
    </Stack>
  )
}
