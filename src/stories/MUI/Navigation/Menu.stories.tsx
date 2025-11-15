/** @jsxImportSource react */
import Cloud from '@mui/icons-material/Cloud'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import {
  Box,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Menu> = {
  title: 'MUI/Navigation/Menu',
  component: Menu,
}

export default meta

type Story = StoryObj<typeof Menu>

export const Playground: Story = {
  args: {
    open: true,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
  },
  render: (args) => (
    <Menu {...args} anchorEl={document.body}>
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  ),
}

const BasicExample = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        基本
      </Typography>
      <Button
        variant='outlined'
        onClick={handleClick}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}>
        メニューを開く
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>プロフィール</MenuItem>
        <MenuItem onClick={handleClose}>マイアカウント</MenuItem>
        <MenuItem onClick={handleClose}>ログアウト</MenuItem>
      </Menu>
    </Box>
  )
}

export const Basic: Story = {
  render: () => <BasicExample />,
}

const WithIconsExample = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        アイコン付き
      </Typography>
      <Button variant='outlined' onClick={(e) => setAnchorEl(e.currentTarget)}>
        編集メニュー
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ListItemIcon>
            <ContentCut fontSize='small' />
          </ListItemIcon>
          <ListItemText>切り取り</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ListItemIcon>
            <ContentCopy fontSize='small' />
          </ListItemIcon>
          <ListItemText>コピー</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ListItemIcon>
            <ContentPaste fontSize='small' />
          </ListItemIcon>
          <ListItemText>貼り付け</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => setAnchorEl(null)}>
          <ListItemIcon>
            <Cloud fontSize='small' />
          </ListItemIcon>
          <ListItemText>クラウドバックアップ</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export const WithIcons: Story = {
  render: () => <WithIconsExample />,
}

const DenseExample = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        密度の高いメニュー
      </Typography>
      <Button variant='outlined' onClick={(e) => setAnchorEl(e.currentTarget)}>
        密度の高いメニュー
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        <MenuItem dense onClick={() => setAnchorEl(null)}>
          アイテム 1
        </MenuItem>
        <MenuItem dense onClick={() => setAnchorEl(null)}>
          アイテム 2
        </MenuItem>
        <MenuItem dense onClick={() => setAnchorEl(null)}>
          アイテム 3
        </MenuItem>
      </Menu>
    </Box>
  )
}

export const Dense: Story = {
  render: () => <DenseExample />,
}

const options = ['None', 'Atria', 'Callisto', 'Dione', 'Ganymede', 'Io']

const SelectedExample = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(1)
  const open = Boolean(anchorEl)

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index)
    setAnchorEl(null)
  }

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        選択状態
      </Typography>
      <Button variant='outlined' onClick={handleClickListItem}>
        選択: {options[selectedIndex]}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(index)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export const Selected: Story = {
  render: () => <SelectedExample />,
}

const longMenuOptions = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
]

const MaxHeightExample = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        最大高さ
      </Typography>
      <Button variant='outlined' onClick={(e) => setAnchorEl(e.currentTarget)}>
        長いメニュー
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '20ch',
          },
        }}>
        {longMenuOptions.map((option) => (
          <MenuItem key={option} onClick={() => setAnchorEl(null)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export const MaxHeight: Story = {
  render: () => <MaxHeightExample />,
}

type PositionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

const PositioningExample = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [position, setPosition] = useState<PositionType>('top-left')

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    pos: PositionType
  ) => {
    setAnchorEl(event.currentTarget)
    setPosition(pos)
  }

  const getAnchorOrigin = () => {
    switch (position) {
      case 'top-left':
        return { vertical: 'top' as const, horizontal: 'left' as const }
      case 'top-right':
        return { vertical: 'top' as const, horizontal: 'right' as const }
      case 'bottom-left':
        return { vertical: 'bottom' as const, horizontal: 'left' as const }
      case 'bottom-right':
        return { vertical: 'bottom' as const, horizontal: 'right' as const }
    }
  }

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        配置
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Button variant='outlined' onClick={(e) => handleClick(e, 'top-left')}>
          Top Left
        </Button>
        <Button variant='outlined' onClick={(e) => handleClick(e, 'top-right')}>
          Top Right
        </Button>
        <Button
          variant='outlined'
          onClick={(e) => handleClick(e, 'bottom-left')}>
          Bottom Left
        </Button>
        <Button
          variant='outlined'
          onClick={(e) => handleClick(e, 'bottom-right')}>
          Bottom Right
        </Button>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={getAnchorOrigin()}>
        <MenuItem onClick={() => setAnchorEl(null)}>アイテム 1</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>アイテム 2</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>アイテム 3</MenuItem>
      </Menu>
    </Box>
  )
}

export const Positioning: Story = {
  render: () => <PositioningExample />,
}
