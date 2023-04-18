import { Meta } from '@storybook/react';
import React from 'react';
import UserIcon from '.';

export default {
  title: 'Fundamentals/Icons/UserIcon',
  component: UserIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof UserIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
