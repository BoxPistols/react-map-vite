/** @jsxImportSource react */
import { Box, Button, Fade, Modal, Typography } from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const meta: Meta<typeof Modal> = {
  title: 'MUI/Utils/Modal',
  component: Modal,
}

export default meta

type Story = StoryObj<typeof Modal>

const BasicModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-title'
        aria-describedby='modal-description'>
        <Box sx={style}>
          <Typography id='modal-title' variant='h6' component='h2'>
            モーダルタイトル
          </Typography>
          <Typography id='modal-description' sx={{ mt: 2 }}>
            これはモーダルのコンテンツです。
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export const Playground: Story = {
  render: () => <BasicModal />,
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        基本
      </Typography>
      <BasicModal />
    </Box>
  ),
}

const WithTransitionExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        トランジション付き
      </Typography>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition>
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant='h6' component='h2'>
              フェードイン
            </Typography>
            <Typography sx={{ mt: 2 }}>
              フェードトランジション付きのモーダルです。
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}

export const WithTransition: Story = {
  render: () => <WithTransitionExample />,
}

const KeepMountedExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        常にマウント
      </Typography>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal keepMounted open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography variant='h6' component='h2'>
            常にマウントされたモーダル
          </Typography>
          <Typography sx={{ mt: 2 }}>
            このモーダルはDOMに常に存在します。
          </Typography>
        </Box>
      </Modal>
    </Box>
  )
}

export const KeepMounted: Story = {
  render: () => <KeepMountedExample />,
}
