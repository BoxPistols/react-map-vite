// src/stories/Tokens/Typography/index.stories.tsx
import Typography from '.'

import type { Meta } from '@storybook/react'

const TypographyStory: Meta = {
  title: 'Tokens/Typography',
  component: Typography,
  tags: ['!autodocs'],
}

export default TypographyStory

export const Vatiants = () => <Typography />
