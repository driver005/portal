import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import EditDenominationsModal from '.';
import Button from '@components/fundamentals/button';
import { v4 as uuidv4 } from 'uuid';

export default {
  title: 'Organisms/EditDenominationModal',
  component: EditDenominationsModal,
} as Meta<typeof EditDenominationsModal>;

const Template: StoryFn<typeof EditDenominationsModal> = (args) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="primary" size="small">
        Edit denominations
      </Button>
      {isOpen && <EditDenominationsModal {...args} handleClose={() => setOpen(false)} />}
    </>
  );
};

export const Default = {
  render: Template,

  args: {
    denominations: [],
    onSubmit: console.log,
    currencyCodes: ['USD', 'EUR', 'GBP', 'DKK', 'NOK', 'SEK'],
  },
};
