import type { Meta } from '@storybook/react'
import { TextField, Box, Typography } from '@mui/material'
import type { TextFieldProps } from '@mui/material/TextField'

const meta: Meta<typeof TextField> = {
  title: 'Mui/Form/TextField',
  component: TextField,
  // tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['outlined', 'filled', 'standard'],
      },
      defaultValue: 'outlined',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Label',
    },
    id: {
      control: {
        type: 'text',
      },
      defaultValue: 'my-text-field',
    },
  },
}

export default meta

export const Variants = {
  args: {},
  render: ({ variant, label, id }: TextFieldProps) => (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h3" gutterBottom>
        Basic TextFields
      </Typography>
      <TextField id={id} label={label} variant={variant} size="small" />
      <TextField id={id} label={label} variant={variant} />
    </Box>
  ),
  argTypes: {
    variant: {
      defaultValue: 'outlined',
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
    },
    size: {
      defaultValue: 'small',
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
  },
}
