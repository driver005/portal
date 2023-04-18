import { Meta } from '@storybook/react';
import React from 'react';
import UnpublishIcon from '.';

export default {
  title: 'Fundamentals/Icons/UnpublishIcon',
  component: UnpublishIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof UnpublishIcon>;

export const Icon = {
  args: {
    size: '20',
    color: 'currentColor',
  },
};
