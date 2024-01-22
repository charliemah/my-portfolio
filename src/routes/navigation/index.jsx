import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const title = 'Charlie Ma'

const sections = [
  { title: 'Projects', url: '#' },
  { title: 'Blog', url: '#' },
  { title: 'About', url: '#' }
]

function Navigation() {

  return (
    <Fragment>
      <AppBar
        position='static'
        color='default'
        elevation={0}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant='subtitle1' align='left' color='inherit' noWrap sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <nav>
            {sections.map((section) => (
              <Link
                color='inherit'
                underline='none'
                noWrap
                key={section.title}
                variant='body2'
                href={section.url}
                sx={{ p: 1, flexShrink: 0 }}
              >
                {section.title}
              </Link>
            ))}
          </nav>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
