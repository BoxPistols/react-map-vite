import type { Meta, StoryObj } from '@storybook/react';
import Mapbox from '.'; // Mapbox コンポーネントの正しいインポートパスを確認してください

const meta: Meta<typeof Mapbox> = {
  title: 'Components/Mapbox',
  component: Mapbox,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['map', 'geolocation', 'interactive'],
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
} satisfies Meta<typeof Mapbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // 既定値をここに設定、必要に応じて上記で定義したデフォルト値を使用
  },
};
