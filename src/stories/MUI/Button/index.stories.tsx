/** @jsxImportSource react */
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { Box, Button, type ButtonProps, Typography } from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ButtonProps> = {
  title: 'Mui/Button',
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

export const Variants: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
  },
  render: (args) => (
    <>
      <Box p={4}>
        <Typography variant='h6' gutterBottom>
          ボタンバリエーション検証
        </Typography>
        <Button {...args} />
      </Box>
    </>
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
