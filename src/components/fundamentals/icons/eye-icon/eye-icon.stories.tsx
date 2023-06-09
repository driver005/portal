import { Meta } from '@storybook/react';
import React from 'react';
import EyeIcon from '.';

export default {
  title: 'Fundamentals/Icons/EyeIcon',
  component: EyeIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof EyeIcon>;

export const Icon = {
  args: {
    size: '20',
    color: 'currentColor',
  },
};
