// src/stories/Tokens/Typography/index.stories.tsx
import type { Meta } from '@storybook/react'
import React from 'react'

import Typography from '.'

const TypographyStory: Meta = {
  title: 'Tokens/Typography',
  component: Typography,
  tags: ['!autodocs'],
}

export default TypographyStory

export const Vatiants = () => <Typography />
