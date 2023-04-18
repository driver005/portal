import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import GeneratingInput from '.';

export default {
  title: 'Molecules/GeneratingInput',
  component: GeneratingInput,
} as Meta<typeof GeneratingInput>;

export const Default = {
  args: {
    label: 'Code',
    required: true,
    placeholder: 'MEDUSA15',
  },
};

export const HasValue = {
  args: {
    label: 'Code',
    required: true,
    placeholder: 'MEDUSA15',
    value: 'SUMMER2014',
  },
};
