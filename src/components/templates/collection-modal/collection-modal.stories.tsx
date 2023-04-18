import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import CollectionModal from '.';

export default {
  title: 'Template/AddCollectionModal',
  component: CollectionModal,
} as Meta<typeof CollectionModal>;

export const Default = {
  args: {
    onClose: () => {},
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  },
};
