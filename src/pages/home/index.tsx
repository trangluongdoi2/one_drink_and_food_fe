import { Center, Grid, Paper } from '@mantine/core'
import React from 'react'
import FolderList from '@/components/folder'
import { Outlet } from 'react-router-dom'
const mock = [
  {
    id: '1841gadga84',
    name: 'First folder'
  },
  {
    id: '1841afgagsh84',
    name: 'First folder'
  },
  {
    id: '184184adfadf',
    name: 'First folder'
  },
  {
    id: '184184adfadfad',
    name: 'First folder'
  },
  {
    id: '18418446846',
    name: 'First folder'
  },
  {
    id: '18418414136126712',
    name: 'First folder'
  },
  {
    id: '18418424524524624',
    name: 'First folder'
  },
  {
    id: '184184245624524',
    name: 'First folder'
  },
  {
    id: '1841841341251',
    name: 'First folder'
  },
  {
    id: '18418414152462472',
    name: 'First folder'
  },
  {
    id: '18418424525425',
    name: 'First folder'
  },
  {
    id: '184184357758',
    name: 'First folder'
  },
  {
    id: '18418435635',
    name: 'First folder'
  },
  {
    id: '1841846363',
    name: 'First folder'
  },
  {
    id: '1841843141',
    name: 'First folder'
  },
  {
    id: '1841842',
    name: 'First folder'
  },
  {
    id: '1841841',
    name: 'First folder'
  },
  {
    id: '1841843',
    name: 'First folder'
  },
  {
    id: '1841844',
    name: 'First folder'
  }
]

const HomePage = () => {
  return (
    <Center sx={{ width: '100%' }} mt={20}>
      <Paper shadow='lg' p={10} radius='md' sx={{ width: '90%', height: '50vh' }} withBorder>
        <Grid grow>
          <Grid.Col span='auto'>
            <FolderList folders={mock} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Outlet />
          </Grid.Col>
        </Grid>
      </Paper>
    </Center>
  )
}

export default HomePage
