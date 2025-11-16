/** @jsxImportSource react */
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import {
  Box,
  Button,
  ButtonGroup,
  type ButtonGroupProps,
  Typography,
} from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ButtonGroupProps> = {
  title: 'MUI/Inputs/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    color: {
      options: [
        'inherit',
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

type Story = StoryObj<ButtonGroupProps>

export const Playground: Story = {
  args: {
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    orientation: 'horizontal',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        基本
      </Typography>
      <ButtonGroup variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Box>
  ),
}

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box>
        <Typography variant='h6' gutterBottom>
          Contained
        </Typography>
        <ButtonGroup variant='contained'>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          Outlined
        </Typography>
        <ButtonGroup variant='outlined'>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          Text
        </Typography>
        <ButtonGroup variant='text'>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
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
        <ButtonGroup size='small' variant='contained'>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          Medium
        </Typography>
        <ButtonGroup size='medium' variant='contained'>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          Large
        </Typography>
        <ButtonGroup size='large' variant='contained'>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
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
      <ButtonGroup variant='contained' color='primary'>
        <Button>Primary</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup variant='contained' color='secondary'>
        <Button>Secondary</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup variant='contained' color='success'>
        <Button>Success</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup variant='contained' color='error'>
        <Button>Error</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Box>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        縦方向
      </Typography>
      <ButtonGroup orientation='vertical' variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Box>
  ),
}

export const SplitButton: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        分割ボタン
      </Typography>
      <ButtonGroup variant='contained'>
        <Button>保存</Button>
        <Button size='small'>
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
    </Box>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box>
        <Typography variant='h6' gutterBottom>
          全体無効
        </Typography>
        <ButtonGroup variant='contained' disabled>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          個別無効
        </Typography>
        <ButtonGroup variant='contained'>
          <Button>One</Button>
          <Button disabled>Two (無効)</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Box>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        全幅
      </Typography>
      <ButtonGroup variant='contained' fullWidth>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Box>
  ),
}
