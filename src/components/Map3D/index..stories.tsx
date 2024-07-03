import type { Meta, StoryObj } from '@storybook/react'
import Map3D from '.'

export default {
  title: 'Components/Map/MapLibre/Map3D',
  component: Map3D,
} as Meta

export const Default: StoryObj = {
  render: () => <Map3D />,
}
