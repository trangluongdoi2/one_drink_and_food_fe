import { Box, Card, Grid } from '@mantine/core'
import { Link, Outlet } from 'react-router-dom'
import NoteColumn from './noteColumn'

const mock = {
  notes: [
    {
      id: '137184781',
      content: '<div>This is new note</div>'
    },
    {
      id: '137181',
      content: '<div>This is new note 2</div>'
    },
    {
      id: '1371781',
      content: '<div>This is new note 3</div>'
    }
  ]
}

const NoteList = () => {
  return (
    <Grid grow sx={{ width: '100%', height: '100%' }}>
      <Grid.Col span='auto' sx={{ width: '100%', height: '100%' }}>
        <NoteColumn folder={mock} />
      </Grid.Col>
      <Grid.Col span={4} sx={{ width: '100%', height: '100%' }}>
        <Outlet />
      </Grid.Col>
    </Grid>
  )
}

export default NoteList
