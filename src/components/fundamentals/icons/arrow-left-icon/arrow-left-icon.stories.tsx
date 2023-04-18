import { Meta } from '@storybook/react';
import React from 'react';
import ArrowLeftIcon from '.';

export default {
  title: 'Fundamentals/Icons/ArrowLeftIcon',
  component: ArrowLeftIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof ArrowLeftIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
