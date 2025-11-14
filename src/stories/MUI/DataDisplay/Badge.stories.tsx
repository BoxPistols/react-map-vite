/** @jsxImportSource react */
import MailIcon from '@mui/icons-material/Mail'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Avatar, Badge, Box, Stack, Typography } from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Badge> = {
  title: 'MUI/DataDisplay/Badge',
  component: Badge,
  argTypes: {
    color: {
      options: [
        'default',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      control: { type: 'select' },
    },
    variant: {
      options: ['standard', 'dot'],
      control: { type: 'select' },
    },
    anchorOrigin: {
      control: { type: 'object' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Badge>

export const Playground: Story = {
  args: {
    badgeContent: 4,
    color: 'primary',
    variant: 'standard',
  },
  render: (args) => (
    <Badge {...args}>
      <MailIcon />
    </Badge>
  ),
}

export const Basic: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        基本
      </Typography>
      <Stack direction="row" spacing={4}>
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={10} color="secondary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={100} color="error">
          <ShoppingCartIcon />
        </Badge>
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
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="secondary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="warning">
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="info">
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="success">
          <MailIcon />
        </Badge>
      </Stack>
    </Box>
  ),
}

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          標準
        </Typography>
        <Stack direction="row" spacing={2}>
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={99} color="primary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={999} color="primary">
            <MailIcon />
          </Badge>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          ドット
        </Typography>
        <Stack direction="row" spacing={2}>
          <Badge variant="dot" color="primary">
            <MailIcon />
          </Badge>
          <Badge variant="dot" color="secondary">
            <MailIcon />
          </Badge>
          <Badge variant="dot" color="error">
            <MailIcon />
          </Badge>
        </Stack>
      </Box>
    </Box>
  ),
}

export const Max: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        最大値
      </Typography>
      <Stack direction="row" spacing={4}>
        <Badge badgeContent={99} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={100} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={1000} max={999} color="primary">
          <MailIcon />
        </Badge>
      </Stack>
    </Box>
  ),
}

export const Position: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        位置
      </Typography>
      <Stack direction="row" spacing={4}>
        <Badge
          badgeContent={4}
          color="primary"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MailIcon />
        </Badge>
        <Badge
          badgeContent={4}
          color="primary"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MailIcon />
        </Badge>
        <Badge
          badgeContent={4}
          color="primary"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <MailIcon />
        </Badge>
        <Badge
          badgeContent={4}
          color="primary"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <MailIcon />
        </Badge>
      </Stack>
    </Box>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        アバター付き
      </Typography>
      <Stack direction="row" spacing={2}>
        <Badge badgeContent={4} color="primary">
          <Avatar alt="User" src="https://i.pravatar.cc/150?img=1" />
        </Badge>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          color="success"
        >
          <Avatar alt="User" src="https://i.pravatar.cc/150?img=2" />
        </Badge>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          color="error"
        >
          <Avatar alt="User" src="https://i.pravatar.cc/150?img=3" />
        </Badge>
      </Stack>
    </Box>
  ),
}

export const Invisible: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        非表示
      </Typography>
      <Stack direction="row" spacing={4}>
        <Badge badgeContent={0} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={0} showZero color="primary">
          <MailIcon />
        </Badge>
        <Badge invisible={true} badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
      </Stack>
    </Box>
  ),
}

export const CustomContent: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        カスタムコンテンツ
      </Typography>
      <Stack direction="row" spacing={4}>
        <Badge badgeContent="new" color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent="!" color="error">
          <MailIcon />
        </Badge>
        <Badge
          badgeContent={
            <Typography variant="caption" sx={{ fontSize: '0.6rem' }}>
              99+
            </Typography>
          }
          color="secondary"
        >
          <ShoppingCartIcon />
        </Badge>
      </Stack>
    </Box>
  ),
}
