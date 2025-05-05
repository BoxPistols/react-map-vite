/** @jsxImportSource react */
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { theme } from '../../themes/theme'

import { Header } from '.'

// LAYOUT_CONSTANTSのモック（実際の定数がある場合は正しくインポートしてください）
const LAYOUT_CONSTANTS = {
  HEADER: {
    HEIGHT: 64,
  },
}

// Window interfaceを拡張
declare global {
  interface Window {
    LAYOUT_CONSTANTS: typeof LAYOUT_CONSTANTS
  }
}

// グローバル空間にLAYOUT_CONSTANTSを追加（実際の実装では不要）
window.LAYOUT_CONSTANTS = LAYOUT_CONSTANTS

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Header> = {
  title: 'Layouts/Header',
  component: Header,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box sx={{ height: '100vh' }}>
          <Story />
          {/* ヘッダー下のコンテンツエリア（視覚的参考用） */}
          <Box
            sx={{
              height: `calc(100vh - ${LAYOUT_CONSTANTS.HEADER.HEIGHT}px)`,
              mt: `${LAYOUT_CONSTANTS.HEADER.HEIGHT}px`,
              bgcolor: 'background.default',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'text.secondary',
              border: '1px dashed',
              borderColor: 'divider',
            }}>
            コンテンツエリア（参考表示）
          </Box>
        </Box>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    toggleDrawer: { action: 'toggleDrawer clicked' },
    open: {
      control: 'boolean',
      description: 'ドロワーの開閉状態（矢印の向きに影響）',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DrawerClosed: Story = {
  args: {
    open: false,
  },
}

export const DrawerOpen: Story = {
  args: {
    open: true,
  },
}
