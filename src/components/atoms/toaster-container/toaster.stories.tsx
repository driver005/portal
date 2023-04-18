import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import ToasterContainer from '.';

export default {
  title: 'Atoms/ToasterContainer',
  component: ToasterContainer,
} as Meta<typeof ToasterContainer>;

const Template: StoryFn<typeof ToasterContainer> = (args) => (
  <div className="flex items-start bg-grey-0 p-base border border-grey-20 rounded-rounded shadow-toaster w-[380px]">
    <ToasterContainer {...args} />
  </div>
);

export const Success = {
  render: Template,
  args: { visible: true },
};

export const Error = {
  render: Template,

  args: {
    visible: true,
  },
};

export const Warning = {
  render: Template,

  args: {
    visible: true,
  },
};

export const Info = {
  render: Template,

  args: {
    visible: true,
  },
};
