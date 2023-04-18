import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import HotKeyAction from '.';
import BackspaceIcon from '@components/fundamentals/icons/backspace-icon';

export default {
  title: 'Molecules/HotKeyAction',
} as Meta<typeof HotKeyAction>;

const Template: StoryFn<typeof HotKeyAction> = (args) => (
  <div className="flex bg-grey-80 p-base">
    <HotKeyAction {...args} />
  </div>
);

export const Default = {
  render: Template,

  args: {
    label: 'Unpublish',
    icon: 'U',
    hotKey: 'U',
    onAction: () => alert('U key pressed!'),
  },
};

export const WithIcon = {
  render: Template,

  args: {
    label: 'Delete',
    icon: <BackspaceIcon />,
    hotKey: 'backspace',
    onAction: () => alert('backspace key pressed!'),
  },
};
