/** @jsxImportSource react */
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  alpha,
  styled,
} from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const meta: Meta<typeof AppBar> = {
  title: 'MUI/Surfaces/AppBar',
  component: AppBar,
  argTypes: {
    position: {
      options: ['fixed', 'absolute', 'sticky', 'static', 'relative'],
      control: { type: 'select' },
    },
    color: {
      options: ['default', 'inherit', 'primary', 'secondary', 'transparent'],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<typeof AppBar>

export const Playground: Story = {
  args: {
    position: 'static',
    color: 'primary',
  },
  render: (args) => (
    <AppBar {...args}>
      <Toolbar>
        <Typography variant='h6'>My App</Typography>
      </Toolbar>
    </AppBar>
  ),
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        基本
      </Typography>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div'>
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  ),
}

export const WithMenu: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        メニューアイコン付き
      </Typography>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  ),
}

export const WithSearch: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        検索付き
      </Typography>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder='検索…' />
          </Search>
          <IconButton
            size='large'
            edge='end'
            color='inherit'
            aria-label='account'
            sx={{ ml: 2 }}>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <AppBar position='static' color='default'>
        <Toolbar>
          <Typography variant='h6'>Default</Typography>
        </Toolbar>
      </AppBar>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6'>Primary</Typography>
        </Toolbar>
      </AppBar>
      <AppBar position='static' color='secondary'>
        <Toolbar>
          <Typography variant='h6'>Secondary</Typography>
        </Toolbar>
      </AppBar>
      <AppBar position='static' color='transparent'>
        <Toolbar>
          <Typography variant='h6'>Transparent</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  ),
}
