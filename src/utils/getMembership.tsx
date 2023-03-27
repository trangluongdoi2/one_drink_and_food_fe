import { MEMBERSHIP } from '@/types/user'
const { SILVER, GOLD, RUBY } = MEMBERSHIP
import { RubyMember, SilverMember, GoldenMember } from '@/assets/icon'

export const getMemberShip = (type: string) => {
  switch (type) {
    case SILVER:
      return <SilverMember />

    case GOLD:
      return <GoldenMember />

    case RUBY:
      return <RubyMember />

    default:
      return null
  }
}
