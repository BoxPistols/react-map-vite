import { Meta } from '@storybook/react';
import { Button } from '@mui/material';

const meta: Meta<typeof Button> = {
  title: 'Mui/Button',
  component: Button,
};

export default meta;

export const Primary = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'contained',
    color: 'secondary',
    children: 'Secondary Button',
  },
};
