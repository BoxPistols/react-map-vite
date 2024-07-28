import type { Meta } from '@storybook/react'
import Color from '.'

const ColorStory: Meta = {
  title: 'Tokens/Color',
  component: Color,
  parameters: {
    showThemeSwitcher: true,
    themeSwitcherIconColor: 'default',
  },
}

export default ColorStory

export const ColorMap = () => <Color />
