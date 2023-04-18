import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import DetailsCollapsible from '.';
import Input from '@components/molecules/input';

export default {
  title: 'Organisms/DetailsCollapsible',
  component: DetailsCollapsible,
} as Meta<typeof DetailsCollapsible>;

export const Component = {
  args: {
    children: (
      <div className="flex flex-col w-1/2 space-y-4">
        <Input label="Handle" name="handle" value="medusa-t-shirt" />
        <Input label="Subtitle" name="subtitle" placeholder="Add a subtitle" />
      </div>
    ),
    triggerProps: {
      className: 'ml-2',
    },
    contentProps: {
      className: 'px-6',
    },
    rootProps: {},
  },
};
