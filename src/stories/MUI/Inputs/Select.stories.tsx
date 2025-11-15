/** @jsxImportSource react */
import {
  Box,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  type SelectChangeEvent,
  type SelectProps,
  Typography,
} from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<SelectProps> = {
  title: 'MUI/Inputs/Select',
  component: Select,
  argTypes: {
    variant: {
      options: ['outlined', 'filled', 'standard'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<SelectProps>

export const Playground: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    disabled: false,
    fullWidth: false,
  },
  render: (args) => (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel id="playground-select-label">選択</InputLabel>
      <Select
        {...args}
        labelId="playground-select-label"
        id="playground-select"
        label="選択"
        defaultValue={10}
      >
        <MenuItem value={10}>オプション 1</MenuItem>
        <MenuItem value={20}>オプション 2</MenuItem>
        <MenuItem value={30}>オプション 3</MenuItem>
      </Select>
    </FormControl>
  ),
}

const VariantsExample = () => {
  const [age, setAge] = useState('')

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        バリエーション
      </Typography>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="outlined-label">Outlined</InputLabel>
        <Select
          labelId="outlined-label"
          value={age}
          label="Outlined"
          onChange={(e) => setAge(e.target.value)}
        >
          <MenuItem value={10}>10代</MenuItem>
          <MenuItem value={20}>20代</MenuItem>
          <MenuItem value={30}>30代</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="filled" sx={{ minWidth: 200 }}>
        <InputLabel id="filled-label">Filled</InputLabel>
        <Select
          labelId="filled-label"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        >
          <MenuItem value={10}>10代</MenuItem>
          <MenuItem value={20}>20代</MenuItem>
          <MenuItem value={30}>30代</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ minWidth: 200 }}>
        <InputLabel id="standard-label">Standard</InputLabel>
        <Select
          labelId="standard-label"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        >
          <MenuItem value={10}>10代</MenuItem>
          <MenuItem value={20}>20代</MenuItem>
          <MenuItem value={30}>30代</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export const Variants: Story = {
  render: () => <VariantsExample />,
}

const WithHelperTextExample = () => {
  const [value, setValue] = useState('')

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        ヘルパーテキスト
      </Typography>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="helper-label">年齢層</InputLabel>
        <Select
          labelId="helper-label"
          value={value}
          label="年齢層"
          onChange={(e) => setValue(e.target.value)}
        >
          <MenuItem value={10}>10代</MenuItem>
          <MenuItem value={20}>20代</MenuItem>
          <MenuItem value={30}>30代</MenuItem>
          <MenuItem value={40}>40代</MenuItem>
        </Select>
        <FormHelperText>年齢層を選択してください</FormHelperText>
      </FormControl>

      <FormControl error sx={{ minWidth: 200 }}>
        <InputLabel id="error-label">必須項目</InputLabel>
        <Select labelId="error-label" label="必須項目" value="">
          <MenuItem value={1}>選択肢 1</MenuItem>
          <MenuItem value={2}>選択肢 2</MenuItem>
        </Select>
        <FormHelperText>この項目は必須です</FormHelperText>
      </FormControl>
    </Box>
  )
}

export const WithHelperText: Story = {
  render: () => <WithHelperTextExample />,
}

const names = [
  'JavaScript',
  'TypeScript',
  'React',
  'Vue',
  'Angular',
  'Svelte',
]

const MultipleExample = () => {
  const [selectedNames, setSelectedNames] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof selectedNames>) => {
    const {
      target: { value },
    } = event
    setSelectedNames(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        複数選択
      </Typography>
      <FormControl sx={{ minWidth: 300 }}>
        <InputLabel id="multiple-select-label">技術スタック</InputLabel>
        <Select
          labelId="multiple-select-label"
          multiple
          value={selectedNames}
          onChange={handleChange}
          label="技術スタック"
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export const Multiple: Story = {
  render: () => <MultipleExample />,
}

const MultipleWithChipsExample = () => {
  const [selectedNames, setSelectedNames] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof selectedNames>) => {
    const {
      target: { value },
    } = event
    setSelectedNames(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        複数選択（チップ表示）
      </Typography>
      <FormControl sx={{ minWidth: 300 }}>
        <InputLabel id="chip-select-label">技術スタック</InputLabel>
        <Select
          labelId="chip-select-label"
          multiple
          value={selectedNames}
          onChange={handleChange}
          input={<OutlinedInput label="技術スタック" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} size="small" />
              ))}
            </Box>
          )}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export const MultipleWithChips: Story = {
  render: () => <MultipleWithChipsExample />,
}

const NativeExample = () => {
  const [value, setValue] = useState('')

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        ネイティブセレクト
      </Typography>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel htmlFor="native-select">年齢</InputLabel>
        <Select
          native
          value={value}
          onChange={(e) => setValue(e.target.value as string)}
          inputProps={{
            id: 'native-select',
          }}
          label="年齢"
        >
          <option aria-label="None" value="" />
          <option value={10}>10代</option>
          <option value={20}>20代</option>
          <option value={30}>30代</option>
          <option value={40}>40代</option>
        </Select>
      </FormControl>
    </Box>
  )
}

export const Native: Story = {
  render: () => <NativeExample />,
}

export const Disabled: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        無効状態
      </Typography>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="disabled-label">選択</InputLabel>
        <Select
          labelId="disabled-label"
          disabled
          value={10}
          label="選択"
        >
          <MenuItem value={10}>オプション 1</MenuItem>
          <MenuItem value={20}>オプション 2</MenuItem>
        </Select>
      </FormControl>
    </Box>
  ),
}
