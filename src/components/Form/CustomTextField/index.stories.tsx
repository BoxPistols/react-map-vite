import { Box } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import { type ChangeEvent, useState } from 'react'
import React from 'react'

import CustomTextField from '.'

const meta: Meta<typeof CustomTextField> = {
  title: 'Components/CustomTextField',
  component: CustomTextField,
  tags: ['!autodocs', 'text', 'input', 'form'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    error: { control: 'boolean' },
    tooltip: { control: 'text' },
    disabled: { control: 'boolean' },
    helperText: { control: 'text' },
    size: {
      control: 'radio',
      options: ['small', 'medium'],
      defaultValue: 'medium',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 48, maxWidth: 480 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof CustomTextField>

export const Default: Story = {
  args: {
    label: 'デフォルトのテキストフィールド',
    placeholder: 'ここにテキストを入力',
  },
}

export const Small: Story = {
  args: {
    ...Default.args,
    label: '小さいサイズのテキストフィールド',
    size: 'small',
  },
}

export const Required: Story = {
  args: {
    ...Default.args,
    label: '必須のテキストフィールド',
    required: true,
  },
}

export const WithTooltip: Story = {
  args: {
    ...Default.args,
    label: 'ツールチップ付きテキストフィールド',
    tooltip: 'これは役立つツールチップです',
  },
}

export const WithError: Story = {
  args: {
    ...Default.args,
    label: 'エラー状態のテキストフィールド',
    error: true,
    helperText: 'このフィールドにはエラーがあります',
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    label: '無効化されたテキストフィールド',
    disabled: true,
  },
}

export const WithHelperText: Story = {
  args: {
    ...Default.args,
    label: 'ヘルパーテキスト付きテキストフィールド',
    helperText: 'これはヘルパーテキストです',
  },
}

export const AllFeaturesMedium: Story = {
  args: {
    label: '全機能テキストフィールド (通常サイズ)',
    placeholder: 'ここにテキストを入力',
    required: true,
    tooltip: 'このフィールドは全機能を示しています',
    error: false,
    helperText: 'このフィールドには全ての機能が有効です',
    size: 'medium',
  },
}

export const AllFeaturesSmall: Story = {
  args: {
    ...AllFeaturesMedium.args,
    label: '全機能テキストフィールド (小さいサイズ)',
    size: 'small',
  },
}

export const InteractiveExample: Story = {
  args: {
    label: 'インタラクティブなテキストフィールド',
    placeholder: '3文字以上20文字以下で入力してください',
    required: true,
    tooltip: '入力は3文字以上20文字以下である必要があります',
  },
  render: (args) => {
    const [value, setValue] = useState('')
    const [hasError, setHasError] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value
      setValue(newValue)
      setHasError(newValue.length < 3 || newValue.length > 20)
    }

    return (
      <CustomTextField
        {...args}
        value={value}
        onChange={handleChange}
        error={hasError}
        helperText={
          hasError ? '入力は3文字以上20文字以下である必要があります' : ''
        }
      />
    )
  },
}

export const SizeComparison: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <CustomTextField
        label='通常サイズのテキストフィールド'
        placeholder='ここにテキストを入力'
        size='medium'
      />
      <CustomTextField
        label='小さいサイズのテキストフィールド'
        placeholder='ここにテキストを入力'
        size='small'
      />
    </Box>
  ),
}
