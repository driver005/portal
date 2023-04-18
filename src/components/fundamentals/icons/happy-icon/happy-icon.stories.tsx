import { Meta } from '@storybook/react';
import React from 'react';
import HappyIcon from '.';

export default {
  title: 'Fundamentals/Icons/HappyIcon',
  component: HappyIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof HappyIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
