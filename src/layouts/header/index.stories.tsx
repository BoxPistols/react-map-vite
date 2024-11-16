import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '.'

const meta: Meta<typeof Header> = {
  title: 'Layouts/Header',
  component: Header,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    // themeSwitcherIconColor: 'white',
    showThemeSwitcher: true,
    themeSwitcherIconColor: 'black',
    themeSwitcherPosition: 'top-right',
  },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
