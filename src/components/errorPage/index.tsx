import React from 'react'
import { Image, Container, Title, Text, Button, SimpleGrid } from '@mantine/core'
import image from '@/assets/svg/404-image.svg'
import { useStyles } from './index.style'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const handleBackHome = () => {
    navigate('/')
  }

  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
        <Image src={image} className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color='dimmed' size='lg'>
            Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to
            another URL. If you think this is an error contact support.
          </Text>
          <Button variant='outline' size='md' mt='xl' className={classes.control} onClick={handleBackHome}>
            Get back to home page
          </Button>
        </div>
        <Image src={image} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  )
}

export default ErrorPage
