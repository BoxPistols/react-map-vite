import { Box } from '@mui/material'
import type { SelectChangeEvent } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import type { ReactNode } from 'react'
import { CustomSelect } from '.'

const meta: Meta<typeof CustomSelect> = {
  title: 'Components/Form/CustomSelect',
  component: CustomSelect,
  tags: ['autodocs', 'select', 'input', 'form'],
  parameters: {
    // themeSwitcherIconColor: 'black',
    showThemeSwitcher: false,
    themeSwitcherPosition: 'right-top',
  },
  argTypes: {
    label: { control: 'text' },
    required: { control: 'boolean' },
    error: { control: 'boolean' },
    tooltip: { control: 'text' },
    disabled: { control: 'boolean' },
    helperText: { control: 'text' },
    placeholder: { control: 'text' },
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
}

export const Small: Story = {
  args: {
    ...Default.args,
    label: '小さいサイズのセレクト',
    size: 'small',
  },
}

export const Required: Story = {
  args: {
    ...Default.args,
    label: '必須のセレクト',
    required: true,
  },
}

export const WithTooltip: Story = {
  args: {
    ...Default.args,
    label: 'ツールチップ付きセレクト',
    tooltip: 'これは役立つツールチップです',
  },
}

export const WithError: Story = {
  args: {
    ...Default.args,
    label: 'エラー状態のセレクト',
    error: true,
    helperText: 'このフィールドにはエラーがあります',
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    label: '無効化されたセレクト',
    disabled: true,
  },
}

export const WithHelperText: Story = {
  args: {
    ...Default.args,
    label: 'ヘルパーテキスト付きセレクト',
    helperText: 'これはヘルパーテキストです',
  },
}

export const WithPlaceholder: Story = {
  args: {
    ...Default.args,
    label: 'プレースホルダー付きセレクト',
    placeholder: 'オプションを選択してください',
  },
}

export const AllFeaturesMedium: Story = {
  args: {
    label: '全機能セレクト (通常サイズ)',
    options: defaultOptions,
    required: true,
    tooltip: 'このフィールドは全機能を示しています',
    error: false,
    helperText: 'このフィールドには全ての機能が有効です',
    placeholder: '選択してください',
    size: 'medium',
  },
}

export const AllFeaturesSmall: Story = {
  args: {
    ...AllFeaturesMedium.args,
    label: '全機能セレクト (小さいサイズ)',
    size: 'small',
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
  render: (args) => {
    const [value, setValue] = useState('')
    const [hasError, setHasError] = useState(false)

    const handleChange = (
      event: SelectChangeEvent<unknown>,
      _child: ReactNode
    ) => {
      const newValue = event.target.value as string
      setValue(newValue)
      setHasError(newValue === 'option2' || newValue === 'option3')
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
        label='小さいサイズのセレクト'
        options={defaultOptions}
        size='small'
        placeholder='選択してください'
      />
    </Box>
  ),
}
