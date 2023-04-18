import { Meta } from '@storybook/react';
import React from 'react';
import ClockIcon from '.';

export default {
  title: 'Fundamentals/Icons/ClockIcon',
  component: ClockIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof ClockIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
