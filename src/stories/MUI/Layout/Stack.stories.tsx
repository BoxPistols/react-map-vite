/** @jsxImportSource react */
import { Box, Divider, Paper, Stack, Typography } from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Stack> = {
  title: 'MUI/Layout/Stack',
  component: Stack,
  argTypes: {
    direction: {
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      control: { type: 'select' },
    },
    spacing: {
      control: { type: 'number', min: 0, max: 10 },
    },
  },
}

export default meta

type Story = StoryObj<typeof Stack>

const Item = ({ children }: { children: React.ReactNode }) => (
  <Paper
    sx={{
      p: 2,
      textAlign: 'center',
      bgcolor: 'primary.light',
      color: 'white',
    }}
  >
    {children}
  </Paper>
)

export const Playground: Story = {
  args: {
    direction: 'row',
    spacing: 2,
  },
  render: (args) => (
    <Stack {...args}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  ),
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        基本
      </Typography>
      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>
  ),
}

export const Direction: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          column (デフォルト)
        </Typography>
        <Stack direction="column" spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          row
        </Typography>
        <Stack direction="row" spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          row-reverse
        </Typography>
        <Stack direction="row-reverse" spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          column-reverse
        </Typography>
        <Stack direction="column-reverse" spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>
    </Box>
  ),
}

export const Spacing: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          spacing=0
        </Typography>
        <Stack spacing={0}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          spacing=2
        </Typography>
        <Stack spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          spacing=4
        </Typography>
        <Stack spacing={4}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>
    </Box>
  ),
}

export const Dividers: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        区切り線付き
      </Typography>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
      <Box sx={{ mt: 4 }}>
        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={2}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>
    </Box>
  ),
}

export const Responsive: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        レスポンシブ
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>
  ),
}

export const FlexboxProps: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          alignItems - flex-start
        </Typography>
        <Stack direction="row" spacing={2} alignItems="flex-start">
          <Item>Item 1</Item>
          <Paper sx={{ p: 4, bgcolor: 'secondary.light', color: 'white' }}>
            Item 2 (tall)
          </Paper>
          <Item>Item 3</Item>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          alignItems - center
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Item>Item 1</Item>
          <Paper sx={{ p: 4, bgcolor: 'secondary.light', color: 'white' }}>
            Item 2 (tall)
          </Paper>
          <Item>Item 3</Item>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          justifyContent - space-between
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          sx={{ width: '100%' }}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Box>
    </Box>
  ),
}

export const UseFlexGap: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        useFlexGap
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        useFlexGap
        flexWrap="wrap"
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
        <Item>Item 6</Item>
        <Item>Item 7</Item>
        <Item>Item 8</Item>
      </Stack>
    </Box>
  ),
}
