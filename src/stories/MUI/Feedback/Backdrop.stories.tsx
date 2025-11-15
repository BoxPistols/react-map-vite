/** @jsxImportSource react */
import { Backdrop, Box, Button, CircularProgress, Typography } from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Backdrop> = {
  title: 'MUI/Feedback/Backdrop',
  component: Backdrop,
}

export default meta

type Story = StoryObj<typeof Backdrop>

const BasicExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Button onClick={() => setOpen(!open)}>Show backdrop</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => setOpen(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  )
}

export const Playground: Story = {
  render: () => <BasicExample />,
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        基本
      </Typography>
      <BasicExample />
    </Box>
  ),
}

export const WithMessage: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          メッセージ付き
        </Typography>
        <Button onClick={() => setOpen(!open)}>Show backdrop</Button>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <Box sx={{ textAlign: 'center' }}>
            <CircularProgress color="inherit" />
            <Typography sx={{ mt: 2 }}>読み込み中...</Typography>
          </Box>
        </Backdrop>
      </Box>
    )
  },
}
