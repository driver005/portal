import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import ClipboardCopyIcon from '.';

export default {
  title: 'Fundamentals/Icons/ClipboardCopy',
  component: ClipboardCopyIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
} as Meta<typeof ClipboardCopyIcon>;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
