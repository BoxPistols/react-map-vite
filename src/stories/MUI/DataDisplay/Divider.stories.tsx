/** @jsxImportSource react */
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import {
  Box,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Divider> = {
  title: 'MUI/DataDisplay/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
    variant: {
      options: ['fullWidth', 'inset', 'middle'],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Divider>

export const Playground: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'fullWidth',
  },
  render: (args) => <Divider {...args} />,
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        基本
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider />
      <Typography>
        Phasellus id dignissim justo. Nulla ut facilisis ligula.
      </Typography>
    </Box>
  ),
}

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant='h6' gutterBottom>
          Full Width
        </Typography>
        <Divider variant='fullWidth' />
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          Inset
        </Typography>
        <Divider variant='inset' />
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          Middle
        </Typography>
        <Divider variant='middle' />
      </Box>
    </Box>
  ),
}

export const WithText: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant='h6' gutterBottom>
          テキスト付き
        </Typography>
        <Divider>CENTER</Divider>
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          テキスト位置
        </Typography>
        <Divider textAlign='left'>LEFT</Divider>
        <Box sx={{ my: 2 }} />
        <Divider textAlign='center'>CENTER</Divider>
        <Box sx={{ my: 2 }} />
        <Divider textAlign='right'>RIGHT</Divider>
      </Box>
    </Box>
  ),
}

export const WithChip: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        Chip付き
      </Typography>
      <Divider>
        <Chip label='OR' />
      </Divider>
    </Box>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant='h6' gutterBottom>
          縦向き
        </Typography>
        <Stack
          direction='row'
          spacing={2}
          divider={<Divider orientation='vertical' flexItem />}>
          <Typography>Item 1</Typography>
          <Typography>Item 2</Typography>
          <Typography>Item 3</Typography>
        </Stack>
      </Box>

      <Box>
        <Typography variant='h6' gutterBottom>
          アイコン付き
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <FormatBoldIcon />
          </IconButton>
          <IconButton>
            <FormatItalicIcon />
          </IconButton>
          <Divider orientation='vertical' flexItem sx={{ mx: 1 }} />
          <IconButton>
            <FormatAlignLeftIcon />
          </IconButton>
          <IconButton>
            <FormatAlignCenterIcon />
          </IconButton>
          <IconButton>
            <FormatAlignRightIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  ),
}

export const InList: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        リスト内
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemText primary='Item 1' secondary='Description 1' />
        </ListItem>
        <Divider component='li' />
        <ListItem>
          <ListItemText primary='Item 2' secondary='Description 2' />
        </ListItem>
        <Divider component='li' />
        <ListItem>
          <ListItemText primary='Item 3' secondary='Description 3' />
        </ListItem>
      </List>
    </Box>
  ),
}

export const Thickness: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant='h6' gutterBottom>
          太さ
        </Typography>
        <Divider sx={{ borderBottomWidth: 1 }} />
        <Box sx={{ my: 2 }} />
        <Divider sx={{ borderBottomWidth: 2 }} />
        <Box sx={{ my: 2 }} />
        <Divider sx={{ borderBottomWidth: 3 }} />
      </Box>
    </Box>
  ),
}

export const Light: Story = {
  render: () => (
    <Box>
      <Typography variant='h6' gutterBottom>
        ライト
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider light />
      <Typography>
        Phasellus id dignissim justo. Nulla ut facilisis ligula.
      </Typography>
    </Box>
  ),
}
