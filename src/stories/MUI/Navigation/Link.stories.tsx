import type { Meta, StoryObj } from '@storybook/react'
import { Link, Box, Typography } from '@mui/material'

const meta = {
  title: 'MUI/Navigation/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    underline: {
      control: 'select',
      options: ['none', 'hover', 'always'],
      description: '下線の表示タイミング',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'リンクの色',
    },
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    href: '#',
    children: 'リンク',
    underline: 'hover',
    color: 'primary',
  },
}

export const Basic: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Link href="#">デフォルトリンク</Link>
      <Link href="#" color="inherit">
        色を継承
      </Link>
      <Link href="#" variant="body2">
        body2
      </Link>
    </Box>
  ),
}

export const Underline: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Link href="#" underline="none">
        下線なし
      </Link>
      <Link href="#" underline="hover">
        ホバーで下線
      </Link>
      <Link href="#" underline="always">
        常に下線
      </Link>
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Link href="#" color="primary">
        Primary
      </Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
      <Link href="#" color="error">
        Error
      </Link>
      <Link href="#" color="warning">
        Warning
      </Link>
      <Link href="#" color="info">
        Info
      </Link>
      <Link href="#" color="success">
        Success
      </Link>
      <Link href="#" color="inherit">
        Inherit
      </Link>
    </Box>
  ),
}

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Link href="#" variant="h6">
        h6リンク
      </Link>
      <Link href="#" variant="body1">
        body1リンク
      </Link>
      <Link href="#" variant="body2">
        body2リンク
      </Link>
      <Link href="#" variant="caption">
        captionリンク
      </Link>
    </Box>
  ),
}

export const InText: Story = {
  render: () => (
    <Typography>
      このテキストには
      <Link href="#" sx={{ mx: 0.5 }}>
        リンク
      </Link>
      が含まれています。
      <Link href="#" color="secondary" sx={{ mx: 0.5 }}>
        セカンダリカラーのリンク
      </Link>
      も使用できます。
    </Typography>
  ),
}

export const Button: Story = {
  render: () => (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.log('クリックされました')
      }}>
      ボタンとしてのリンク
    </Link>
  ),
}

export const Security: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="subtitle2">外部リンク（安全）:</Typography>
      <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
        新しいタブで開く
      </Link>
      <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
        外部リンクには必ず rel=&quot;noopener noreferrer&quot; を付けましょう
      </Typography>
    </Box>
  ),
}
