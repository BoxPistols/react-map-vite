import { Box } from '@mui/material'
import type { SelectChangeEvent } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import React from 'react'

import { CustomSelect } from '.'

const meta: Meta<typeof CustomSelect> = {
  title: 'Components/CustomSelect',
  component: CustomSelect,
  tags: ['autodocs', 'select', 'input', 'form'],
  argTypes: {
    label: { control: 'text' },
    required: { control: 'boolean' },
    error: { control: 'boolean' },
    tooltip: { control: 'text' },
    disabled: { control: 'boolean' },
    helperText: { control: 'text' },
    placeholder: { control: 'text' },
    multiple: { control: 'boolean' },
    size: {
      control: 'radio',
      options: ['small', 'medium'],
      defaultValue: 'medium',
    },
    options: { control: 'object' },
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
type Story = StoryObj<typeof CustomSelect>

const defaultOptions = [
  { value: 'option1', label: 'オプション1' },
  { value: 'option2', label: 'オプション2' },
  { value: 'option3', label: 'オプション3' },
]

export const Default: Story = {
  args: {
    label: 'デフォルトのセレクト',
    options: defaultOptions,
    placeholder: '選択してください',
  },
  parameters: {
    docs: {
      description: {
        story: 'デフォルトのセレクトコンポーネント',
      },
    },
  },
}

export const Multiple: Story = {
  args: {
    ...Default.args,
    label: '複数選択可能なセレクト',
    multiple: true,
    placeholder: '複数選択可能です',
  },
  parameters: {
    docs: {
      description: {
        story: '複数選択可能なセレクトコンポーネント',
      },
    },
  },
}

export const Small: Story = {
  args: {
    ...Default.args,
    label: '小さいサイズのセレクト',
    size: 'small',
  },
  parameters: {
    docs: {
      description: {
        story: '小さいサイズのセレクトコンポーネント',
      },
    },
  },
}

export const Required: Story = {
  args: {
    ...Default.args,
    label: '必須のセレクト',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: '必須のセレクトコンポーネント',
      },
    },
  },
}

export const WithTooltip: Story = {
  args: {
    ...Default.args,
    label: 'ツールチップ付きセレクト',
    tooltip: 'これは役立つツールチップです',
  },
  parameters: {
    docs: {
      description: {
        story: 'ツールチップ付きセレクトコンポーネント',
      },
    },
  },
}

export const WithError: Story = {
  args: {
    ...Default.args,
    label: 'エラー状態のセレクト',
    error: true,
    helperText: 'このフィールドにはエラーがあります',
  },
  parameters: {
    docs: {
      description: {
        story: 'エラー状態のセレクトコンポーネント',
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    label: '無効化されたセレクト',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: '無効化されたセレクトコンポーネント',
      },
    },
  },
}

export const WithPlaceholder: Story = {
  args: {
    ...Default.args,
    label: 'プレースホルダー付きセレクト',
    placeholder: 'オプションを選択してください',
  },
  parameters: {
    docs: {
      description: {
        story: 'プレースホルダー付きセレクトコンポーネント',
      },
    },
  },
}

export const AllFeaturesMedium: Story = {
  args: {
    label: 'ALL FEATURES',
    options: defaultOptions,
    required: true,
    multiple: true,
    tooltip: 'このフィールドは全機能を示しています',
    error: false,
    helperText: 'このフィールドは全ての機能が有効です',
    placeholder: '選択してください',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Multiple, Required, Tooltip, Error, Disabled, Placeholder<br/>留意点として、複数かつ必須の場合は入力後の全て解除を防止してます',
      },
    },
  },
}

export const InteractiveExample: Story = {
  args: {
    label: 'オプション2 or 3を選択するとエラーになります',
    required: true,
    tooltip: '選択肢を変更すると状態が更新されます',
    options: defaultOptions,
    placeholder: '選択してください',
  },
  parameters: {
    docs: {
      description: {
        story: 'インタラクティブなセレクトコンポーネント',
      },
    },
  },
  render: (args) => {
    const [value, setValue] = useState<string | string[]>('')
    const [hasError, setHasError] = useState(false)

    // これは意図的にエラーを発生させるための処理です
    const handleChange = (
      _event: SelectChangeEvent<unknown>,
      value: string | string[] | number | number[]
    ) => {
      setValue(value as string | string[])
      if (Array.isArray(value)) {
        setHasError(value.some((v) => v === 'option2' || v === 'option3'))
      } else {
        setHasError(value === 'option2' || value === 'option3')
      }
    }

    return (
      <CustomSelect
        {...args}
        value={value}
        onChange={handleChange}
        error={hasError}
        helperText={hasError ? 'この選択をするとエラーになります' : ''}
      />
    )
  },
}

export const InteractiveMultipleExample: Story = {
  args: {
    label: '2つ以上選択するとエラーになります',
    required: true,
    multiple: true,
    tooltip: '複数の選択肢を変更すると状態が更新されます',
    options: defaultOptions,
    placeholder: '複数選択可能です',
  },
  parameters: {
    docs: {
      description: {
        story: 'インタラクティブな複数選択セレクトコンポーネント',
      },
    },
  },
  render: (args) => {
    const [value, setValue] = useState<string[]>([])
    const [hasError, setHasError] = useState(false)
    // これは、意図的にエラーを発生させるための処理です
    const handleChange = (
      _event: SelectChangeEvent<unknown>,
      value: string | string[] | number | number[]
    ) => {
      const newValue = value as string[]
      setValue(newValue)
      setHasError(newValue.length > 1)
    }

    return (
      <CustomSelect
        {...args}
        value={value}
        onChange={handleChange}
        error={hasError}
        helperText={
          hasError
            ? '2つ以上の項目を選択することはできません'
            : '1つまで選択可能です'
        }
      />
    )
  },
}

export const SizeComparison: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <CustomSelect
        label='通常サイズのセレクト'
        options={defaultOptions}
        size='medium'
        placeholder='選択してください'
      />
      <CustomSelect
        label='小さいサイズの複数選択セレクト'
        options={defaultOptions}
        size='small'
        multiple
        placeholder='複数選択可能です'
      />
    </Box>
  ),
}
