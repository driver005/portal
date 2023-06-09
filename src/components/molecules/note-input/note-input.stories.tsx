import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import useState from 'storybook-addon-state';
import NoteInput from '.';

export default {
  title: 'Molecules/NoteInput',
  component: NoteInput,
} as Meta<typeof NoteInput>;

const Template: StoryFn<typeof NoteInput> = (args) => {
  const [note, setNote] = useState<string | undefined>('note', undefined);
  return (
    <div className="max-w-md px-xlarge py-large">
      <NoteInput {...args} onSubmit={setNote} />
      <div>{note}</div>
    </div>
  );
};

export const Default = {
  render: Template,
  args: {},
};
