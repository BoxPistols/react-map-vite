/** @jsxImportSource react */
import VolumeDown from '@mui/icons-material/VolumeDown'
import VolumeUp from '@mui/icons-material/VolumeUp'
import { Box, Slider, Stack, Typography } from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Slider> = {
  title: 'MUI/Inputs/Slider',
  component: Slider,
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Slider>

export const Playground: Story = {
  args: {
    defaultValue: 50,
    size: 'medium',
    color: 'primary',
    disabled: false,
    orientation: 'horizontal',
  },
  render: (args) => (
    <Box sx={{ width: 300 }}>
      <Slider {...args} />
    </Box>
  ),
}

export const Basic: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Typography variant="h6" gutterBottom>
        基本
      </Typography>
      <Slider defaultValue={30} />
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box sx={{ width: 300, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          小
        </Typography>
        <Slider size="small" defaultValue={30} />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          中（デフォルト）
        </Typography>
        <Slider defaultValue={50} />
      </Box>
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Box sx={{ width: 300, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        カラー
      </Typography>
      <Slider defaultValue={30} color="primary" />
      <Slider defaultValue={40} color="secondary" />
      <Slider defaultValue={50} color="success" />
      <Slider defaultValue={60} color="error" />
      <Slider defaultValue={70} color="warning" />
    </Box>
  ),
}

export const Discrete: Story = {
  render: () => (
    <Box sx={{ width: 300, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          離散値
        </Typography>
        <Slider
          defaultValue={30}
          step={10}
          marks
          min={0}
          max={100}
          valueLabelDisplay="auto"
        />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          カスタムマーク
        </Typography>
        <Slider
          defaultValue={20}
          step={null}
          marks={[
            { value: 0, label: '0°C' },
            { value: 20, label: '20°C' },
            { value: 37, label: '37°C' },
            { value: 100, label: '100°C' },
          ]}
          valueLabelDisplay="auto"
        />
      </Box>
    </Box>
  ),
}

const RangeExample = () => {
  const [value, setValue] = useState<number[]>([20, 37])

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="h6" gutterBottom>
        範囲選択
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={100}
      />
      <Typography variant="body2" sx={{ mt: 2 }}>
        選択範囲: {value[0]} - {value[1]}
      </Typography>
    </Box>
  )
}

export const Range: Story = {
  render: () => <RangeExample />,
}

const WithInputExample = () => {
  const [value, setValue] = useState<number>(30)

  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="h6" gutterBottom>
        入力フィールド付き
      </Typography>
      <Stack spacing={2} direction="row" alignItems="center">
        <VolumeDown />
        <Slider
          value={value}
          onChange={(_, newValue) => setValue(newValue as number)}
        />
        <VolumeUp />
      </Stack>
      <Typography variant="body2" sx={{ mt: 2 }}>
        音量: {value}%
      </Typography>
    </Box>
  )
}

export const WithInput: Story = {
  render: () => <WithInputExample />,
}

export const Vertical: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          縦向き
        </Typography>
        <Slider
          orientation="vertical"
          defaultValue={30}
          sx={{ height: 200 }}
          valueLabelDisplay="auto"
        />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          縦向き（範囲選択）
        </Typography>
        <Slider
          orientation="vertical"
          defaultValue={[20, 37]}
          sx={{ height: 200 }}
          valueLabelDisplay="auto"
        />
      </Box>
    </Box>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Typography variant="h6" gutterBottom>
        無効状態
      </Typography>
      <Slider defaultValue={30} disabled />
    </Box>
  ),
}

export const CustomMarks: Story = {
  render: () => {
    const marks = [
      { value: 0, label: '最小' },
      { value: 25, label: '小' },
      { value: 50, label: '中' },
      { value: 75, label: '大' },
      { value: 100, label: '最大' },
    ]

    return (
      <Box sx={{ width: 300 }}>
        <Typography variant="h6" gutterBottom>
          カスタムラベル
        </Typography>
        <Slider
          defaultValue={50}
          step={null}
          marks={marks}
          valueLabelDisplay="auto"
        />
      </Box>
    )
  },
}
