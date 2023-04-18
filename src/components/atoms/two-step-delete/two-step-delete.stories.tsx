import { Meta } from '@storybook/react';
import React from 'react';
import useState from 'storybook-addon-state';
import TwoStepDelete from '.';
import useNotification from '@hooks/use-notification';

export default {
  title: 'Molecules/Select',
  component: TwoStepDelete,
} as Meta<typeof TwoStepDelete>;

const Template = (args) => {
  const [deleting, setDeleting] = useState<boolean>('delete', false);

  const notification = useNotification();

  const fakeDelete = () => {
    setDeleting(true);
    setTimeout(() => {
      setDeleting(false);
      notification('Success', 'Successfully deleted something', 'success');
    }, 3000);
  };

  return (
    <div>
      <TwoStepDelete deleting={deleting} onDelete={fakeDelete} />
    </div>
  );
};

export const Default = {
  render: Template,

  args: {},
};
