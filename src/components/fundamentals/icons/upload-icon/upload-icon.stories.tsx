import { Meta } from '@storybook/react';
import React from 'react';
import UploadIcon from '.';

export default {
  title: 'Fundamentals/Icons/UploadIcon',
  component: UploadIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof UploadIcon>;

export const Icon = {
  args: {
    size: '20',
    color: 'currentColor',
  },
};
