import * as React from 'react'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import ProjectCard from '../../components/ProjectCard'
import PostCard from '../../components/PostCard'

const greeting = {
  title: 'Hi, I am Charlie!',
  subTitle: 'I am the creator of Teamnova and AMCList.',
  paragraph: 'I am a passionate open-source developer and designer based in Canada, who combines deep technical insights with a relentless focus on simplicity of use.'
}

const projects = [
  { key: 1, heading: 'Teamnova', subHeading: 'Team mentorship for large open-source projects' },
  { key: 2, heading: 'AMCList', subHeading: 'Peer mentorship for early-stage open-source projects' }
]

const featuredPosts = [
  {
    key: 1,
    title: 'Featured Post 1',
    date: 'May 15, 2023',
    description:
      'This is description. This is description. This is description.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image label 1',
  },
  {
    key: 2,
    title: 'Featured Post 2',
    date: 'Jun 28, 2023',
    description:
      'This is description. This is description. This is description.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image label 2'
  },
  {
    key: 3,
    title: 'Featured Post 3',
    date: 'Sep 12, 2023',
    description:
      'This is description. This is description. This is description.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image label 3',
  },
  {
    key: 4,
    title: 'Featured Post 4',
    date: 'Oct 21, 2023',
    description:
      'This is description. This is description. This is description.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image label 4'
  },
]

const defaultTheme = createTheme()

function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Grid container sx={{ height: '80vh', my: 4 }}>
          <CssBaseline />
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                bgcolor: 'background.paper',
                p: 8,
                pb: 12
              }}
            >
              <Avatar
                src='https://source.unsplash.com/random?wallpapers'
                sx={{ width: 300, height: 300 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                bgcolor: 'background.paper',
                p: 12,
                pb: 6               
              }}
            >
              <Typography
                component='h1'
                variant='h3'
                align='left'
                color='text.primary'
                sx={{ fontWeight: 'bold', lineHeight: '50px' }} 
                gutterBottom
              >
                {greeting.title}
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: 'background.paper',
                px: 12,
                py: 2
              }}
            >
              <Stack
                direction='column'
                spacing={4}
                justifyContent='space-evenly'
              >
                <Typography
                  variant='subtitle1'
                  align='left'
                  color='text.primary'
                  sx={{ fontFamily: 'sans-serif', fontWeight: 'bold', lineHeight: '20px' }} 
                  gutterBottom
                >
                  {greeting.subTitle}
                </Typography>
                <Typography
                  variant='subtitle2'
                  align='left'
                  color='text.secondary'
                  sx={{ fontFamily: 'Helvetica', lineHeight: '15px' }} 
                  paragraph
                >
                  {greeting.paragraph}
                </Typography>
                <Stack
                  direction='row'
                  spacing={8}
                  justifyContent='left'
                >
                  <Button
                    size='large'
                    variant='contained'
                    style={{ textTransform: 'none', minWidth: '150px', fontWeight: 'bold', lineHeight: '32px', borderRadius: 32 }}
                  >
                    Projects
                  </Button>
                  <Button
                    size='large'
                    variant='contained'
                    style={{ textTransform: 'none', minWidth: '150px', fontWeight: 'bold', lineHeight: '32px', borderRadius: 32 }}
                  >
                    Blog
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        {/* End hero unit */}
        <Container sx={{ mb: 16 }} maxWidth='lg'>
          <Box
            sx={{
              bgcolor: 'background.paper',
              py: 4
            }}
          >
            <Typography
              variant='h4'
              align='center'
              color='text.primary'
              gutterBottom
            >
              Projects
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {projects.map((project) => (
              <ProjectCard key={project.key} project={project} />
            ))}
          </Grid>
        </Container>
        <Container sx={{ mb: 32 }} maxWidth='lg'>
          <Box
            sx={{
              bgcolor: 'background.paper',
              py: 4
            }}
          >
            <Typography
              variant='h4'
              align='center'
              color='text.primary'
              gutterBottom
            >
              Blog
            </Typography>
           </Box>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <PostCard key={post.key} post={post} />
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  )
}

export default Home