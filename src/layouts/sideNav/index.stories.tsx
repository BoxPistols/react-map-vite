import { BrowserRouter } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import type { Meta, StoryObj } from '@storybook/react'

// Create a theme instance if the theme module is missing
const theme = createTheme()
import React from 'react'

import { SideNav } from '.'

const meta: Meta<typeof SideNav> = {
  title: 'Layouts/SideNav',
  component: SideNav,
  tags: ['!autodocs'],
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
  },
} satisfies Meta<typeof SideNav>

export default meta

type Story = StoryObj<typeof meta>

export const Open: Story = {
  args: {
    open: true,
  },
}

export const Closed: Story = {
  args: {
    open: false,
  },
}
