import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Metadata from '.';

export default {
  title: 'Organisms/Metadata',
  component: Metadata,
} as Meta<typeof Metadata>;

const Template: StoryFn<typeof Metadata> = (args) => (
  <div className="max-w-md">
    <Metadata {...args} />
  </div>
);

export const Default = {
  render: Template,

  args: {
    control: {},
    metadata: [],
  },
};
