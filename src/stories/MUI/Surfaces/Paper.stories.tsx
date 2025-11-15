/** @jsxImportSource react */
import { Box, Paper, Stack, Typography } from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Paper> = {
  title: 'MUI/Surfaces/Paper',
  component: Paper,
  argTypes: {
    elevation: {
      control: { type: 'number', min: 0, max: 24 },
    },
    variant: {
      options: ['elevation', 'outlined'],
      control: { type: 'select' },
    },
    square: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Paper>

export const Playground: Story = {
  args: {
    elevation: 3,
    variant: 'elevation',
    square: false,
  },
  render: (args) => (
    <Paper {...args} sx={{ p: 2, width: 200, height: 100 }}>
      <Typography>Paper コンポーネント</Typography>
    </Paper>
  ),
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        基本
      </Typography>
      <Paper sx={{ p: 2, width: 200 }}>
        <Typography>基本的な Paper</Typography>
      </Paper>
    </Box>
  ),
}

export const Elevations: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        影の高さ (Elevation)
      </Typography>
      <Stack direction='row' spacing={2} flexWrap='wrap' useFlexGap>
        {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
          <Paper
            key={elevation}
            elevation={elevation}
            sx={{
              p: 2,
              width: 100,
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Typography variant='body2' align='center'>
              elevation={elevation}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  ),
}

export const Variants: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        バリエーション
      </Typography>
      <Stack spacing={2}>
        <Paper variant='elevation' sx={{ p: 2 }}>
          <Typography>Elevation (デフォルト)</Typography>
        </Paper>
        <Paper variant='outlined' sx={{ p: 2 }}>
          <Typography>Outlined</Typography>
        </Paper>
      </Stack>
    </Box>
  ),
}

export const Square: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        角丸の有無
      </Typography>
      <Stack direction='row' spacing={2}>
        <Paper sx={{ p: 2, width: 150, height: 100 }}>
          <Typography variant='body2'>角丸あり (デフォルト)</Typography>
        </Paper>
        <Paper square sx={{ p: 2, width: 150, height: 100 }}>
          <Typography variant='body2'>角丸なし (square)</Typography>
        </Paper>
      </Stack>
    </Box>
  ),
}

export const WithContent: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        コンテンツ付き
      </Typography>
      <Stack spacing={2}>
        <Paper sx={{ p: 3 }}>
          <Typography variant='h6' gutterBottom>
            見出し
          </Typography>
          <Typography variant='body1'>
            Paper コンポーネントはコンテンツをグループ化するのに適しています。
            適切なパディングと影により、コンテンツが浮き上がって見えます。
          </Typography>
        </Paper>
      </Stack>
    </Box>
  ),
}

export const CustomBackground: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        カスタム背景色
      </Typography>
      <Stack spacing={2}>
        <Paper
          sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
          <Typography>Primary 背景</Typography>
        </Paper>
        <Paper
          sx={{
            p: 2,
            bgcolor: 'secondary.main',
            color: 'secondary.contrastText',
          }}>
          <Typography>Secondary 背景</Typography>
        </Paper>
        <Paper
          sx={{ p: 2, bgcolor: 'error.main', color: 'error.contrastText' }}>
          <Typography>Error 背景</Typography>
        </Paper>
        <Paper
          sx={{ p: 2, bgcolor: 'success.main', color: 'success.contrastText' }}>
          <Typography>Success 背景</Typography>
        </Paper>
      </Stack>
    </Box>
  ),
}

export const NestedPaper: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        ネストされた Paper
      </Typography>
      <Paper sx={{ p: 3 }} elevation={3}>
        <Typography variant='h6' gutterBottom>
          外側の Paper
        </Typography>
        <Paper sx={{ p: 2, mt: 2 }} elevation={6}>
          <Typography>内側の Paper (高い elevation)</Typography>
        </Paper>
      </Paper>
    </Box>
  ),
}

export const Grid: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        グリッドレイアウト
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: 2,
        }}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Paper
            key={item}
            sx={{
              p: 2,
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            elevation={2}>
            <Typography>アイテム {item}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  ),
}
