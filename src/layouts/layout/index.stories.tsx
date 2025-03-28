import { ThemeProvider } from '@mui/material/styles'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from '.'
import { theme } from '../../lib/themes/theme'

const meta: Meta<typeof Layout> = {
  title: 'Layouts/Layout',
  component: Layout,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'サイドナビゲーションの開閉状態',
    },
    onToggle: { action: 'toggled' },
  },
} satisfies Meta<typeof Layout>

export default meta

type Story = StoryObj<typeof meta>

export const Toggle: Story = {
  args: {
    open: true,
  },
}
