import { Meta, StoryFn } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import Switch from './';

export default {
  title: 'Atoms/Switch',
  component: Switch,
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(args.checked);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return <Switch {...args} checked={checked} onCheckedChange={(c) => setChecked(c)} />;
};

export const Default = {
  render: Template,
  args: { checked: true },
};
