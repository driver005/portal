import { Meta } from '@storybook/react';
import React from 'react';
import MapPinIcon from '.';

export default {
  title: 'Fundamentals/Icons/MapPinIcon',
  component: MapPinIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof MapPinIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
