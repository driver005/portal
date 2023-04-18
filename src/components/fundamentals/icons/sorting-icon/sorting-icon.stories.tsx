import { Meta } from '@storybook/react';
import React from 'react';
import SortingIcon from '.';

export default {
  title: 'Fundamentals/Icons/SortingIcon',
  component: SortingIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof SortingIcon>;

export const Icon = {
  args: {
    size: '24',
    color: '#a0a0a0',
  },
};

export const DescendingIcon = {
  args: {
    size: '24',
    color: '#a0a0a0',
    descendingColor: '#111827',
  },
};

export const AscendingIcon = {
  args: {
    size: '24',
    color: '#a0a0a0',
    ascendingColor: '#111827',
  },
};
