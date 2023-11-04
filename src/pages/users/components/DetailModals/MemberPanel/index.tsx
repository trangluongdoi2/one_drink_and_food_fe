import { Flex } from '@mantine/core'
import { MemberBarCode } from './MemberBarCode'
import { MemberSchedule } from './MemberSchedule'

export const MemberPanel = () => {
  return (
    <Flex align={'flex-start'} justify={'space-between'} columnGap={20}>
      <MemberBarCode />
      <MemberSchedule />
    </Flex>
  )
}
