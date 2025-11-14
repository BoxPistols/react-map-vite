/** @jsxImportSource react */
import { Box, Grid, Paper, Typography } from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Grid> = {
  title: 'MUI/Layout/Grid',
  component: Grid,
  argTypes: {
    spacing: {
      control: { type: 'number', min: 0, max: 10 },
    },
  },
}

export default meta

type Story = StoryObj<typeof Grid>

const Item = ({ children }: { children: React.ReactNode }) => (
  <Paper
    sx={{
      p: 2,
      textAlign: 'center',
      bgcolor: 'primary.light',
      color: 'white',
    }}
  >
    {children}
  </Paper>
)

export const Playground: Story = {
  args: {
    spacing: 2,
  },
  render: (args) => (
    <Grid container {...args}>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  ),
}

export const Basic: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        基本グリッド
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>xs=12</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  ),
}

export const Spacing: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          spacing=0
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          spacing=2
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          spacing=4
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  ),
}

export const Responsive: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        レスポンシブグリッド
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Item>xs=12 sm=6 md=4</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>xs=12 sm=6 md=4</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>xs=12 sm=6 md=4</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Item>xs=12 sm=6 md=8</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>xs=12 sm=6 md=4</Item>
        </Grid>
      </Grid>
    </Box>
  ),
}

export const AutoLayout: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        自動レイアウト
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Item>xs</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=6</Item>
          </Grid>
          <Grid item xs>
            <Item>xs</Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  ),
}

export const NestedGrid: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        ネストされたグリッド
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Item>
            <Typography>外側</Typography>
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Paper sx={{ p: 1, bgcolor: 'secondary.light', color: 'white' }}>
                    内側 1
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ p: 1, bgcolor: 'secondary.light', color: 'white' }}>
                    内側 2
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>外側</Item>
        </Grid>
      </Grid>
    </Box>
  ),
}

export const ColumnSpacing: Story = {
  render: () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        列・行の間隔を個別に指定
      </Typography>
      <Grid container columnSpacing={2} rowSpacing={1}>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  ),
}
