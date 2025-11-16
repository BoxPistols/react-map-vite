/** @jsxImportSource react */
import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Skeleton> = {
  title: 'MUI/Feedback/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: {
      options: ['text', 'circular', 'rectangular', 'rounded'],
      control: { type: 'select' },
    },
    animation: {
      options: ['pulse', 'wave', false],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Playground: Story = {
  args: {
    variant: 'text',
    animation: 'pulse',
    width: 210,
    height: 40,
  },
  render: (args) => <Skeleton {...args} />,
}

export const Variants: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        バリエーション
      </Typography>
      <Stack spacing={1}>
        <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        <Skeleton variant='circular' width={40} height={40} />
        <Skeleton variant='rectangular' width={210} height={60} />
        <Skeleton variant='rounded' width={210} height={60} />
      </Stack>
    </Box>
  ),
}

export const Animations: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        アニメーション
      </Typography>
      <Stack spacing={1}>
        <Skeleton animation='pulse' />
        <Skeleton animation='wave' />
        <Skeleton animation={false} />
      </Stack>
    </Box>
  ),
}

export const MediaExample: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Typography variant='h6' gutterBottom>
        メディアカードの例
      </Typography>
      <Skeleton variant='rectangular' width={300} height={118} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width='60%' />
      </Box>
    </Box>
  ),
}

export const FacebookExample: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Typography variant='h6' gutterBottom>
        Facebook風
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ margin: 1 }}>
          <Skeleton variant='circular'>
            <Avatar />
          </Skeleton>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Skeleton width='100%'>
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
      <Skeleton variant='rectangular' width='100%'>
        <div style={{ paddingTop: '57%' }} />
      </Skeleton>
    </Box>
  ),
}
