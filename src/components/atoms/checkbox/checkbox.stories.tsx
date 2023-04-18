import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Checkbox from '.';

export default {
    title: 'Atoms/Checkbox',
    component: Checkbox,
} as Meta<typeof Checkbox>;

export const Default = {
    args: {
        label: 'Checkbox',
    },
};
