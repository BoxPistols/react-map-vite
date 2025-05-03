import type { Meta } from '@storybook/react'
import React from 'react'

import { Color } from '.'

const ColorStory: Meta = {
  title: 'Tokens/Color',
  component: Color,
  tags: ['!autodocs'],
}

export default ColorStory

export const ColorMap = () => <Color />
