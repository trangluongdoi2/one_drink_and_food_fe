import { HeartIcon } from '@/assets/icon'
import { Paper, Flex, Image, Text, Stack, Box, Grid, CopyButton, Tooltip, ActionIcon } from '@mantine/core'
import avatar from '@/assets/image/avatart.png'
import { IconCheck } from '@tabler/icons-react'
import { CopyIcon } from '@/assets/icon'
import { useUserFormContext } from '@/context/form-context'

const AvatarSection = () => {
  const form = useUserFormContext()

  return (
    <Paper radius={10} shadow='md' p={20}>
      <Flex gap={13}>
        <Image src={avatar} width={100} height={100} radius={50} />
        <Stack spacing={0} mt={10}>
          <Text fw='bolder' size={20}>
            Chào {form.getInputProps('lastName').value} !
          </Text>
          <Flex align='center' gap={3}>
            <Text size='md' sx={{ textAlign: 'center' }}>
              Chúc bạn một ngày tốt lành!
            </Text>
            <HeartIcon />
          </Flex>
        </Stack>
      </Flex>

      <Flex sx={{ width: '100%' }} mt={20} align='center' gap={1}>
        <Box
          sx={{
            backgroundColor: '#e5e5e5',
            borderRadius: '10px 0 0 10px',
            height: '100%',
            padding: '10px 20px',
            width: '40%'
          }}
        >
          <Text fw='bolder' size={14} align='center'>
            MÃ GIỚI THIỆU
          </Text>
        </Box>
        <Box
          sx={{
            backgroundColor: '#f5f5f5',
            borderRadius: '0 10px 10px 0',
            height: '100%',
            width: '60%',
            padding: '8px 20px'
          }}
        >
          <Flex align='center' gap={5}>
            <CopyButton value='ONE0133' timeout={2000}>
              {({ copied, copy }) => (
                <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position='right'>
                  <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
                    {copied ? <IconCheck size={20} color='black' /> : <CopyIcon />}
                  </ActionIcon>
                </Tooltip>
              )}
            </CopyButton>
            <Text fw='bolder' size={14}>
              ONE0133
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Paper>
  )
}

export default AvatarSection
