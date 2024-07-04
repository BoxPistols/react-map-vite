import type { Meta, StoryObj } from '@storybook/react'
import { Map3D } from '.'

const meta: Meta<typeof Map3D> = {
  title: 'Components/Map/MapLibre/Map3D',
  component: Map3D,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['map', 'geolocation', 'interactive'],
  argTypes: {
    latitude: {
      control: { type: 'number', min: -90, max: 90, step: 0.000001 },
      description: '緯度',
    },
    longitude: {
      control: { type: 'number', min: -180, max: 180, step: 0.000001 },
      description: '経度',
    },
    zoom: {
      control: { type: 'number', min: 0, max: 22, step: 0.1 },
      description: 'ズームレベル',
    },
  },
}

export default meta

type Story = StoryObj<typeof Map3D>

export const Default: Story = {
  args: {
    latitude: 35.6809591,
    longitude: 139.7673068,
    zoom: 9,
  },
}

export const LowZoom: Story = {
  args: {
    latitude: 35.6809591,
    longitude: 139.7673068,
    zoom: 4,
  },
}

export const NewYork: Story = {
  args: {
    latitude: 40.7128,
    longitude: -74.006,
    zoom: 12,
  },
}
