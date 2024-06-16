import * as React from 'react'

import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { IconButton, Toolbar, Typography } from '@mui/material'
import Button from '@mui/material/Button'

import { SideNav } from './SideNav'
import { AppBar } from './util'

export default function Header() {
  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='toggle drawer'
            onClick={handleDrawerOpen}
            edge='start'
            size='small'
            sx={{
              mr: 2,
              ml: -2,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            }}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Typography color={'primary.contrastText'} noWrap>
            <h1 className='text-2xl font-bold'>Map App</h1>
          </Typography>
          <div className='flex gap-2 items-center flex-grow justify-end'>
            <Button
              variant='contained'
              color='primary'
              size='small'
              endIcon={<SendIcon />}>
              Primary
            </Button>
            <Button
              variant='contained'
              color='secondary'
              size='small'
              endIcon={<DeleteIcon />}>
              Second
            </Button>
          </div>
        </Toolbar>
        {/* </div> */}
      </AppBar>
      <SideNav open={open} />
    </>
  )
}
