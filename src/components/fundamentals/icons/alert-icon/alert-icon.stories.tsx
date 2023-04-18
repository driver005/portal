import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import AlertIcon from '.';

export default {
  title: 'Fundamentals/Icons/AlertIcon',
  component: AlertIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof AlertIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
