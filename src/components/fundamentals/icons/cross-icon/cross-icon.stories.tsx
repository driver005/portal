import { Meta } from '@storybook/react';
import React from 'react';
import CrossIcon from '.';

export default {
  title: 'Fundamentals/Icons/CrossIcon',
  component: CrossIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof CrossIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
