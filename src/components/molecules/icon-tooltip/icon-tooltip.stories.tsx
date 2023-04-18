import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { default as IconTooltip, default as Input } from '.';

export default {
  title: 'Molecules/IconTooltip',
  component: IconTooltip,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['info', 'warning', 'error'],
      },
      content: {
        control: {
          type: 'text',
        },
      },
    },
  },
} as Meta<typeof IconTooltip>;

const Template: StoryFn<typeof IconTooltip> = (args) => <Input {...args} />;

export const Info = {
  render: Template,

  args: {
    content: 'Tags are one word descriptors for the product used for searches',
  },
};

export const Warning = {
  render: Template,

  args: {
    content: 'Tags are one word descriptors for the product used for searches',
    type: 'warning',
  },
};

export const Error = {
  render: Template,

  args: {
    content: 'Tags are one word descriptors for the product used for searches',
    type: 'error',
  },
};
