import { Meta } from '@storybook/react';
import React from 'react';
import CrosshairIcon from '.';

export default {
  title: 'Fundamentals/Icons/CrosshairIcon',
  component: CrosshairIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof CrosshairIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
