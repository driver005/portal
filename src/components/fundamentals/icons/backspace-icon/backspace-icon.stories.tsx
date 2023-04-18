import { Meta } from '@storybook/react';
import React from 'react';
import BackspaceIcon from '.';

export default {
  title: 'Fundamentals/Icons/BackspaceIcon',
  component: BackspaceIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof BackspaceIcon>;

export const Icon = {
  args: {
    size: '16',
    color: 'currentColor',
  },
};
