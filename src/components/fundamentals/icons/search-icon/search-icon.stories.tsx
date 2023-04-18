import { Meta } from '@storybook/react';
import React from 'react';
import SearchIcon from '.';

export default {
  title: 'Fundamentals/Icons/SearchIcon',
  component: SearchIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof SearchIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
