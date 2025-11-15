/** @jsxImportSource react */
import DraftsIcon from '@mui/icons-material/Drafts'
import FolderIcon from '@mui/icons-material/Folder'
import InboxIcon from '@mui/icons-material/Inbox'
import SendIcon from '@mui/icons-material/Send'
import StarIcon from '@mui/icons-material/Star'
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof List> = {
  title: 'MUI/DataDisplay/List',
  component: List,
  argTypes: {
    dense: {
      control: { type: 'boolean' },
    },
    disablePadding: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof List>

export const Playground: Story = {
  args: {
    dense: false,
    disablePadding: false,
  },
  render: (args) => (
    <List {...args} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary="アイテム 1" />
      </ListItem>
      <ListItem>
        <ListItemText primary="アイテム 2" />
      </ListItem>
      <ListItem>
        <ListItemText primary="アイテム 3" />
      </ListItem>
    </List>
  ),
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        基本リスト
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemText primary="Single-line item" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Single-line item" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Single-line item" />
        </ListItem>
      </List>
    </Box>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        アイコン付きリスト
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="受信トレイ" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="下書き" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="送信済み" />
        </ListItem>
      </List>
    </Box>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        アバター付きリスト
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2024" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2024" />
        </ListItem>
      </List>
    </Box>
  ),
}

export const TwoLine: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        2行リスト
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=1" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary="Ali Connors — I'll be in your neighborhood doing errands this…"
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://i.pravatar.cc/150?img=2" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary="to Scott, Alex, Jennifer — Wish I could come, but I'm out of town this…"
          />
        </ListItem>
      </List>
    </Box>
  ),
}

export const Interactive: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        インタラクティブリスト
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="受信トレイ" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="スター付き" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="送信済み" />
        </ListItemButton>
      </List>
    </Box>
  ),
}

const NestedExample = () => {
  const [open, setOpen] = useState(true)

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        ネストされたリスト
      </Typography>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
      >
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="送信メール" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="下書き" />
        </ListItemButton>
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="受信トレイ" />
        </ListItemButton>
        {open && (
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="スター付き" />
            </ListItemButton>
          </List>
        )}
      </List>
    </Box>
  )
}

export const Nested: Story = {
  render: () => <NestedExample />,
}

const WithSwitchExample = () => {
  const [checked, setChecked] = useState(['wifi'])

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        スイッチ付きリスト
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemText primary="Wi-Fi" />
          <Switch
            edge="end"
            onChange={handleToggle('wifi')}
            checked={checked.indexOf('wifi') !== -1}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bluetooth" />
          <Switch
            edge="end"
            onChange={handleToggle('bluetooth')}
            checked={checked.indexOf('bluetooth') !== -1}
          />
        </ListItem>
      </List>
    </Box>
  )
}

export const WithSwitch: Story = {
  render: () => <WithSwitchExample />,
}

export const Dense: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          通常
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          密集
        </Typography>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
        </List>
      </Box>
    </Box>
  ),
}
