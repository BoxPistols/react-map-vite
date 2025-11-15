import type { Meta, StoryObj } from '@storybook/react'
import { BottomNavigation, BottomNavigationAction, Paper, Box } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FolderIcon from '@mui/icons-material/Folder'
import PersonIcon from '@mui/icons-material/Person'
import { useState } from 'react'

const meta = {
  title: 'MUI/Navigation/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BottomNavigation>

export default meta
type Story = StoryObj<typeof meta>

const BasicExample = () => {
  const [value, setValue] = useState(0)

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue)
        }}>
        <BottomNavigationAction label="最近" icon={<RestoreIcon />} />
        <BottomNavigationAction label="お気に入り" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="場所" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Paper>
  )
}

export const Basic: Story = {
  render: () => <BasicExample />,
}

const WithoutLabelsExample = () => {
  const [value, setValue] = useState(0)

  return (
    <Box sx={{ pb: 7 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue)
          }}>
          <BottomNavigationAction icon={<RestoreIcon />} />
          <BottomNavigationAction icon={<FavoriteIcon />} />
          <BottomNavigationAction icon={<LocationOnIcon />} />
          <BottomNavigationAction icon={<FolderIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export const WithoutLabels: Story = {
  render: () => <WithoutLabelsExample />,
}

const AlwaysShowLabelsExample = () => {
  const [value, setValue] = useState('recents')

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue)
        }}>
        <BottomNavigationAction
          value="recents"
          label="最近"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          value="favorites"
          label="お気に入り"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          value="nearby"
          label="近く"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          value="folder"
          label="フォルダ"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
    </Paper>
  )
}

export const AlwaysShowLabels: Story = {
  render: () => <AlwaysShowLabelsExample />,
}

const FiveActionsExample = () => {
  const [value, setValue] = useState(0)

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue)
        }}>
        <BottomNavigationAction label="最近" icon={<RestoreIcon />} />
        <BottomNavigationAction label="お気に入り" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="近く" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="フォルダ" icon={<FolderIcon />} />
        <BottomNavigationAction label="プロフィール" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  )
}

export const FiveActions: Story = {
  render: () => <FiveActionsExample />,
}
