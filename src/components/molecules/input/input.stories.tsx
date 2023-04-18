import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Input from '.';
import Tooltip from '@components/atoms/tooltip';
import AlertIcon from '@components/fundamentals/icons/alert-icon';

export default {
  title: 'Molecules/Input',
  component: Input,
} as Meta<typeof Input>;

export const Default = {
  args: {
    label: 'First name',
    placeholder: 'LeBron James',
  },
};

export const Required = {
  args: {
    label: 'Email',
    required: true,
    placeholder: 'lebron@james.com',
  },
};

export const WithInfoTooltip = {
  args: {
    label: 'Default',
    tooltipContent: 'This is a tooltip',
  },
};

export const WithCustomTooltip = {
  args: {
    label: 'Tricky',
    tooltip: (
      <Tooltip
        content={'Changing this might cause bad luck'}
        className="text-rose-50"
        side="right"
        align="end"
      >
        <AlertIcon size={16} className="flex text-rose-50" />
      </Tooltip>
    ),
  },
};
