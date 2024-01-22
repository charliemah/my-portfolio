import React from 'react'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

function ProjectCard(props) {
  const { project } = props

  return (
    <Grid item key={project.key} xs={12} sm={6}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component='div'
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image='https://source.unsplash.com/random?wallpapers'
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant='h5' component='h2'>
            {project.heading}
          </Typography>
          <Typography>
            {project.subHeading}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ProjectCard
