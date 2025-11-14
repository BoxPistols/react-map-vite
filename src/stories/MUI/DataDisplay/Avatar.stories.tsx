/** @jsxImportSource react */
import FolderIcon from '@mui/icons-material/Folder'
import {
  Avatar,
  AvatarGroup,
  Box,
  Stack,
  Typography,
} from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Avatar> = {
  title: 'MUI/DataDisplay/Avatar',
  component: Avatar,
  argTypes: {
    variant: {
      options: ['circular', 'rounded', 'square'],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Playground: Story = {
  args: {
    variant: 'circular',
    children: 'U',
  },
  render: (args) => <Avatar {...args} />,
}

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        バリエーション
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar variant="circular">C</Avatar>
        <Avatar variant="rounded">R</Avatar>
        <Avatar variant="square">S</Avatar>
      </Stack>
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        サイズ
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem' }}>S</Avatar>
        <Avatar sx={{ width: 32, height: 32, fontSize: '1rem' }}>M</Avatar>
        <Avatar>D</Avatar>
        <Avatar sx={{ width: 56, height: 56, fontSize: '1.5rem' }}>L</Avatar>
        <Avatar sx={{ width: 64, height: 64, fontSize: '1.75rem' }}>XL</Avatar>
      </Stack>
    </Box>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        画像付き
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="User Avatar"
          src="https://i.pravatar.cc/150?img=1"
        />
        <Avatar
          alt="User Avatar"
          src="https://i.pravatar.cc/150?img=2"
        />
        <Avatar
          alt="User Avatar"
          src="https://i.pravatar.cc/150?img=3"
        />
      </Stack>
    </Box>
  ),
}

export const WithLetters: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        文字
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar>H</Avatar>
        <Avatar>N</Avatar>
        <Avatar>OP</Avatar>
        <Avatar>田</Avatar>
      </Stack>
    </Box>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        アイコン
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: 'primary.main' }}>
          <FolderIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: 'secondary.main' }}>
          <FolderIcon />
        </Avatar>
      </Stack>
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        カラー
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: 'primary.main' }}>P</Avatar>
        <Avatar sx={{ bgcolor: 'secondary.main' }}>S</Avatar>
        <Avatar sx={{ bgcolor: 'error.main' }}>E</Avatar>
        <Avatar sx={{ bgcolor: 'warning.main' }}>W</Avatar>
        <Avatar sx={{ bgcolor: 'info.main' }}>I</Avatar>
        <Avatar sx={{ bgcolor: 'success.main' }}>S</Avatar>
      </Stack>
    </Box>
  ),
}

export const Group: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          アバターグループ
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="User 1" src="https://i.pravatar.cc/150?img=1" />
          <Avatar alt="User 2" src="https://i.pravatar.cc/150?img=2" />
          <Avatar alt="User 3" src="https://i.pravatar.cc/150?img=3" />
          <Avatar alt="User 4" src="https://i.pravatar.cc/150?img=4" />
          <Avatar alt="User 5" src="https://i.pravatar.cc/150?img=5" />
        </AvatarGroup>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          最大3個まで表示
        </Typography>
        <AvatarGroup max={3}>
          <Avatar alt="User 1" src="https://i.pravatar.cc/150?img=6" />
          <Avatar alt="User 2" src="https://i.pravatar.cc/150?img=7" />
          <Avatar alt="User 3" src="https://i.pravatar.cc/150?img=8" />
          <Avatar alt="User 4" src="https://i.pravatar.cc/150?img=9" />
          <Avatar alt="User 5" src="https://i.pravatar.cc/150?img=10" />
          <Avatar alt="User 6" src="https://i.pravatar.cc/150?img=11" />
        </AvatarGroup>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          文字アバターグループ
        </Typography>
        <AvatarGroup max={4}>
          <Avatar>A</Avatar>
          <Avatar>B</Avatar>
          <Avatar>C</Avatar>
          <Avatar>D</Avatar>
          <Avatar>E</Avatar>
        </AvatarGroup>
      </Box>
    </Box>
  ),
}

export const Fallback: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        フォールバック
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar alt="User" src="/broken-image.jpg" />
        <Avatar alt="User Name" src="/broken-image.jpg">
          U
        </Avatar>
        <Avatar alt="User" src="/broken-image.jpg">
          <FolderIcon />
        </Avatar>
      </Stack>
    </Box>
  ),
}
