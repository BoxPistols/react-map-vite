import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '@/lib/themes/theme'
import { LeftMenu } from '.'

const meta: Meta<typeof LeftMenu> = {
  title: 'Layouts/LeftMenu',
  component: LeftMenu,
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
      description: 'LeftMenu drawer open state',
    },
  },
} satisfies Meta<typeof LeftMenu>

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
