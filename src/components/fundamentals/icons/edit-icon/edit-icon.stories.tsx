import { Meta } from '@storybook/react';
import React from 'react';
import EditIcon from '.';

export default {
  title: 'Fundamentals/Icons/EditIcon',
  component: EditIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof EditIcon>;

export const Icon = {
  args: {
    size: '20',
    color: 'currentColor',
  },
};
