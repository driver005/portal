import { Meta } from '@storybook/react';
import React from 'react';
import NativeSelect from '.';

export default {
  title: 'Atoms/NativeSelect',
  component: NativeSelect,
} as Meta<typeof NativeSelect>;

const NativeSelectTemplate = (args) => (
  <div className="h-[200px] w-[750px]">
    <NativeSelect defaultValue={args.items[0]}>
      {args.items.map((item) => (
        <NativeSelect.Item value={item}>{item}</NativeSelect.Item>
      ))}
    </NativeSelect>
  </div>
);

export const NativeSelectExample = {
  render: NativeSelectTemplate,

  args: {
    items: ['Apple', 'Orange', 'Grape', 'Banana', 'Peach', 'Watermelon', 'Strawberry'],
  },
};
