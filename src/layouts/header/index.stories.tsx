import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '.'

const meta: Meta<typeof Header> = {
  title: 'Layouts/Header',
  component: Header,
  tags: ['layout', 'header'],
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
