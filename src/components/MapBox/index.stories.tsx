import React from 'react'

import { Box } from '@mui/material'

import type { Meta, StoryObj } from '@storybook/react'

import { Mapbox } from '.' // Mapbox コンポーネントの正しいインポートパスを確認してください

const meta: Meta<typeof Mapbox> = {
  title: 'Components/Map/Mapbox',
  component: Mapbox,
  tags: ['!autodocs', 'map', 'geolocation', 'interactive'],
  parameters: {
    docs: { disable: true },
    layout: 'fullscreen',
    showThemeSwitcher: false,
  },
  argTypes: {
    latitude: {
      control: 'number',
      description: '緯度',
      defaultValue: 35.6809591, // 東京の緯度
    },
    longitude: {
      control: 'number',
      description: '経度',
      defaultValue: 139.7673068, // 東京の経度
    },
    zoom: {
      control: 'number',
      description: 'ズームレベル',
      defaultValue: 9,
    },
  },
  args: {
    latitude: 35.6809591,
    longitude: 139.7673068,
    zoom: 9,
  },
} satisfies Meta<typeof Mapbox>

export default meta

type Story = StoryObj<typeof meta>

// stylingを適用するために、MapboxコンポーネントをBoxコンポーネントでラップします
export const Default: Story = {
  render: ({ latitude, longitude, zoom }) => (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Mapbox latitude={latitude} longitude={longitude} zoom={zoom} />
    </Box>
  ),
}
