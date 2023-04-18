import { Meta } from '@storybook/react';
import React from 'react';
import PercentIcon from '.';

export default {
  title: 'Fundamentals/Icons/PercentIcon',
  component: PercentIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof PercentIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
