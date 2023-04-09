import { ActionIcon } from '@mantine/core'
import { ToggleDarkLgIcon, ToggleLightLgIcon } from '@/assets/icon'

type ToggleButonType = {
  onToggleStatus: (status: boolean) => void
  isActive: boolean
}
export const ToggleButon = ({ onToggleStatus, isActive }: ToggleButonType) => {
  return (
    <ActionIcon onClick={() => onToggleStatus(!isActive)} sx={{ width: '40px', height: '20px' }}>
      {isActive ? <ToggleDarkLgIcon /> : <ToggleLightLgIcon />}
    </ActionIcon>
  )
}
