/** @jsxImportSource react */
import CheckIcon from '@mui/icons-material/Check'
import { Alert, AlertTitle, Box, Stack, Typography } from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Alert> = {
  title: 'MUI/Feedback/Alert',
  component: Alert,
  argTypes: {
    severity: {
      options: ['error', 'warning', 'info', 'success'],
      control: { type: 'select' },
    },
    variant: {
      options: ['standard', 'filled', 'outlined'],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Alert>

export const Playground: Story = {
  args: {
    severity: 'info',
    variant: 'standard',
    children: 'これはアラートメッセージです',
  },
  render: (args) => <Alert {...args} />,
}

export const Severities: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>
        重要度
      </Typography>
      <Alert severity="error">エラーメッセージ</Alert>
      <Alert severity="warning">警告メッセージ</Alert>
      <Alert severity="info">情報メッセージ</Alert>
      <Alert severity="success">成功メッセージ</Alert>
    </Stack>
  ),
}

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Standard
        </Typography>
        <Stack spacing={2}>
          <Alert severity="error">エラーメッセージ</Alert>
          <Alert severity="warning">警告メッセージ</Alert>
          <Alert severity="info">情報メッセージ</Alert>
          <Alert severity="success">成功メッセージ</Alert>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Filled
        </Typography>
        <Stack spacing={2}>
          <Alert severity="error" variant="filled">
            エラーメッセージ
          </Alert>
          <Alert severity="warning" variant="filled">
            警告メッセージ
          </Alert>
          <Alert severity="info" variant="filled">
            情報メッセージ
          </Alert>
          <Alert severity="success" variant="filled">
            成功メッセージ
          </Alert>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Outlined
        </Typography>
        <Stack spacing={2}>
          <Alert severity="error" variant="outlined">
            エラーメッセージ
          </Alert>
          <Alert severity="warning" variant="outlined">
            警告メッセージ
          </Alert>
          <Alert severity="info" variant="outlined">
            情報メッセージ
          </Alert>
          <Alert severity="success" variant="outlined">
            成功メッセージ
          </Alert>
        </Stack>
      </Box>
    </Box>
  ),
}

export const WithTitle: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>
        タイトル付き
      </Typography>
      <Alert severity="error">
        <AlertTitle>エラー</AlertTitle>
        これはエラーアラートです — <strong>確認してください！</strong>
      </Alert>
      <Alert severity="warning">
        <AlertTitle>警告</AlertTitle>
        これは警告アラートです — <strong>注意してください！</strong>
      </Alert>
      <Alert severity="info">
        <AlertTitle>情報</AlertTitle>
        これは情報アラートです — <strong>確認してください！</strong>
      </Alert>
      <Alert severity="success">
        <AlertTitle>成功</AlertTitle>
        これは成功アラートです — <strong>素晴らしい！</strong>
      </Alert>
    </Stack>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>
        アクション付き
      </Typography>
      <Alert severity="info" onClose={() => alert('閉じるがクリックされました')}>
        閉じるボタン付きアラート
      </Alert>
      <Alert
        severity="warning"
        action={
          <button onClick={() => alert('アクション実行')}>実行</button>
        }
      >
        カスタムアクション付きアラート
      </Alert>
    </Stack>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>
        アイコン
      </Typography>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        カスタムアイコン付きアラート
      </Alert>
      <Alert icon={false} severity="success">
        アイコンなしアラート
      </Alert>
    </Stack>
  ),
}

export const Color: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>
        カラー指定
      </Typography>
      <Alert severity="success" color="info">
        success severityでinfo color
      </Alert>
      <Alert severity="info" color="error">
        info severityでerror color
      </Alert>
    </Stack>
  ),
}
