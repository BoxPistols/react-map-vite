/** @jsxImportSource react */
import CloseIcon from '@mui/icons-material/Close'
import {
  Alert,
  Box,
  Button,
  IconButton,
  Snackbar,
  type SnackbarOrigin,
  Stack,
  Typography,
} from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Snackbar> = {
  title: 'MUI/Feedback/Snackbar',
  component: Snackbar,
  argTypes: {
    anchorOrigin: {
      control: { type: 'object' },
    },
    autoHideDuration: {
      control: { type: 'number' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Snackbar>

export const Playground: Story = {
  args: {
    open: true,
    message: 'これはスナックバーメッセージです',
    autoHideDuration: 3000,
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
  },
  render: (args) => <Snackbar {...args} />,
}

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          基本
        </Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          スナックバーを表示
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          message="これはスナックバーメッセージです"
        />
      </Box>
    )
  },
}

export const WithAction: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    const action = (
      <>
        <Button color="secondary" size="small" onClick={() => setOpen(false)}>
          元に戻す
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={() => setOpen(false)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </>
    )

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          アクション付き
        </Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          スナックバーを表示
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="アイテムを削除しました"
          action={action}
        />
      </Box>
    )
  },
}

export const Position: Story = {
  render: () => {
    const [open, setOpen] = useState<SnackbarOrigin | null>(null)

    const positions: SnackbarOrigin[] = [
      { vertical: 'top', horizontal: 'left' },
      { vertical: 'top', horizontal: 'center' },
      { vertical: 'top', horizontal: 'right' },
      { vertical: 'bottom', horizontal: 'left' },
      { vertical: 'bottom', horizontal: 'center' },
      { vertical: 'bottom', horizontal: 'right' },
    ]

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          位置
        </Typography>
        <Stack spacing={1}>
          {positions.map((position) => (
            <Button
              key={`${position.vertical}-${position.horizontal}`}
              variant="outlined"
              onClick={() => setOpen(position)}
            >
              {position.vertical} - {position.horizontal}
            </Button>
          ))}
        </Stack>
        <Snackbar
          open={!!open}
          autoHideDuration={2000}
          onClose={() => setOpen(null)}
          message={
            open
              ? `${open.vertical} - ${open.horizontal}`
              : ''
          }
          anchorOrigin={open || undefined}
        />
      </Box>
    )
  },
}

export const WithAlert: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Alert付き
        </Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          成功メッセージ
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            これは成功メッセージです！
          </Alert>
        </Snackbar>
      </Box>
    )
  },
}

export const AlertVariants: Story = {
  render: () => {
    const [severity, setSeverity] = useState<
      'success' | 'error' | 'warning' | 'info' | null
    >(null)

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Alert バリエーション
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            color="success"
            onClick={() => setSeverity('success')}
          >
            Success
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => setSeverity('error')}
          >
            Error
          </Button>
          <Button
            variant="outlined"
            color="warning"
            onClick={() => setSeverity('warning')}
          >
            Warning
          </Button>
          <Button
            variant="outlined"
            color="info"
            onClick={() => setSeverity('info')}
          >
            Info
          </Button>
        </Stack>
        <Snackbar
          open={!!severity}
          autoHideDuration={3000}
          onClose={() => setSeverity(null)}
        >
          <Alert
            onClose={() => setSeverity(null)}
            severity={severity || 'info'}
            sx={{ width: '100%' }}
          >
            これは{severity}メッセージです！
          </Alert>
        </Snackbar>
      </Box>
    )
  },
}

export const Consecutive: Story = {
  render: () => {
    const [snackPack, setSnackPack] = useState<readonly { message: string; key: number }[]>([])
    const [open, setOpen] = useState(false)
    const [messageInfo, setMessageInfo] = useState<{ message: string; key: number } | undefined>(undefined)

    const handleClick = (message: string) => {
      setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }])
    }

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return
      }
      setOpen(false)
    }

    const handleExited = () => {
      setMessageInfo(undefined)
    }

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          連続表示
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" onClick={() => handleClick('メッセージ 1')}>
            メッセージ 1
          </Button>
          <Button variant="outlined" onClick={() => handleClick('メッセージ 2')}>
            メッセージ 2
          </Button>
          <Button variant="outlined" onClick={() => handleClick('メッセージ 3')}>
            メッセージ 3
          </Button>
        </Stack>
        <Snackbar
          key={messageInfo ? messageInfo.key : undefined}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          TransitionProps={{ onExited: handleExited }}
          message={messageInfo ? messageInfo.message : undefined}
        />
      </Box>
    )
  },
}

export const Duration: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [duration, setDuration] = useState(3000)

    const handleClick = (dur: number) => {
      setDuration(dur)
      setOpen(true)
    }

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          表示時間
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" onClick={() => handleClick(1000)}>
            1秒
          </Button>
          <Button variant="outlined" onClick={() => handleClick(3000)}>
            3秒
          </Button>
          <Button variant="outlined" onClick={() => handleClick(5000)}>
            5秒
          </Button>
        </Stack>
        <Snackbar
          open={open}
          autoHideDuration={duration}
          onClose={() => setOpen(false)}
          message={`${duration / 1000}秒後に閉じます`}
        />
      </Box>
    )
  },
}
