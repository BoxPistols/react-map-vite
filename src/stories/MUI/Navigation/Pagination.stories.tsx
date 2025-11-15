/** @jsxImportSource react */
import { Box, Pagination, Stack, Typography } from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Pagination> = {
  title: 'MUI/Navigation/Pagination',
  component: Pagination,
  argTypes: {
    variant: {
      options: ['text', 'outlined'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary', 'standard'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    shape: {
      options: ['circular', 'rounded'],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Playground: Story = {
  args: {
    count: 10,
    variant: 'text',
    color: 'primary',
    size: 'medium',
    shape: 'circular',
  },
  render: (args) => <Pagination {...args} />,
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        基本
      </Typography>
      <Stack spacing={2}>
        <Pagination count={10} />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} disabled />
      </Stack>
    </Box>
  ),
}

export const Variants: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        バリエーション
      </Typography>
      <Stack spacing={2}>
        <Pagination count={10} variant="text" />
        <Pagination count={10} variant="outlined" />
      </Stack>
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        サイズ
      </Typography>
      <Stack spacing={2}>
        <Pagination count={10} size="small" />
        <Pagination count={10} size="medium" />
        <Pagination count={10} size="large" />
      </Stack>
    </Box>
  ),
}

export const Shapes: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        形状
      </Typography>
      <Stack spacing={2}>
        <Pagination count={10} shape="circular" />
        <Pagination count={10} shape="rounded" />
      </Stack>
    </Box>
  ),
}

const ControlledExample = () => {
  const [page, setPage] = useState(1)

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        制御されたPagination
      </Typography>
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={10}
          page={page}
          onChange={(event, value) => setPage(value)}
        />
      </Stack>
    </Box>
  )
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
}

export const Ranges: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        範囲
      </Typography>
      <Stack spacing={2}>
        <Pagination count={11} defaultPage={6} siblingCount={0} />
        <Pagination count={11} defaultPage={6} />
        <Pagination count={11} defaultPage={6} siblingCount={2} />
      </Stack>
    </Box>
  ),
}

export const Boundaries: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        境界表示数
      </Typography>
      <Stack spacing={2}>
        <Pagination count={11} defaultPage={6} boundaryCount={0} />
        <Pagination count={11} defaultPage={6} boundaryCount={1} />
        <Pagination count={11} defaultPage={6} boundaryCount={2} />
      </Stack>
    </Box>
  ),
}

export const Buttons: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        ボタン
      </Typography>
      <Stack spacing={2}>
        <Pagination count={10} showFirstButton showLastButton />
        <Pagination count={10} hidePrevButton hideNextButton />
      </Stack>
    </Box>
  ),
}
