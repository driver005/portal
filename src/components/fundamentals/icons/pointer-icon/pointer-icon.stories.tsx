import { Meta } from '@storybook/react';
import React from 'react';
import PointerIcon from '.';

export default {
  title: 'Fundamentals/Icons/PointerIcon',
  component: PointerIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof PointerIcon>;

export const Icon = {
  args: {
    size: '16px',
    color: 'currentColor',
  },
};
