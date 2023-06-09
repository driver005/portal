import { Meta } from '@storybook/react';
import React from 'react';
import GearIcon from '.';

export default {
  title: 'Fundamentals/Icons/GearIcon',
  component: GearIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof GearIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
