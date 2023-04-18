import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import TagInput from '.';

export default {
  title: 'Molecules/TagInput',
  component: TagInput,
} as Meta<typeof TagInput>;

export const Normal = {
  args: {
    label: 'Tags (comma separated values)',
    values: ['SS21', 'Core'],
    placeholder: 'Sprint, autumn, etc.',
    tooltipContent: 'Used to add keywords',
  },
};
