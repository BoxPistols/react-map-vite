/** @jsxImportSource react */
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { Box, Button, type ButtonProps, Typography } from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ButtonProps> = {
  title: 'MUI/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    startIcon: {
      options: ['none', 'send', 'delete', 'add'],
      control: { type: 'select' },
      mapping: {
        none: null,
        send: <SendIcon />,
        delete: <DeleteIcon />,
        add: <AddIcon />,
      },
    },
    endIcon: {
      options: ['none', 'send', 'delete', 'add'],
      control: { type: 'select' },
      mapping: {
        none: null,
        send: <SendIcon />,
        delete: <DeleteIcon />,
        add: <AddIcon />,
      },
    },
    color: {
      options: [
        'inherit',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<ButtonProps>

export const Playground: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
  },
}

export const AllVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant='h6' gutterBottom>
          Contained
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button variant='contained'>Primary</Button>
          <Button variant='contained' color='secondary'>
            Secondary
          </Button>
          <Button variant='contained' color='success'>
            Success
          </Button>
          <Button variant='contained' color='error'>
            Error
          </Button>
          <Button variant='contained' color='warning'>
            Warning
          </Button>
          <Button variant='contained' color='info'>
            Info
          </Button>
          <Button variant='contained' disabled>
            Disabled
          </Button>
        </Box>
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          Outlined
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button variant='outlined'>Primary</Button>
          <Button variant='outlined' color='secondary'>
            Secondary
          </Button>
          <Button variant='outlined' color='success'>
            Success
          </Button>
          <Button variant='outlined' color='error'>
            Error
          </Button>
          <Button variant='outlined' color='warning'>
            Warning
          </Button>
          <Button variant='outlined' color='info'>
            Info
          </Button>
          <Button variant='outlined' disabled>
            Disabled
          </Button>
        </Box>
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          Text
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button variant='text'>Primary</Button>
          <Button variant='text' color='secondary'>
            Secondary
          </Button>
          <Button variant='text' color='success'>
            Success
          </Button>
          <Button variant='text' color='error'>
            Error
          </Button>
          <Button variant='text' color='warning'>
            Warning
          </Button>
          <Button variant='text' color='info'>
            Info
          </Button>
          <Button variant='text' disabled>
            Disabled
          </Button>
        </Box>
      </Box>
    </Box>
  ),
}

export const Contained: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
  },
}

export const Outlined: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
  },
}

export const Text: Story = {
  args: {
    children: 'Button',
    variant: 'text',
  },
}

export const StartIcon: Story = {
  args: {
    children: 'Button',
    startIcon: <SendIcon />,
    variant: 'contained',
  },
}

export const EndIcon: Story = {
  args: {
    children: 'Button',
    endIcon: <SendIcon />,
    variant: 'contained',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
    variant: 'contained',
  },
}

export const AllSizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h6' gutterBottom>
        サイズ
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Button size='small' variant='contained'>
          Small
        </Button>
        <Button size='medium' variant='contained'>
          Medium
        </Button>
        <Button size='large' variant='contained'>
          Large
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Button size='small' variant='outlined'>
          Small
        </Button>
        <Button size='medium' variant='outlined'>
          Medium
        </Button>
        <Button size='large' variant='outlined'>
          Large
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Button size='small' variant='text'>
          Small
        </Button>
        <Button size='medium' variant='text'>
          Medium
        </Button>
        <Button size='large' variant='text'>
          Large
        </Button>
      </Box>
    </Box>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant='h6' gutterBottom>
          アイコン付き
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button startIcon={<SendIcon />} variant='contained'>
            送信
          </Button>
          <Button endIcon={<SendIcon />} variant='contained'>
            送信
          </Button>
          <Button startIcon={<DeleteIcon />} variant='outlined' color='error'>
            削除
          </Button>
          <Button endIcon={<AddIcon />} variant='text'>
            追加
          </Button>
        </Box>
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          サイズ別
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button size='small' startIcon={<SendIcon />} variant='contained'>
            Small
          </Button>
          <Button size='medium' startIcon={<SendIcon />} variant='contained'>
            Medium
          </Button>
          <Button size='large' startIcon={<SendIcon />} variant='contained'>
            Large
          </Button>
        </Box>
      </Box>
    </Box>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h6' gutterBottom>
        全幅ボタン
      </Typography>
      <Button fullWidth variant='contained'>
        全幅 Contained
      </Button>
      <Button fullWidth variant='outlined'>
        全幅 Outlined
      </Button>
      <Button fullWidth variant='text'>
        全幅 Text
      </Button>
    </Box>
  ),
}

export const Custom: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    sx: {
      minWidth: 210,
      maxWidth: 480,
      color: 'dimgray',
      background: 'white',
      borderColor: 'dimgray',
      borderRadius: '3em',
      '&:hover': {
        borderColor: 'darkgray',
        background: 'lightgray',
      },
    },
  },
}
