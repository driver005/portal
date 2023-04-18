import { Meta } from '@storybook/react';
import React from 'react';
import TextInput from '.';

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
} as Meta<typeof TextInput>;

export const Primary = {
  args: {
    placeholder: 'Search anything...',
  },
};
