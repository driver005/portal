import { Meta } from '@storybook/react';
import React from 'react';
import CoinsIcon from '.';

export default {
  title: 'Fundamentals/Icons/CoinsIcon',
  component: CoinsIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof CoinsIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
