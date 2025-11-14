/** @jsxImportSource react */
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import StarIcon from '@mui/icons-material/Star'
import { Box, Rating, Typography } from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Rating> = {
  title: 'MUI/Inputs/Rating',
  component: Rating,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    precision: {
      control: { type: 'number', min: 0.1, max: 1, step: 0.1 },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Rating>

export const Playground: Story = {
  args: {
    defaultValue: 3,
    size: 'medium',
    precision: 1,
    disabled: false,
    readOnly: false,
  },
  render: (args) => <Rating {...args} />,
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        基本
      </Typography>
      <Rating defaultValue={3} />
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        サイズ
      </Typography>
      <Rating defaultValue={3} size="small" />
      <Rating defaultValue={3} size="medium" />
      <Rating defaultValue={3} size="large" />
    </Box>
  ),
}

export const Precision: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        精度
      </Typography>
      <Box>
        <Typography variant="body2">整数のみ（precision=1）</Typography>
        <Rating defaultValue={3} precision={1} />
      </Box>
      <Box>
        <Typography variant="body2">0.5刻み（precision=0.5）</Typography>
        <Rating defaultValue={2.5} precision={0.5} />
      </Box>
    </Box>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(3)

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          制御されたRating
        </Typography>
        <Rating
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        />
        <Typography variant="body2" sx={{ mt: 2 }}>
          現在の評価: {value !== null ? value : '未評価'}
        </Typography>
      </Box>
    )
  },
}

export const ReadOnly: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        読み取り専用
      </Typography>
      <Rating value={4} readOnly />
      <Rating value={2.5} precision={0.5} readOnly />
    </Box>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        無効状態
      </Typography>
      <Rating defaultValue={3} disabled />
    </Box>
  ),
}

export const NoRating: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(null)

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          未評価対応
        </Typography>
        <Rating
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        />
        <Typography variant="body2" sx={{ mt: 2 }}>
          {value === null ? '未評価' : `評価: ${value}`}
        </Typography>
      </Box>
    )
  },
}

export const CustomIcon: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        カスタムアイコン
      </Typography>
      <Rating
        defaultValue={3}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
  ),
}

export const Highlighter: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(2)
    const [hover, setHover] = useState(-1)

    const labels: { [index: string]: string } = {
      1: '最悪',
      2: '悪い',
      3: '普通',
      4: '良い',
      5: '最高',
    }

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          ホバー表示
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Rating
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover)
            }}
          />
          {value !== null && (
            <Typography variant="body2">
              {labels[hover !== -1 ? hover : value]}
            </Typography>
          )}
        </Box>
      </Box>
    )
  },
}

export const Max: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        最大値のカスタマイズ
      </Typography>
      <Box>
        <Typography variant="body2">3段階評価</Typography>
        <Rating defaultValue={2} max={3} />
      </Box>
      <Box>
        <Typography variant="body2">10段階評価</Typography>
        <Rating defaultValue={7} max={10} />
      </Box>
    </Box>
  ),
}

export const IconStyles: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(2)

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          アイコンスタイルのカスタマイズ
        </Typography>
        <Rating
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
          icon={<StarIcon fontSize="inherit" />}
          emptyIcon={<StarIcon fontSize="inherit" />}
          sx={{
            '& .MuiRating-iconFilled': {
              color: '#ff6d75',
            },
            '& .MuiRating-iconHover': {
              color: '#ff3d47',
            },
          }}
        />
      </Box>
    )
  },
}
