import { Meta } from '@storybook/react';
import React from 'react';
import SadFaceIcon from './index';

export default {
  title: 'Fundamentals/Icons/SadFaceIcon',
  component: SadFaceIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof SadFaceIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
