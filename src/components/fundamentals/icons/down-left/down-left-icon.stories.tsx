import { Meta } from '@storybook/react';
import React from 'react';
import DownLeftIcon from '.';

export default {
  title: 'Fundamentals/Icons/DownLeftIcon',
  component: DownLeftIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof DownLeftIcon>;

export const Icon = {
  args: {
    size: '16px',
    color: 'currentColor',
  },
};
