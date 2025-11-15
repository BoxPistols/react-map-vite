/** @jsxImportSource react */
import DoneIcon from '@mui/icons-material/Done'
import FaceIcon from '@mui/icons-material/Face'
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Chip> = {
  title: 'MUI/DataDisplay/Chip',
  component: Chip,
  argTypes: {
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'select' },
    },
    color: {
      options: [
        'default',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Chip>

export const Playground: Story = {
  args: {
    label: 'Chip',
    variant: 'filled',
    color: 'default',
    size: 'medium',
  },
  render: (args) => <Chip {...args} />,
}

export const Basic: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        基本
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip label="Chip" />
        <Chip label="Chip Outlined" variant="outlined" />
      </Stack>
    </Box>
  ),
}

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        バリエーション
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip label="Filled" variant="filled" />
        <Chip label="Outlined" variant="outlined" />
      </Stack>
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Filled
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip label="Default" />
          <Chip label="Primary" color="primary" />
          <Chip label="Secondary" color="secondary" />
          <Chip label="Error" color="error" />
          <Chip label="Warning" color="warning" />
          <Chip label="Info" color="info" />
          <Chip label="Success" color="success" />
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Outlined
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip label="Default" variant="outlined" />
          <Chip label="Primary" color="primary" variant="outlined" />
          <Chip label="Secondary" color="secondary" variant="outlined" />
          <Chip label="Error" color="error" variant="outlined" />
          <Chip label="Warning" color="warning" variant="outlined" />
          <Chip label="Info" color="info" variant="outlined" />
          <Chip label="Success" color="success" variant="outlined" />
        </Stack>
      </Box>
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        サイズ
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <Chip label="Small" size="small" />
        <Chip label="Medium" size="medium" />
      </Stack>
    </Box>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        アイコン付き
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip icon={<FaceIcon />} label="With Icon" />
        <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
        <Chip
          icon={<FaceIcon />}
          label="Primary"
          color="primary"
        />
        <Chip
          icon={<FaceIcon />}
          label="Success"
          color="success"
          variant="outlined"
        />
      </Stack>
    </Box>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        アバター付き
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Avatar Chip"
        />
        <Chip
          avatar={<Avatar alt="User" src="https://i.pravatar.cc/150?img=1" />}
          label="User Name"
        />
        <Chip
          avatar={<Avatar>A</Avatar>}
          label="Avatar Outlined"
          variant="outlined"
        />
      </Stack>
    </Box>
  ),
}

export const Clickable: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        クリック可能
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip
          label="Clickable"
          onClick={() => alert('Clicked!')}
        />
        <Chip
          label="Clickable Outlined"
          variant="outlined"
          onClick={() => alert('Clicked!')}
        />
        <Chip
          label="Clickable Primary"
          color="primary"
          onClick={() => alert('Clicked!')}
        />
      </Stack>
    </Box>
  ),
}

const DeletableExample = () => {
  const [chips, setChips] = useState([
    { key: 0, label: 'React' },
    { key: 1, label: 'Vue' },
    { key: 2, label: 'Angular' },
  ])

  const handleDelete = (chipToDelete: { key: number; label: string }) => {
    setChips((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    )
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        削除可能
      </Typography>
      <Stack direction="row" spacing={1}>
        {chips.map((chip) => (
          <Chip
            key={chip.key}
            label={chip.label}
            onDelete={() => handleDelete(chip)}
          />
        ))}
      </Stack>
    </Box>
  )
}

export const Deletable: Story = {
  render: () => <DeletableExample />,
}

export const CustomDeleteIcon: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        カスタム削除アイコン
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip
          label="Custom Icon"
          onDelete={() => {}}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          label="Custom Icon Outlined"
          variant="outlined"
          onDelete={() => {}}
          deleteIcon={<DoneIcon />}
        />
      </Stack>
    </Box>
  ),
}

const CombinedExample = () => {
  const [chips, setChips] = useState([
    { key: 0, label: 'JavaScript', avatar: 'JS' },
    { key: 1, label: 'TypeScript', avatar: 'TS' },
    { key: 2, label: 'React', avatar: 'R' },
  ])

  const handleDelete = (chipToDelete: {
    key: number
    label: string
    avatar: string
  }) => {
    setChips((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    )
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        アバター + 削除可能
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {chips.map((chip) => (
          <Chip
            key={chip.key}
            avatar={<Avatar>{chip.avatar}</Avatar>}
            label={chip.label}
            onDelete={() => handleDelete(chip)}
            color="primary"
          />
        ))}
      </Stack>
    </Box>
  )
}

export const Combined: Story = {
  render: () => <CombinedExample />,
}

export const Disabled: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        無効状態
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip label="Disabled" disabled />
        <Chip label="Disabled Outlined" variant="outlined" disabled />
        <Chip
          label="Disabled with Delete"
          onDelete={() => {}}
          disabled
        />
      </Stack>
    </Box>
  ),
}
