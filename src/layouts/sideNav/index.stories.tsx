/** @jsxImportSource react */
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'

import { Header } from '../../layouts/header'
import { SideNav } from '../../layouts/sideNav'
import { theme } from '../../themes/theme'

// LAYOUT_CONSTANTSのモック
const LAYOUT_CONSTANTS = {
  HEADER: {
    HEIGHT: 64,
  },
}

// WindowインターフェースにLAYOUT_CONSTANTSを追加
declare global {
  interface Window {
    LAYOUT_CONSTANTS: typeof LAYOUT_CONSTANTS
    DrawerHeader: unknown
  }
}

// グローバル空間に必要な定数を設定
window.LAYOUT_CONSTANTS = LAYOUT_CONSTANTS

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

// グローバル空間にDrawerHeaderを設定
window.DrawerHeader = DrawerHeader

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SideNav> = {
  title: 'Layouts/SideNav',
  component: SideNav,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Box sx={{ display: 'flex', height: '100vh', position: 'relative' }}>
            {/* 実際のHeaderコンポーネントを使用 */}
            <Header
              toggleDrawer={() => console.log('Toggle drawer')}
              open={false}
            />
            <Story open={open} />
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'サイドナビゲーションの開閉状態',
    },
    width: {
      control: { type: 'number', min: 40, max: 300, step: 10 },
      description: 'サイドナビゲーションの幅（ピクセル）',
    },
  },
} satisfies Meta<typeof SideNav>

export default meta

type Story = StoryObj<typeof meta>

export const Closed: Story = {
  args: {
    open: false,
    width: 64,
  },
}

export const Open: Story = {
  args: {
    open: true,
    width: 160,
  },
}

export const WideNav: Story = {
  args: {
    open: true,
    width: 240,
  },
}

export const NarrowNav: Story = {
  args: {
    open: true,
    width: 120,
  },
}
