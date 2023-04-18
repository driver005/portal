import { Meta } from '@storybook/react';
import React from 'react';
import BellIcon from '.';

export default {
  title: 'Fundamentals/Icons/BellIcon',
  component: BellIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof BellIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
