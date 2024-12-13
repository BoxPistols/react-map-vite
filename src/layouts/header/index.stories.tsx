import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '.'

const meta: Meta<typeof Header> = {
  title: 'Layouts/Header',
  component: Header,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    themeSwitcherPosition: 'top-right',
    themeSwitcherIconColor: 'white',
  },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
