import SendIcon from '@mui/icons-material/Send'
import {
  Button,
  type ButtonProps,
  type Theme,
  Typography,
  useTheme,
} from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'

interface CustomButtonProps extends ButtonProps {
  colorShade: 'main' | 'dark' | 'light' | 'lighter'
}

const meta: Meta<CustomButtonProps> = {
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
    colorShade: {
      options: ['main', 'dark', 'light', 'lighter'],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<CustomButtonProps>

const getColorShade = (
  theme: Theme,
  color: keyof Theme['palette'] | 'inherit',
  shade: keyof Theme['palette'][keyof Theme['palette']]
) => {
  if (color === 'inherit' || !theme.palette[color]) return undefined
  return theme.palette[color][shade]
}

export const Variants: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    colorShade: 'light',
  },
  render: (args) => {
    const theme = useTheme()
    const color = getColorShade(
      theme,
      args.color as keyof Theme['palette'] | 'inherit',
      args.colorShade as keyof Theme['palette'][keyof Theme['palette']]
    )
    const textColor =
      args.colorShade === 'lighter' ? theme.palette.text.primary : undefined

    return (
      <>
        <Typography variant='body2' gutterBottom>
          Buttonバリエーション検証
        </Typography>
        <Button
          {...args}
          sx={{
            backgroundColor: args.variant === 'contained' ? color : undefined,
            color: textColor,
          }}
        />
      </>
    )
  },
}

export const Contained: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
    colorShade: 'main',
  },
}

export const Outlined: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    colorShade: 'main',
  },
}

export const Text: Story = {
  args: {
    children: 'Button',
    variant: 'text',
    colorShade: 'main',
  },
}

export const StartIcon: Story = {
  args: {
    children: 'Button',
    startIcon: <SendIcon />,
    variant: 'contained',
    colorShade: 'main',
  },
}

export const ErrorButton: Story = {
  args: {
    children: 'Button',
    color: 'error',
    variant: 'contained',
    colorShade: 'main',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
    variant: 'contained',
    colorShade: 'main',
    sx: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
}

export const Custom: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    colorShade: 'main',
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
