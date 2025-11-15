/** @jsxImportSource react */
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextField> = {
  title: 'MUI/Inputs/TextField',
  component: TextField,
  argTypes: {
    variant: {
      options: ['outlined', 'filled', 'standard'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    multiline: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof TextField>

export const Playground: Story = {
  args: {
    label: 'テキストフィールド',
    placeholder: 'プレースホルダー',
    variant: 'outlined',
    size: 'medium',
    disabled: false,
    required: false,
    multiline: false,
    fullWidth: false,
  },
}

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h6' gutterBottom>
        バリエーション
      </Typography>
      <TextField label='Outlined' variant='outlined' defaultValue='outlined' />
      <TextField label='Filled' variant='filled' defaultValue='filled' />
      <TextField label='Standard' variant='standard' defaultValue='standard' />
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h6' gutterBottom>
        サイズ
      </Typography>
      <TextField label='Small' size='small' />
      <TextField label='Medium' size='medium' />
    </Box>
  ),
}

export const States: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h6' gutterBottom>
        状態
      </Typography>
      <TextField label='通常' />
      <TextField label='無効' disabled />
      <TextField label='必須' required />
      <TextField label='エラー' error helperText='エラーメッセージ' />
      <TextField label='成功' color='success' helperText='入力が完了しました' />
    </Box>
  ),
}

export const WithHelperText: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h6' gutterBottom>
        ヘルパーテキスト
      </Typography>
      <TextField label='メール' helperText='example@example.com' />
      <TextField
        label='パスワード'
        type='password'
        helperText='8文字以上で入力してください'
      />
      <TextField label='エラー例' error helperText='この項目は必須です' />
    </Box>
  ),
}

const WithIconsExample = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h6' gutterBottom>
        アイコン付き
      </Typography>
      <TextField
        label='パスワード'
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge='end'>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label='金額'
        InputProps={{
          startAdornment: <InputAdornment position='start'>¥</InputAdornment>,
        }}
      />
    </Box>
  )
}

export const WithIcons: Story = {
  render: () => <WithIconsExample />,
}

export const Multiline: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h6' gutterBottom>
        複数行
      </Typography>
      <TextField
        label='コメント'
        multiline
        rows={4}
        placeholder='こちらにコメントを入力してください'
      />
      <TextField
        label='説明'
        multiline
        maxRows={4}
        placeholder='自動で行が増えます'
      />
    </Box>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h6' gutterBottom>
        全幅
      </Typography>
      <TextField label='氏名' fullWidth />
      <TextField label='メールアドレス' fullWidth />
      <TextField label='住所' fullWidth multiline rows={3} />
    </Box>
  ),
}
