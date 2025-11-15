/** @jsxImportSource react */
import {
  Box,
  CircularProgress,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CircularProgress> = {
  title: 'MUI/Feedback/Progress',
  component: CircularProgress,
  argTypes: {
    variant: {
      options: ['determinate', 'indeterminate'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<typeof CircularProgress>

export const Playground: Story = {
  args: {
    variant: 'indeterminate',
    color: 'primary',
  },
  render: (args) => <CircularProgress {...args} />,
}

export const CircularIndeterminate: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        円形 - 不定
      </Typography>
      <Stack direction="row" spacing={2}>
        <CircularProgress />
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="error" />
      </Stack>
    </Box>
  ),
}

const CircularDeterminateExample = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      )
    }, 800)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        円形 - 確定
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <CircularProgress variant="determinate" value={progress} />
        <CircularProgress
          variant="determinate"
          value={progress}
          color="secondary"
        />
        <Typography variant="body2">{progress}%</Typography>
      </Stack>
    </Box>
  )
}

export const CircularDeterminate: Story = {
  render: () => <CircularDeterminateExample />,
}

const CircularWithLabelExample = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      )
    }, 800)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        円形 - ラベル付き
      </Typography>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={progress} size={80} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(progress)}%`}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export const CircularWithLabel: Story = {
  render: () => <CircularWithLabelExample />,
}

export const CircularSizes: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        円形 - サイズ
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <CircularProgress size={20} />
        <CircularProgress size={30} />
        <CircularProgress size={40} />
        <CircularProgress size={50} />
        <CircularProgress size={60} />
      </Stack>
    </Box>
  ),
}

export const LinearIndeterminate: Story = {
  render: () => (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" gutterBottom>
        線形 - 不定
      </Typography>
      <Stack spacing={2}>
        <LinearProgress />
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="error" />
      </Stack>
    </Box>
  ),
}

const LinearDeterminateExample = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      )
    }, 800)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" gutterBottom>
        線形 - 確定
      </Typography>
      <Stack spacing={2}>
        <LinearProgress variant="determinate" value={progress} />
        <LinearProgress
          variant="determinate"
          value={progress}
          color="secondary"
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {`${Math.round(progress)}%`}
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export const LinearDeterminate: Story = {
  render: () => <LinearDeterminateExample />,
}

const LinearBufferExample = () => {
  const [progress, setProgress] = useState(0)
  const [buffer, setBuffer] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(prevProgress + diff, 100)
      })

      setBuffer((prevBuffer) => {
        if (prevBuffer >= 100) {
          return 10
        }
        const diff = Math.random() * 10
        return Math.min(prevBuffer + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" gutterBottom>
        線形 - バッファ
      </Typography>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    </Box>
  )
}

export const LinearBuffer: Story = {
  render: () => <LinearBufferExample />,
}

export const LinearQuery: Story = {
  render: () => (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" gutterBottom>
        線形 - クエリ
      </Typography>
      <LinearProgress variant="query" />
    </Box>
  ),
}

export const LinearColors: Story = {
  render: () => (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" gutterBottom>
        線形 - カラー
      </Typography>
      <Stack spacing={2}>
        <LinearProgress color="primary" />
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="error" />
        <LinearProgress color="warning" />
        <LinearProgress color="info" />
      </Stack>
    </Box>
  ),
}

const CombinedExample = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      )
    }, 800)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        円形と線形の組み合わせ
      </Typography>
      <Stack spacing={3}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <CircularProgress variant="determinate" value={progress} />
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {`${Math.round(progress)}%`}
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export const Combined: Story = {
  render: () => <CombinedExample />,
}
