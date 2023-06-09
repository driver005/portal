import { Meta } from '@storybook/react';
import React from 'react';
import ArrowRightIcon from '.';

export default {
  title: 'Fundamentals/Icons/ArrowRightIcon',
  component: ArrowRightIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof ArrowRightIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
