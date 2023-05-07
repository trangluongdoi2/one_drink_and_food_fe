import { DefaultAvatar, EditImageIcon, HeartIcon, CopyIcon } from '@/assets/icon'
import {
  Paper,
  Flex,
  Image,
  Text,
  Stack,
  Box,
  CopyButton,
  Tooltip,
  ActionIcon,
  Group,
  BackgroundImage
} from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import { useUserFormContext } from '@/context/form-context'
import { useRef, useState } from 'react'
import overlay from '@/assets/image/overlay.png'
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { useStyles } from './index.style'
import { FirebaseService } from '@/firebase/handler'
import oneAva from '@/assets/image/one-ava.png'
import { FIREBASE_COLLECTION } from '@/firebase/collection'

const AvatarSection = () => {
  const form = useUserFormContext()
  const { classes } = useStyles()
  const [visible, setVisible] = useState(false)
  const openRef = useRef<() => void>(null)
  const [image, setImage] = useState(form.getInputProps('avatar').value ?? oneAva)

  const handleOnDrop = async (files: FileWithPath[]) => {
    const imageUrl = URL.createObjectURL(files[0])
    setImage(imageUrl)
    await FirebaseService.uploadImage(files[0], FIREBASE_COLLECTION.USERS, (url: string) => {
      form.setFieldValue('avatar', url ?? '')
    })
  }

  return (
    <Paper radius={10} shadow='md' p={20}>
      <Flex gap={13}>
        <Dropzone
          openRef={openRef}
          styles={{ inner: { pointerEvents: 'all' }, root: { border: 'none' } }}
          radius={60}
          multiple={false}
          p={0}
          accept={IMAGE_MIME_TYPE}
          onDrop={handleOnDrop}
          {...form.getInputProps('avatar')}
        >
          <Group
            onMouseLeave={() => setVisible(false)}
            onMouseEnter={() => setVisible(true)}
            sx={{ position: 'relative' }}
          >
            {image === '' ? (
              <Image
                src={oneAva}
                width={100}
                height={100}
                radius={50}
                styles={{
                  image: {
                    border: '4px solid #ccc'
                  }
                }}
                alt='default'
              />
            ) : (
              <Image
                src={image}
                width={100}
                height={100}
                radius={50}
                styles={{
                  image: {
                    border: '4px solid #ccc'
                  }
                }}
                alt='avatar'
              />
            )}
            {visible && (
              <Flex sx={{ position: 'absolute', top: 0, bottom: 0, left: 0 }}>
                <BackgroundImage src={overlay} w={100} h={100} radius={50}>
                  <Stack sx={{ width: '100%', height: '100%' }} justify='center' align='center' spacing={0}>
                    <EditImageIcon />
                    <Text color='white' size={12} fw={300}>
                      Thay đổi
                    </Text>
                  </Stack>
                </BackgroundImage>
              </Flex>
            )}
          </Group>
        </Dropzone>
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
        <Box className={classes.invite}>
          <Text fw='bolder' size={14} align='center'>
            MÃ GIỚI THIỆU
          </Text>
        </Box>
        <Box className={classes.code}>
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
