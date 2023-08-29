import { Center, Loader } from '@mantine/core'
import { FC } from 'react'

type TScreenLoaderProps = {
  visible?: boolean
}

const ScreenLoader: FC<TScreenLoaderProps> = ({ visible = false }) => {
  if (!visible) return null

  return (
    <Center h='80vh'>
      <Loader color='dark' variant='dots' />
    </Center>
  )
}

export default ScreenLoader
