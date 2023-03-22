import { Box, Card, ScrollArea, Stack, Text } from '@mantine/core'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

interface NoteListProps {
  folder: {
    notes: {
      content: string
      id: string
    }[]
  }
}

const NoteColumn = ({ folder }: NoteListProps) => {
  const { noteId } = useParams()
  const [activeNote, setActiveNote] = useState<string | undefined>(noteId)
  return (
    <Box sx={{ height: '100%', backgroundColor: '#F0EBE3' }} p={10}>
      <Text fw={700} variant='h4' mb={10}>
        Note List
      </Text>
      <ScrollArea.Autosize mah={540} maw={400} mx='auto'>
        <Stack spacing={10} sx={{ height: '100%' }}>
          {folder.notes.map(({ id, content }) => {
            const active = activeNote === id

            return (
              <Link key={id} to={`note/${id}`} style={{ textDecoration: 'none' }} onClick={() => setActiveNote(id)}>
                <Card
                  withBorder
                  p={10}
                  sx={{ textOverflow: 'hidden', minWidth: 100, backgroundColor: active ? 'orange' : '' }}
                >
                  <Text
                    dangerouslySetInnerHTML={{
                      __html: `${content.substring(0, 30) || 'Empty'}`
                    }}
                    fw={500}
                  />
                </Card>
              </Link>
            )
          })}
        </Stack>
      </ScrollArea.Autosize>
    </Box>
  )
}

export default NoteColumn
