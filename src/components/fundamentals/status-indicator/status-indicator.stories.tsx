import { Meta } from '@storybook/react';
import React from 'react';
import StatusIndicator from '.';

export default {
  title: 'Fundamentals/StatusIndicator',
  component: StatusIndicator,
} as Meta<typeof StatusIndicator>;

export const Success = {
  args: {
    variant: 'success',
    title: 'Active',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    title: 'Expired',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    title: 'Pending',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    title: 'Go',
  },
};
