/** @jsxImportSource react */
import { Box, Button, Popover, Typography } from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Popover> = {
  title: 'MUI/Utils/Popover',
  component: Popover,
  argTypes: {
    anchorOrigin: {
      control: { type: 'object' },
    },
    transformOrigin: {
      control: { type: 'object' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Popover>

const BasicPopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <div>
      <Button onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>Popoverのコンテンツ</Typography>
      </Popover>
    </div>
  )
}

export const Playground: Story = {
  render: () => <BasicPopover />,
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        基本
      </Typography>
      <BasicPopover />
    </Box>
  ),
}

const PositioningExample = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [position, setPosition] = useState<{ vertical: 'top' | 'bottom', horizontal: 'left' | 'right' }>({
    vertical: 'bottom',
    horizontal: 'left',
  })

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, vert: 'top' | 'bottom', horiz: 'left' | 'right') => {
    setAnchorEl(event.currentTarget)
    setPosition({ vertical: vert, horizontal: horiz })
  }

  const open = Boolean(anchorEl)

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        位置指定
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Button onClick={(e) => handleClick(e, 'top', 'left')}>
          Top-Left
        </Button>
        <Button onClick={(e) => handleClick(e, 'top', 'right')}>
          Top-Right
        </Button>
        <Button onClick={(e) => handleClick(e, 'bottom', 'left')}>
          Bottom-Left
        </Button>
        <Button onClick={(e) => handleClick(e, 'bottom', 'right')}>
          Bottom-Right
        </Button>
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={position}
      >
        <Typography sx={{ p: 2 }}>
          {position.vertical}-{position.horizontal}
        </Typography>
      </Popover>
    </Box>
  )
}

export const Positioning: Story = {
  render: () => <PositioningExample />,
}
