/** @jsxImportSource react */
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ToggleButtonGroup> = {
  title: 'MUI/Inputs/ToggleButton',
  component: ToggleButtonGroup,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    color: {
      options: [
        'standard',
        'primary',
        'secondary',
        'success',
        'error',
        'info',
        'warning',
      ],
      control: { type: 'select' },
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<typeof ToggleButtonGroup>

const ExclusiveSelection = () => {
  const [alignment, setAlignment] = useState('left')

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
    }
  }

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label='text alignment'>
      <ToggleButton value='left' aria-label='left aligned'>
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value='center' aria-label='centered'>
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value='right' aria-label='right aligned'>
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value='justify' aria-label='justified'>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export const Playground: Story = {
  render: () => <ExclusiveSelection />,
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        基本（排他的選択）
      </Typography>
      <ExclusiveSelection />
    </Box>
  ),
}

const MultipleSelection = () => {
  const [formats, setFormats] = useState(() => ['bold', 'italic'])

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats)
  }

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label='text formatting'>
      <ToggleButton value='bold' aria-label='bold'>
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value='italic' aria-label='italic'>
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value='underlined' aria-label='underlined'>
        <FormatUnderlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export const Multiple: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        複数選択
      </Typography>
      <MultipleSelection />
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant='h6' gutterBottom>
          Small
        </Typography>
        <ToggleButtonGroup size='small' value='left' exclusive>
          <ToggleButton value='left'>
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value='center'>
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value='right'>
            <FormatAlignRightIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          Medium
        </Typography>
        <ToggleButtonGroup size='medium' value='left' exclusive>
          <ToggleButton value='left'>
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value='center'>
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value='right'>
            <FormatAlignRightIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          Large
        </Typography>
        <ToggleButtonGroup size='large' value='left' exclusive>
          <ToggleButton value='left'>
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value='center'>
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value='right'>
            <FormatAlignRightIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h6' gutterBottom>
        カラー
      </Typography>
      <ToggleButtonGroup value='left' exclusive color='primary'>
        <ToggleButton value='left'>Left</ToggleButton>
        <ToggleButton value='center'>Center</ToggleButton>
        <ToggleButton value='right'>Right</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup value='left' exclusive color='secondary'>
        <ToggleButton value='left'>Left</ToggleButton>
        <ToggleButton value='center'>Center</ToggleButton>
        <ToggleButton value='right'>Right</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup value='left' exclusive color='success'>
        <ToggleButton value='left'>Left</ToggleButton>
        <ToggleButton value='center'>Center</ToggleButton>
        <ToggleButton value='right'>Right</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup value='left' exclusive color='error'>
        <ToggleButton value='left'>Left</ToggleButton>
        <ToggleButton value='center'>Center</ToggleButton>
        <ToggleButton value='right'>Right</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        縦方向
      </Typography>
      <ToggleButtonGroup orientation='vertical' value='left' exclusive>
        <ToggleButton value='left' aria-label='left'>
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value='center' aria-label='center'>
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value='right' aria-label='right'>
          <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value='justify' aria-label='justify'>
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  ),
}

export const WithText: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        テキスト付き
      </Typography>
      <ToggleButtonGroup value='web' exclusive>
        <ToggleButton value='web'>Web</ToggleButton>
        <ToggleButton value='android'>Android</ToggleButton>
        <ToggleButton value='ios'>iOS</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  ),
}

const EnforceValueExample = () => {
  const [alignment, setAlignment] = useState<string | null>('left')

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
    }
  }

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        必ず1つ選択（選択解除不可）
      </Typography>
      <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
        <ToggleButton value='left'>Left</ToggleButton>
        <ToggleButton value='center'>Center</ToggleButton>
        <ToggleButton value='right'>Right</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}

export const EnforceValue: Story = {
  render: () => <EnforceValueExample />,
}

export const Disabled: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box>
        <Typography variant='h6' gutterBottom>
          全体無効
        </Typography>
        <ToggleButtonGroup value='left' exclusive disabled>
          <ToggleButton value='left'>Left</ToggleButton>
          <ToggleButton value='center'>Center</ToggleButton>
          <ToggleButton value='right'>Right</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          個別無効
        </Typography>
        <ToggleButtonGroup value='left' exclusive>
          <ToggleButton value='left'>Left</ToggleButton>
          <ToggleButton value='center' disabled>
            Center (無効)
          </ToggleButton>
          <ToggleButton value='right'>Right</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  ),
}
