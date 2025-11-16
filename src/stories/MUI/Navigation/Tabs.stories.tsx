/** @jsxImportSource react */
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import PhoneIcon from '@mui/icons-material/Phone'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const meta: Meta<typeof Tabs> = {
  title: 'MUI/Navigation/Tabs',
  component: Tabs,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
    variant: {
      options: ['standard', 'scrollable', 'fullWidth'],
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Playground: Story = {
  args: {
    value: 0,
    orientation: 'horizontal',
    variant: 'standard',
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab label='Item One' />
      <Tab label='Item Two' />
      <Tab label='Item Three' />
    </Tabs>
  ),
}

const BasicExample = () => {
  const [value, setValue] = useState(0)

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h6' gutterBottom>
        基本
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
          <Tab label='Item One' />
          <Tab label='Item Two' />
          <Tab label='Item Three' />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography>Item One の内容</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Item Two の内容</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Item Three の内容</Typography>
      </TabPanel>
    </Box>
  )
}

export const Basic: Story = {
  render: () => <BasicExample />,
}

const WithIconExample = () => {
  const [value, setValue] = useState(0)

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h6' gutterBottom>
        アイコン付き
      </Typography>
      <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
        <Tab icon={<PhoneIcon />} label='お気に入り' />
        <Tab icon={<FavoriteIcon />} label='最近' />
        <Tab icon={<PersonPinIcon />} label='近く' />
      </Tabs>
    </Box>
  )
}

export const WithIcon: Story = {
  render: () => <WithIconExample />,
}

const IconOnlyExample = () => {
  const [value, setValue] = useState(0)

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h6' gutterBottom>
        アイコンのみ
      </Typography>
      <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
        <Tab icon={<PhoneIcon />} aria-label='phone' />
        <Tab icon={<FavoriteIcon />} aria-label='favorite' />
        <Tab icon={<PersonPinIcon />} aria-label='person' />
      </Tabs>
    </Box>
  )
}

export const IconOnly: Story = {
  render: () => <IconOnlyExample />,
}

const DisabledExample = () => {
  const [value, setValue] = useState(0)

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h6' gutterBottom>
        無効なタブ
      </Typography>
      <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
        <Tab label='Active' />
        <Tab label='Disabled' disabled />
        <Tab label='Active' />
      </Tabs>
    </Box>
  )
}

export const Disabled: Story = {
  render: () => <DisabledExample />,
}

const CenteredExample = () => {
  const [value, setValue] = useState(0)

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h6' gutterBottom>
        中央揃え
      </Typography>
      <Tabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        centered>
        <Tab label='Item One' />
        <Tab label='Item Two' />
        <Tab label='Item Three' />
      </Tabs>
    </Box>
  )
}

export const Centered: Story = {
  render: () => <CenteredExample />,
}

const ScrollableExample = () => {
  const [value, setValue] = useState(0)

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h6' gutterBottom>
        スクロール可能
      </Typography>
      <Tabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        variant='scrollable'
        scrollButtons='auto'>
        <Tab label='Item One' />
        <Tab label='Item Two' />
        <Tab label='Item Three' />
        <Tab label='Item Four' />
        <Tab label='Item Five' />
        <Tab label='Item Six' />
        <Tab label='Item Seven' />
      </Tabs>
    </Box>
  )
}

export const Scrollable: Story = {
  render: () => <ScrollableExample />,
}

const FullWidthExample = () => {
  const [value, setValue] = useState(0)

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h6' gutterBottom>
        全幅
      </Typography>
      <Tabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        variant='fullWidth'>
        <Tab label='Item One' />
        <Tab label='Item Two' />
        <Tab label='Item Three' />
      </Tabs>
    </Box>
  )
}

export const FullWidth: Story = {
  render: () => <FullWidthExample />,
}

const VerticalExample = () => {
  const [value, setValue] = useState(0)

  return (
    <Box>
      <Typography variant='h6' gutterBottom>
        縦方向
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          height: 224,
        }}>
        <Tabs
          orientation='vertical'
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          sx={{ borderRight: 1, borderColor: 'divider' }}>
          <Tab label='Item One' />
          <Tab label='Item Two' />
          <Tab label='Item Three' />
          <Tab label='Item Four' />
          <Tab label='Item Five' />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography>Item One</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>Item Two</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography>Item Three</Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography>Item Four</Typography>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Typography>Item Five</Typography>
        </TabPanel>
      </Box>
    </Box>
  )
}

export const Vertical: Story = {
  render: () => <VerticalExample />,
}

const CustomColorExample = () => {
  const [value, setValue] = useState(0)

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h6' gutterBottom>
        カスタムカラー
      </Typography>
      <Tabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        textColor='secondary'
        indicatorColor='secondary'>
        <Tab label='Item One' />
        <Tab label='Item Two' />
        <Tab label='Item Three' />
      </Tabs>
    </Box>
  )
}

export const CustomColor: Story = {
  render: () => <CustomColorExample />,
}

const WrappedExample = () => {
  const [value, setValue] = useState(0)

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h6' gutterBottom>
        テキストの折り返し
      </Typography>
      <Tabs value={value} onChange={(_, newValue) => setValue(newValue)}>
        <Tab label='これは非常に長いタブラベルです' wrapped />
        <Tab label='短いラベル' />
        <Tab label='これも非常に長いタブラベルです' wrapped />
      </Tabs>
    </Box>
  )
}

export const Wrapped: Story = {
  render: () => <WrappedExample />,
}
