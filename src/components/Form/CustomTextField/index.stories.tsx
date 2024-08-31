import type { Meta, StoryObj } from '@storybook/react'
import { type ChangeEvent, useState } from 'react'
import CustomTextField from '.'

const meta: Meta<typeof CustomTextField> = {
  title: 'Components/CustomTextField',
  component: CustomTextField,
  tags: ['!autodocs', 'text', 'input', 'form'],
  parameters: {
    // docs: { disable: true },
    showThemeSwitcher: true,
    themeSwitcherIconColor: 'black',
    themeSwitcherPosition: 'rigt-top',
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    error: { control: 'boolean' },
    tooltip: { control: 'text' },
    disabled: { control: 'boolean' },
    helperText: { control: 'text' },
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
    label: 'Default TextField',
    placeholder: 'Enter text here',
  },
}

export const Required: Story = {
  args: {
    ...Default.args,
    label: 'Required TextField',
    required: true,
  },
}

export const WithTooltip: Story = {
  args: {
    ...Default.args,
    label: 'TextField with Tooltip',
    tooltip: 'This is a helpful tooltip',
  },
}

export const WithError: Story = {
  args: {
    ...Default.args,
    label: 'TextField with Error',
    error: true,
    helperText: 'This field has an error',
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    label: 'Disabled TextField',
    disabled: true,
  },
}

export const WithHelperText: Story = {
  args: {
    ...Default.args,
    label: 'TextField with Helper Text',
    helperText: 'This is some helper text',
  },
}

export const AllFeatures: Story = {
  args: {
    label: 'All Features TextField',
    placeholder: 'Enter text here',
    required: true,
    tooltip: 'This field demonstrates all features',
    error: false,
    helperText: 'This field has all features enabled',
  },
}

export const InteractiveExample: Story = {
  args: {
    label: 'Interactive TextField',
    placeholder: 'Input must be between 3 and 20 characters',
    required: true,
    tooltip: 'Input must be between 3 and 20 characters',
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
        helperText={hasError ? 'Input must be between 3 and 20 characters' : ''}
      />
    )
  },
}
