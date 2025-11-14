/** @jsxImportSource react */
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  TextField,
  Typography,
  Zoom,
  type TransitionProps,
} from '@mui/material'
import { forwardRef, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Dialog> = {
  title: 'MUI/Feedback/Dialog',
  component: Dialog,
  argTypes: {
    fullScreen: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    maxWidth: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Playground: Story = {
  args: {
    open: true,
    fullScreen: false,
    fullWidth: false,
    maxWidth: 'sm',
  },
  render: (args) => (
    <Dialog {...args}>
      <DialogTitle>ダイアログタイトル</DialogTitle>
      <DialogContent>
        <DialogContentText>
          これはダイアログのコンテンツです。
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button>キャンセル</Button>
        <Button>OK</Button>
      </DialogActions>
    </Dialog>
  ),
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
          ダイアログを開く
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>ダイアログタイトル</DialogTitle>
          <DialogContent>
            <DialogContentText>
              これは基本的なダイアログです。キャンセルまたはOKを選択してください。
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>キャンセル</Button>
            <Button onClick={() => setOpen(false)} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    )
  },
}

export const Alert: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          アラートダイアログ
        </Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          削除確認
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            本当に削除しますか？
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              この操作は取り消せません。本当に削除してもよろしいですか？
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>キャンセル</Button>
            <Button onClick={() => setOpen(false)} color="error" autoFocus>
              削除
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    )
  },
}

export const Form: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          フォームダイアログ
        </Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          購読する
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>ニュースレター購読</DialogTitle>
          <DialogContent>
            <DialogContentText>
              最新情報を受け取るために、メールアドレスを入力してください。
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="メールアドレス"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>キャンセル</Button>
            <Button onClick={() => setOpen(false)}>購読</Button>
          </DialogActions>
        </Dialog>
      </Box>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [open, setOpen] = useState<string | null>(null)

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          サイズ
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
            <Button
              key={size}
              variant="outlined"
              onClick={() => setOpen(size)}
            >
              {size}
            </Button>
          ))}
        </Box>
        {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
          <Dialog
            key={size}
            open={open === size}
            onClose={() => setOpen(null)}
            maxWidth={size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
            fullWidth
          >
            <DialogTitle>{size.toUpperCase()} ダイアログ</DialogTitle>
            <DialogContent>
              <DialogContentText>
                これは maxWidth="{size}" のダイアログです。
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(null)}>閉じる</Button>
            </DialogActions>
          </Dialog>
        ))}
      </Box>
    )
  },
}

export const FullScreen: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          フルスクリーン
        </Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          フルスクリーンで開く
        </Button>
        <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
          <DialogTitle>フルスクリーンダイアログ</DialogTitle>
          <DialogContent>
            <DialogContentText>
              これはフルスクリーンダイアログです。
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>閉じる</Button>
          </DialogActions>
        </Dialog>
      </Box>
    )
  },
}

const SlideTransition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export const Transitions: Story = {
  render: () => {
    const [slideOpen, setSlideOpen] = useState(false)
    const [zoomOpen, setZoomOpen] = useState(false)

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          トランジション
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" onClick={() => setSlideOpen(true)}>
            Slide
          </Button>
          <Button variant="outlined" onClick={() => setZoomOpen(true)}>
            Zoom
          </Button>
        </Box>

        <Dialog
          open={slideOpen}
          TransitionComponent={SlideTransition}
          onClose={() => setSlideOpen(false)}
        >
          <DialogTitle>Slide トランジション</DialogTitle>
          <DialogContent>
            <DialogContentText>
              下からスライドして表示されます。
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setSlideOpen(false)}>閉じる</Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={zoomOpen}
          TransitionComponent={Zoom}
          onClose={() => setZoomOpen(false)}
        >
          <DialogTitle>Zoom トランジション</DialogTitle>
          <DialogContent>
            <DialogContentText>
              ズームして表示されます。
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setZoomOpen(false)}>閉じる</Button>
          </DialogActions>
        </Dialog>
      </Box>
    )
  },
}

export const ScrollableContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          スクロール可能なコンテンツ
        </Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          長いコンテンツ
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} scroll="paper">
          <DialogTitle>スクロール可能なダイアログ</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              {[...Array(50)].map((_, i) => (
                <span key={i}>
                  これは長いコンテンツです。スクロールできます。
                  <br />
                </span>
              ))}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>閉じる</Button>
          </DialogActions>
        </Dialog>
      </Box>
    )
  },
}
