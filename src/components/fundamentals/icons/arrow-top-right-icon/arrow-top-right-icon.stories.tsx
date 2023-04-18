import { Meta } from '@storybook/react';
import React from 'react';
import ArrowTopRightIcon from '.';

export default {
  title: 'Fundamentals/Icons/ArrowTopRightIcon',
  component: ArrowTopRightIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof ArrowTopRightIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
