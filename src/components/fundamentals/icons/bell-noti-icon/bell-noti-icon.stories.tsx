import { Meta } from '@storybook/react';
import React from 'react';
import BellIcon from '../bell-noti-icon';

export default {
  title: 'Fundamentals/Icons/BellNotiIcon',
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
    accentColor: '#F43F5E',
  },
};
