/** @jsxImportSource react */
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Radio> = {
  title: 'MUI/Inputs/Radio',
  component: Radio,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    color: {
      options: [
        'default',
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

type Story = StoryObj<typeof Radio>

export const Playground: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    disabled: false,
  },
  render: (args) => <Radio {...args} />,
}

export const Basic: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Radio defaultChecked />
      <Radio />
      <Radio disabled />
      <Radio disabled checked />
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        サイズ
      </Typography>
      <Radio size="small" defaultChecked />
      <Radio size="medium" defaultChecked />
      <Radio size="large" defaultChecked />
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="h6" gutterBottom>
        カラー
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Radio defaultChecked />
        <Radio defaultChecked color="primary" />
        <Radio defaultChecked color="secondary" />
        <Radio defaultChecked color="success" />
        <Radio defaultChecked color="error" />
        <Radio defaultChecked color="warning" />
      </Box>
    </Box>
  ),
}

const RadioGroupExampleComponent = () => {
  const [value, setValue] = useState('option1')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">オプション</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={value}
        onChange={handleChange}
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="option1"
          control={<Radio />}
          label="オプション 1"
        />
        <FormControlLabel
          value="option2"
          control={<Radio />}
          label="オプション 2"
        />
        <FormControlLabel
          value="option3"
          control={<Radio />}
          label="オプション 3"
        />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="無効なオプション"
        />
      </RadioGroup>
    </FormControl>
  )
}

export const RadioGroupExample: Story = {
  render: () => <RadioGroupExampleComponent />,
}

export const Direction: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          縦方向
        </Typography>
        <RadioGroup defaultValue="vertical1">
          <FormControlLabel
            value="vertical1"
            control={<Radio />}
            label="縦方向 1"
          />
          <FormControlLabel
            value="vertical2"
            control={<Radio />}
            label="縦方向 2"
          />
          <FormControlLabel
            value="vertical3"
            control={<Radio />}
            label="縦方向 3"
          />
        </RadioGroup>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          横方向
        </Typography>
        <RadioGroup row defaultValue="horizontal1">
          <FormControlLabel
            value="horizontal1"
            control={<Radio />}
            label="横方向 1"
          />
          <FormControlLabel
            value="horizontal2"
            control={<Radio />}
            label="横方向 2"
          />
          <FormControlLabel
            value="horizontal3"
            control={<Radio />}
            label="横方向 3"
          />
        </RadioGroup>
      </Box>
    </Box>
  ),
}

export const WithHelperText: Story = {
  render: () => (
    <FormControl>
      <FormLabel id="payment-method-label">支払い方法</FormLabel>
      <RadioGroup
        aria-labelledby="payment-method-label"
        defaultValue="credit"
        name="payment-method-group"
      >
        <FormControlLabel
          value="credit"
          control={<Radio />}
          label="クレジットカード"
        />
        <FormControlLabel value="bank" control={<Radio />} label="銀行振込" />
        <FormControlLabel
          value="convenience"
          control={<Radio />}
          label="コンビニ決済"
        />
      </RadioGroup>
      <FormHelperText>支払い方法を選択してください</FormHelperText>
    </FormControl>
  ),
}

const ErrorStateExample = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    setError(false)
  }

  const handleSubmit = () => {
    if (!value) {
      setError(true)
    }
  }

  return (
    <FormControl error={error}>
      <FormLabel id="required-radio-group-label">
        必須項目 <span style={{ color: 'red' }}>*</span>
      </FormLabel>
      <RadioGroup
        aria-labelledby="required-radio-group-label"
        value={value}
        onChange={handleChange}
        name="required-radio-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="はい" />
        <FormControlLabel value="no" control={<Radio />} label="いいえ" />
      </RadioGroup>
      {error && <FormHelperText>この項目は必須です</FormHelperText>}
    </FormControl>
  )
}

export const ErrorState: Story = {
  render: () => <ErrorStateExample />,
}
