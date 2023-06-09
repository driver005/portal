import { Meta } from '@storybook/react';
import React from 'react';
import SidedMouthFaceIcon from '.';

export default {
  title: 'Fundamentals/Icons/SidedMouthFaceIcon',
  component: SidedMouthFaceIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof SidedMouthFaceIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
