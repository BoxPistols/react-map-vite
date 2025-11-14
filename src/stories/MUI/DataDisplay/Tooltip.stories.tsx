/** @jsxImportSource react */
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Button, Fade, IconButton, Tooltip, Typography, Zoom } from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tooltip> = {
  title: 'MUI/DataDisplay/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      options: [
        'bottom-end',
        'bottom-start',
        'bottom',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
        'top-end',
        'top-start',
        'top',
      ],
      control: { type: 'select' },
    },
    arrow: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Playground: Story = {
  args: {
    title: 'これはツールチップです',
    placement: 'top',
    arrow: false,
  },
  render: (args) => (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Tooltip {...args}>
        <Button>ホバーしてください</Button>
      </Tooltip>
    </Box>
  ),
}

export const Basic: Story = {
  render: () => (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        基本
      </Typography>
      <Tooltip title="削除">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  ),
}

export const Placement: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 4 }}>
      <Typography variant="h6" gutterBottom>
        配置
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Tooltip title="Top Start" placement="top-start">
          <Button>Top Start</Button>
        </Tooltip>
        <Tooltip title="Top" placement="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip title="Top End" placement="top-end">
          <Button>Top End</Button>
        </Tooltip>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Tooltip title="Left Start" placement="left-start">
            <Button>Left Start</Button>
          </Tooltip>
          <Tooltip title="Left" placement="left">
            <Button>Left</Button>
          </Tooltip>
          <Tooltip title="Left End" placement="left-end">
            <Button>Left End</Button>
          </Tooltip>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Tooltip title="Right Start" placement="right-start">
            <Button>Right Start</Button>
          </Tooltip>
          <Tooltip title="Right" placement="right">
            <Button>Right</Button>
          </Tooltip>
          <Tooltip title="Right End" placement="right-end">
            <Button>Right End</Button>
          </Tooltip>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Tooltip title="Bottom Start" placement="bottom-start">
          <Button>Bottom Start</Button>
        </Tooltip>
        <Tooltip title="Bottom" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip title="Bottom End" placement="bottom-end">
          <Button>Bottom End</Button>
        </Tooltip>
      </Box>
    </Box>
  ),
}

export const Arrow: Story = {
  render: () => (
    <Box sx={{ p: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
      <Typography variant="h6" gutterBottom>
        矢印付き
      </Typography>
      <Tooltip title="矢印なし">
        <Button>矢印なし</Button>
      </Tooltip>
      <Tooltip title="矢印あり" arrow>
        <Button>矢印あり</Button>
      </Tooltip>
    </Box>
  ),
}

export const Transitions: Story = {
  render: () => (
    <Box sx={{ p: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
      <Typography variant="h6" gutterBottom>
        トランジション
      </Typography>
      <Tooltip title="Grow (デフォルト)">
        <Button>Grow</Button>
      </Tooltip>
      <Tooltip title="Fade" TransitionComponent={Fade}>
        <Button>Fade</Button>
      </Tooltip>
      <Tooltip title="Zoom" TransitionComponent={Zoom}>
        <Button>Zoom</Button>
      </Tooltip>
    </Box>
  ),
}

export const Interactive: Story = {
  render: () => (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        インタラクティブ
      </Typography>
      <Tooltip
        title={
          <Box>
            <Typography variant="body2">クリック可能なツールチップ</Typography>
            <Button size="small" sx={{ mt: 1, color: 'white' }}>
              詳細
            </Button>
          </Box>
        }
        interactive
        arrow
      >
        <Button>ホバーしてください</Button>
      </Tooltip>
    </Box>
  ),
}

export const FollowCursor: Story = {
  render: () => (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        カーソル追従
      </Typography>
      <Tooltip title="カーソルに追従します" followCursor>
        <Button>マウスを動かしてみてください</Button>
      </Tooltip>
    </Box>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Box sx={{ p: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
      <Typography variant="h6" gutterBottom>
        無効な要素でも表示
      </Typography>
      <Tooltip title="無効なボタン">
        <span>
          <Button disabled>無効なボタン</Button>
        </span>
      </Tooltip>
    </Box>
  ),
}

export const EnterDelay: Story = {
  render: () => (
    <Box sx={{ p: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
      <Typography variant="h6" gutterBottom>
        表示遅延
      </Typography>
      <Tooltip title="遅延なし" enterDelay={0}>
        <Button>遅延なし</Button>
      </Tooltip>
      <Tooltip title="500ms遅延" enterDelay={500}>
        <Button>500ms</Button>
      </Tooltip>
      <Tooltip title="1000ms遅延" enterDelay={1000}>
        <Button>1000ms</Button>
      </Tooltip>
    </Box>
  ),
}

export const VariableWidth: Story = {
  render: () => (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        幅の調整
      </Typography>
      <Tooltip title="これは非常に長いツールチップのテキストです。複数行にわたって表示されることがあります。">
        <Button>長いツールチップ</Button>
      </Tooltip>
    </Box>
  ),
}
