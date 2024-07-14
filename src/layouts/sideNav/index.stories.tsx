import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { theme } from '@/lib/themes/theme'
import { ThemeProvider } from '@mui/material/styles'
import { SideNav } from '.'

const meta: Meta<typeof SideNav> = {
  title: 'Layouts/SideNav',
  component: SideNav,
  tags: ['sidenav', 'navigation'],
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
