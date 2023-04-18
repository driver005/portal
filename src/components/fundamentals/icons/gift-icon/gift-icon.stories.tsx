import { Meta } from '@storybook/react';
import React from 'react';
import GiftIcon from '.';

export default {
  title: 'Fundamentals/Icons/GiftIcon',
  component: GiftIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof GiftIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
