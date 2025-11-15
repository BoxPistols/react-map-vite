/** @jsxImportSource react */
import { Box, Typography, type TypographyProps } from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TypographyProps> = {
  title: 'MUI/DataDisplay/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'subtitle1', 'subtitle2',
        'body1', 'body2',
        'button', 'caption', 'overline',
      ],
      control: { type: 'select' },
    },
    align: {
      options: ['left', 'center', 'right', 'justify'],
      control: { type: 'select' },
    },
    color: {
      options: [
        'initial', 'inherit', 'primary', 'secondary',
        'textPrimary', 'textSecondary', 'error',
      ],
      control: { type: 'select' },
    },
    gutterBottom: {
      control: { type: 'boolean' },
    },
    noWrap: {
      control: { type: 'boolean' },
    },
    paragraph: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<TypographyProps>

export const Playground: Story = {
  args: {
    variant: 'body1',
    align: 'inherit',
    color: 'initial',
    gutterBottom: false,
    noWrap: false,
    paragraph: false,
    children: 'Typography コンポーネント',
  },
  render: (args) => <Typography {...args} />,
}

export const Headings: Story = {
  render: () => (
    <Box>
      <Typography variant="h1" gutterBottom>
        h1. 見出し
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. 見出し
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. 見出し
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. 見出し
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. 見出し
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. 見出し
      </Typography>
    </Box>
  ),
}

export const Subtitles: Story = {
  render: () => (
    <Box>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
    </Box>
  ),
}

export const Body: Story = {
  render: () => (
    <Box>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
    </Box>
  ),
}

export const Other: Story = {
  render: () => (
    <Box>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography>デフォルト</Typography>
      <Typography color="primary">Primary</Typography>
      <Typography color="secondary">Secondary</Typography>
      <Typography color="error">Error</Typography>
      <Typography color="textPrimary">Text Primary</Typography>
      <Typography color="textSecondary">Text Secondary</Typography>
      <Typography sx={{ color: 'success.main' }}>Success</Typography>
      <Typography sx={{ color: 'warning.main' }}>Warning</Typography>
      <Typography sx={{ color: 'info.main' }}>Info</Typography>
    </Box>
  ),
}

export const Alignment: Story = {
  render: () => (
    <Box>
      <Typography align="left" gutterBottom>
        左揃え
      </Typography>
      <Typography align="center" gutterBottom>
        中央揃え
      </Typography>
      <Typography align="right" gutterBottom>
        右揃え
      </Typography>
      <Typography align="justify" gutterBottom>
        両端揃え - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore.
      </Typography>
    </Box>
  ),
}

export const GutterBottom: Story = {
  render: () => (
    <Box>
      <Typography variant="body1">
        gutterBottom なし
      </Typography>
      <Typography variant="body1">
        次の行
      </Typography>
      <Box sx={{ mt: 3 }} />
      <Typography variant="body1" gutterBottom>
        gutterBottom あり
      </Typography>
      <Typography variant="body1">
        次の行（余白がある）
      </Typography>
    </Box>
  ),
}

export const NoWrap: Story = {
  render: () => (
    <Box sx={{ width: 200, border: '1px solid', borderColor: 'divider', p: 1 }}>
      <Typography noWrap>
        この長いテキストは折り返されず、省略記号で表示されます。Lorem ipsum dolor sit amet.
      </Typography>
    </Box>
  ),
}

export const Paragraph: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        段落の例
      </Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography paragraph>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </Typography>
      <Typography>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </Typography>
    </Box>
  ),
}

export const Component: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        HTMLタグのカスタマイズ
      </Typography>
      <Typography variant="h1" component="h2" gutterBottom>
        h1スタイル、h2タグ
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        body1スタイル、divタグ
      </Typography>
      <Typography variant="button" component="span">
        buttonスタイル、spanタグ
      </Typography>
    </Box>
  ),
}

export const CustomStyles: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        カスタムスタイル
      </Typography>
      <Typography
        sx={{
          fontWeight: 'bold',
          fontStyle: 'italic',
          textDecoration: 'underline',
        }}
      >
        太字・イタリック・下線
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          lineHeight: 2,
        }}
      >
        カスタムフォントサイズと行の高さ
      </Typography>
      <Typography
        sx={{
          letterSpacing: 3,
          textTransform: 'uppercase',
        }}
      >
        Letter Spacing and Uppercase
      </Typography>
    </Box>
  ),
}
