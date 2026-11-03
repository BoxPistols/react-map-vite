import { Color } from '.'

import type { Meta } from '@storybook/react'

const ColorStory: Meta = {
  title: 'Tokens/Color',
  component: Color,
  tags: ['!autodocs'],
}

export default ColorStory

export const ColorMap = () => <Color />
