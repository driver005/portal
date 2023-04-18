import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import InfoIcon from '.';

export default {
  title: 'Fundamentals/Icons/InfoIcon',
  component: InfoIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof InfoIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
