/** @jsxImportSource react */
import { Box, Container, Paper, Typography } from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Container> = {
  title: 'MUI/Layout/Container',
  component: Container,
  argTypes: {
    maxWidth: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
      control: { type: 'select' },
    },
    fixed: {
      control: { type: 'boolean' },
    },
    disableGutters: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Container>

export const Playground: Story = {
  args: {
    maxWidth: 'lg',
    fixed: false,
    disableGutters: false,
  },
  render: (args) => (
    <Container {...args}>
      <Paper sx={{ p: 2, bgcolor: 'primary.light', color: 'white' }}>
        <Typography>Container コンポーネント</Typography>
      </Paper>
    </Container>
  ),
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        基本
      </Typography>
      <Container>
        <Paper sx={{ p: 2, bgcolor: 'primary.light', color: 'white' }}>
          <Typography>デフォルトのContainer</Typography>
        </Paper>
      </Container>
    </Box>
  ),
}

export const MaxWidth: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h6' gutterBottom>
        最大幅
      </Typography>
      <Container maxWidth='xs'>
        <Paper sx={{ p: 2, bgcolor: 'primary.light', color: 'white' }}>
          <Typography>xs Container</Typography>
        </Paper>
      </Container>
      <Container maxWidth='sm'>
        <Paper sx={{ p: 2, bgcolor: 'secondary.light', color: 'white' }}>
          <Typography>sm Container</Typography>
        </Paper>
      </Container>
      <Container maxWidth='md'>
        <Paper sx={{ p: 2, bgcolor: 'success.light', color: 'white' }}>
          <Typography>md Container</Typography>
        </Paper>
      </Container>
      <Container maxWidth='lg'>
        <Paper sx={{ p: 2, bgcolor: 'warning.light', color: 'white' }}>
          <Typography>lg Container</Typography>
        </Paper>
      </Container>
      <Container maxWidth='xl'>
        <Paper sx={{ p: 2, bgcolor: 'error.light', color: 'white' }}>
          <Typography>xl Container</Typography>
        </Paper>
      </Container>
    </Box>
  ),
}

export const Fixed: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box>
        <Typography variant='h6' gutterBottom>
          通常のContainer
        </Typography>
        <Container maxWidth='sm'>
          <Paper sx={{ p: 2, bgcolor: 'primary.light', color: 'white' }}>
            <Typography>ビューポートに応じて幅が変わります</Typography>
          </Paper>
        </Container>
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          固定Container
        </Typography>
        <Container maxWidth='sm' fixed>
          <Paper sx={{ p: 2, bgcolor: 'secondary.light', color: 'white' }}>
            <Typography>ブレークポイントで固定幅になります</Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  ),
}

export const DisableGutters: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box>
        <Typography variant='h6' gutterBottom>
          通常のパディング
        </Typography>
        <Container>
          <Paper sx={{ p: 2, bgcolor: 'primary.light', color: 'white' }}>
            <Typography>デフォルトのパディングあり</Typography>
          </Paper>
        </Container>
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          パディングなし
        </Typography>
        <Container disableGutters>
          <Paper sx={{ p: 2, bgcolor: 'secondary.light', color: 'white' }}>
            <Typography>パディングなし（disableGutters）</Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        全幅Container
      </Typography>
      <Container maxWidth={false}>
        <Paper sx={{ p: 2, bgcolor: 'primary.light', color: 'white' }}>
          <Typography>最大幅制限なし（maxWidth=false）</Typography>
        </Paper>
      </Container>
    </Box>
  ),
}

export const Nested: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        ネストされたContainer
      </Typography>
      <Container maxWidth='lg'>
        <Paper sx={{ p: 2, bgcolor: 'primary.light', color: 'white', mb: 2 }}>
          <Typography>外側のContainer (lg)</Typography>
        </Paper>
        <Container maxWidth='md'>
          <Paper sx={{ p: 2, bgcolor: 'secondary.light', color: 'white' }}>
            <Typography>内側のContainer (md)</Typography>
          </Paper>
        </Container>
      </Container>
    </Box>
  ),
}
