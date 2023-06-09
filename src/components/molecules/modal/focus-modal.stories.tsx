import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import Button from '@components/fundamentals/button';
import InputField from '../input';
import FocusModal from './focus-modal';

export default {
  title: 'Molecules/FocusModal',
  component: FocusModal,
} as Meta<typeof FocusModal>;

const Template: StoryFn<typeof FocusModal> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open && (
        <FocusModal>
          <FocusModal.Header>
            <span>Test header</span>
            <span onClick={() => setOpen(false)}>Click to close</span>
          </FocusModal.Header>
          <FocusModal.Main>{args.children}</FocusModal.Main>
        </FocusModal>
      )}
      <Button size="small" variant="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
    </div>
  );
};

const BasicTemplate: StoryFn<typeof FocusModal> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open && (
        <FocusModal.BasicFocusModal
          onSubmit={() => setOpen(false)}
          handleClose={() => setOpen(false)}
        >
          {args.children}
        </FocusModal.BasicFocusModal>
      )}
      <Button size="small" variant="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
    </div>
  );
};

const Block = ({ children }) => (
  <div className="w-full h-[100px] my-4 bg-grey-10 rounded-rounded">{children}</div>
);

export const Standard = {
  render: Template,

  args: {
    children: (
      <div className="mt-24">
        <h1 className="inter-xlarge-semibold mb-8">Title</h1>
        <span className="inter-base-semibold mb-4">Subtitle</span>
        <InputField label={'Input label'} />
      </div>
    ),
  },
};

export const Overflow = {
  render: Template,

  args: {
    children: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
      <Block>
        <span className="inter-base-regular">{i}</span>
      </Block>
    )),
  },
};

export const BasicFocusModal = {
  render: BasicTemplate,

  args: {
    children: (
      <div className="mt-24">
        <h1 className="inter-xlarge-semibold mb-8">Title</h1>
        <span className="inter-base-semibold mb-4">Subtitle</span>
        <InputField label={'Input label'} />
      </div>
    ),
  },
};

export const BasicFocusModalOverflow = {
  render: BasicTemplate,

  args: {
    children: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
      <Block>
        <span className="inter-base-regular">{i}</span>
      </Block>
    )),
  },
};
