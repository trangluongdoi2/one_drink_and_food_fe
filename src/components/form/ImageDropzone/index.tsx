import CouponHeader from '@/pages/coupons/components/CouponHeader'
import { Paper, Stack } from '@mantine/core'
import { FileWithPath } from '@mantine/dropzone'
import { useState } from 'react'
import DefaultImage from './DefaultImage'
import { ImportedImage } from './ImportedImage'

const ImageDropzone = () => {
  const [files, setFiles] = useState<FileWithPath[]>([])

  return (
    <Paper bg={'dark.0'} w={100} h={100} radius={10}>
      {!files.length ? (
        <DefaultImage onUploadFile={setFiles} />
      ) : (
        <ImportedImage fileURL={files[0]} removeFile={() => console.log('aaa')} index={'aaa'} />
      )}
    </Paper>
  )
}

export default ImageDropzone
