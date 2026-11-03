/** @jsxImportSource react */
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'

import { Header } from '../../layouts/header'
import { SideNav } from '../../layouts/sideNav'
import { theme } from '../../themes/theme'

// LAYOUT_CONSTANTSのモック（実際の値は適宜インポートしてください）
const LAYOUT_CONSTANTS = {
  HEADER: {
    HEIGHT: 64,
  },
}

// WindowインターフェースにLAYOUT_CONSTANTSを追加
declare global {
  interface Window {
    LAYOUT_CONSTANTS: typeof LAYOUT_CONSTANTS
  }
}

// グローバル空間に必要な定数を設定（実際の環境では不要）
window.LAYOUT_CONSTANTS = LAYOUT_CONSTANTS

type LayoutProps = {
  open?: boolean
  onToggle?: () => void
  sideNavWidth?: number
  children?: React.ReactNode
}

const Layout = ({
  open = false,
  onToggle,
  sideNavWidth = 160,
  children,
}: LayoutProps) => {
  const handleToggle = onToggle || (() => console.log('Drawer toggled'))

  return (
    <Box sx={{ display: 'flex' }}>
      <Header toggleDrawer={handleToggle} open={open} />
      <SideNav open={open} width={sideNavWidth} />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: open ? '32px' : 0,
          marginTop: '64px',
          transition: 'margin-left 0.3s',
          height: `calc(100vh - ${LAYOUT_CONSTANTS.HEADER.HEIGHT}px)`,
          overflow: 'auto',
        }}>
        {children || (
          <Box
            sx={{
              p: 3,
              ml: `${sideNavWidth}px`,
              border: '1px dashed',
              borderColor: 'divider',
              borderRadius: 1,
              minHeight: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            メインコンテンツエリア
          </Box>
        )}
      </Box>
    </Box>
  )
}

import type { Meta, StoryObj } from '@storybook/react'

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
    sideNavWidth: {
      control: { type: 'number', min: 64, max: 300, step: 8 },
      description: 'サイドナビゲーションの幅',
    },
  },
} satisfies Meta<typeof Layout>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: false,
    sideNavWidth: 64,
  },
}

export const OpenNav: Story = {
  args: {
    open: true,
    sideNavWidth: 160,
  },
}

export const WithContent: Story = {
  args: {
    open: true,
    sideNavWidth: 160,
  },
  render: (args) => (
    <Layout {...args}>
      <Box sx={{ p: 3, pl: '160px' }}>
        <p>
          このエリアにアプリケーションのメインコンテンツが表示されます。
          サイドナビゲーションのオープン/クローズ状態により、
          表示領域の幅が調整されます。
        </p>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 3,
            mt: 3,
          }}>
          {[1, 2, 3, 4].map((item) => (
            <Box
              key={item}
              sx={{
                bgcolor: 'background.paper',
                p: 3,
                borderRadius: 1,
                boxShadow: 1,
                minHeight: 160,
              }}>
              カード {item}
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  ),
}
