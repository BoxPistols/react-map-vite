/** @jsxImportSource react */
import HomeIcon from '@mui/icons-material/Home'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import {
  Box,
  Breadcrumbs,
  Chip,
  emphasize,
  Link,
  styled,
  Typography,
} from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'MUI/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    maxItems: {
      control: { type: 'number' },
    },
    separator: {
      control: { type: 'text' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Playground: Story = {
  args: {
    maxItems: 8,
  },
  render: (args) => (
    <Breadcrumbs {...args}>
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/catalog">
        Catalog
      </Link>
      <Typography color="text.primary">Accessories</Typography>
    </Breadcrumbs>
  ),
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        基本
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/catalog">
          Catalog
        </Link>
        <Typography color="text.primary">Accessories</Typography>
      </Breadcrumbs>
    </Box>
  ),
}

export const ActiveLast: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        最後の項目もリンク
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/catalog">
          Catalog
        </Link>
        <Link underline="hover" color="inherit" href="/accessories">
          Accessories
        </Link>
      </Breadcrumbs>
    </Box>
  ),
}

export const CustomSeparator: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        カスタムセパレータ
      </Typography>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/catalog">
          Catalog
        </Link>
        <Typography color="text.primary">Accessories</Typography>
      </Breadcrumbs>
      <Box sx={{ my: 2 }} />
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/catalog">
          Catalog
        </Link>
        <Typography color="text.primary">Accessories</Typography>
      </Breadcrumbs>
      <Box sx={{ my: 2 }} />
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/catalog">
          Catalog
        </Link>
        <Typography color="text.primary">Accessories</Typography>
      </Breadcrumbs>
    </Box>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        アイコン付き
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/catalog"
        >
          Catalog
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          Accessories
        </Typography>
      </Breadcrumbs>
    </Box>
  ),
}

export const MaxItems: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        最大表示項目数
      </Typography>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/catalog">
          Catalog
        </Link>
        <Link underline="hover" color="inherit" href="/accessories">
          Accessories
        </Link>
        <Link underline="hover" color="inherit" href="/new-collection">
          New Collection
        </Link>
        <Typography color="text.primary">Belts</Typography>
      </Breadcrumbs>
    </Box>
  ),
}

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800]
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  }
})

export const CustomizedBreadcrumbs: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        カスタムスタイル
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="/"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb component="a" href="/catalog" label="Catalog" />
        <StyledBreadcrumb
          label="Accessories"
        />
      </Breadcrumbs>
    </Box>
  ),
}

export const RouterIntegration: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        ルーター統合
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            alert('Navigate to /')
          }}
        >
          ホーム
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/products"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault()
            alert('Navigate to /products')
          }}
        >
          商品
        </Link>
        <Typography color="text.primary">詳細</Typography>
      </Breadcrumbs>
    </Box>
  ),
}
