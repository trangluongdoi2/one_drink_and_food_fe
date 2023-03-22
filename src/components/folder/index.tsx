import { Box, Card, ScrollArea, Stack, Text } from '@mantine/core'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

interface FolderListProps {
  folders: {
    name: string
    id: string
  }[]
}

const FolderList = ({ folders }: FolderListProps) => {
  const { folderId } = useParams()
  const [activeFolder, setActiveFolder] = useState<string | undefined>(folderId)
  return (
    <Box p={10} sx={{ backgroundColor: '#7d9d9c' }}>
      <Text fw={700} variant='h4' mb={10}>
        Folder List
      </Text>
      <ScrollArea.Autosize mah={540} maw={400} mx='auto' offsetScrollbars>
        <Stack spacing={10} sx={{ height: '100%' }}>
          {folders.map(({ id, name }) => {
            const active = activeFolder === id
            return (
              <Link
                key={id}
                to={`folders/${id}`}
                style={{ textDecoration: 'none' }}
                onClick={() => setActiveFolder(id)}
              >
                <Card p={10} sx={{ backgroundColor: active ? 'orange' : '' }}>
                  <Text>{name}</Text>
                </Card>
              </Link>
            )
          })}
        </Stack>
      </ScrollArea.Autosize>
    </Box>
  )
}

export default FolderList
