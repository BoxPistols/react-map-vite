/** @jsxImportSource react */
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import FavoriteIcon from '@mui/icons-material/Favorite'
import NavigationIcon from '@mui/icons-material/Navigation'
import {
  Box,
  Fab,
  type FabProps,
  Typography,
} from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<FabProps> = {
  title: 'MUI/Inputs/Fab',
  component: Fab,
  argTypes: {
    variant: {
      options: ['circular', 'extended'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    color: {
      options: ['default', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<FabProps>

export const Playground: Story = {
  args: {
    variant: 'circular',
    size: 'medium',
    color: 'primary',
  },
  render: (args) => (
    <Fab {...args}>
      <AddIcon />
    </Fab>
  ),
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        基本
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Fab color="primary">
          <AddIcon />
        </Fab>
        <Fab color="secondary">
          <EditIcon />
        </Fab>
        <Fab color="default">
          <NavigationIcon />
        </Fab>
      </Box>
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        サイズ
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Fab size="small" color="primary">
          <AddIcon />
        </Fab>
        <Fab size="medium" color="primary">
          <AddIcon />
        </Fab>
        <Fab size="large" color="primary">
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        カラー
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Fab color="default">
          <AddIcon />
        </Fab>
        <Fab color="primary">
          <AddIcon />
        </Fab>
        <Fab color="secondary">
          <AddIcon />
        </Fab>
        <Fab color="success">
          <AddIcon />
        </Fab>
        <Fab color="error">
          <AddIcon />
        </Fab>
        <Fab color="info">
          <AddIcon />
        </Fab>
        <Fab color="warning">
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  ),
}

export const Extended: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        拡張FAB
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Fab variant="extended" color="primary">
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab variant="extended" color="secondary">
          <AddIcon sx={{ mr: 1 }} />
          追加
        </Fab>
        <Fab variant="extended">
          <FavoriteIcon sx={{ mr: 1 }} />
          お気に入り
        </Fab>
      </Box>
    </Box>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        無効状態
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Fab color="primary">
          <AddIcon />
        </Fab>
        <Fab color="primary" disabled>
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  ),
}

export const Positioned: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        配置例
      </Typography>
      <Box sx={{ position: 'relative', height: 300, border: '1px solid', borderColor: 'divider' }}>
        <Fab
          color="primary"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  ),
}
