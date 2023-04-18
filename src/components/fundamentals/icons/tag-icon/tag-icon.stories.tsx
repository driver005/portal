import { Meta } from '@storybook/react';
import React from 'react';
import TagIcon from '.';

export default {
  title: 'Fundamentals/Icons/TagIcon',
  component: TagIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof TagIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
