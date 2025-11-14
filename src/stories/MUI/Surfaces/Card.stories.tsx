/** @jsxImportSource react */
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ShareIcon from '@mui/icons-material/Share'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Card> = {
  title: 'MUI/Surfaces/Card',
  component: Card,
  argTypes: {
    variant: {
      options: ['elevation', 'outlined'],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Card>

export const Playground: Story = {
  args: {
    variant: 'elevation',
  },
  render: (args) => (
    <Card {...args} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          カードタイトル
        </Typography>
        <Typography variant="body2" color="text.secondary">
          これはカードのコンテンツです。
        </Typography>
      </CardContent>
    </Card>
  ),
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        基本
      </Typography>
      <Stack spacing={2} sx={{ maxWidth: 345 }}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">共有</Button>
            <Button size="small">詳細</Button>
          </CardActions>
        </Card>
      </Stack>
    </Box>
  ),
}

export const Variants: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        バリエーション
      </Typography>
      <Stack spacing={2} sx={{ maxWidth: 345 }}>
        <Card variant="elevation">
          <CardContent>
            <Typography variant="h6">Elevation (デフォルト)</Typography>
            <Typography variant="body2" color="text.secondary">
              影付きのカードです。
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6">Outlined</Typography>
            <Typography variant="body2" color="text.secondary">
              枠線のあるカードです。
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  ),
}

export const WithMedia: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        メディア付き
      </Typography>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/400/140"
          alt="random image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            画像付きカード
          </Typography>
          <Typography variant="body2" color="text.secondary">
            カードに画像を表示する例です。
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">共有</Button>
          <Button size="small">詳細</Button>
        </CardActions>
      </Card>
    </Box>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        ヘッダー付き
      </Typography>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'error.main' }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2024"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://picsum.photos/400/194"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  ),
}

export const Complex: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(false)

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          複雑なカード
        </Typography>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'primary.main' }}>U</Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="ユーザー名"
            subheader="2024年1月1日"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://picsum.photos/400/194?random=1"
            alt="Random"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              これは複雑なカードレイアウトの例です。
              展開可能なコンテンツを含んでいます。
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{ marginLeft: 'auto' }}
            >
              <MoreVertIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>詳細情報:</Typography>
              <Typography paragraph>
                ここに追加の詳細情報が表示されます。
                展開ボタンをクリックすることで、この領域を表示・非表示できます。
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    )
  },
}

export const ActionButtons: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        アクションボタン
      </Typography>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            タイトル
          </Typography>
          <Typography variant="body2" color="text.secondary">
            カードのコンテンツ
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">共有</Button>
          <Button size="small">詳細</Button>
        </CardActions>
      </Card>
    </Box>
  ),
}
