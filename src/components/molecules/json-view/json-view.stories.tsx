import { Meta, StoryFn } from '@storybook/react';
import JSONView from '.';

export default {
    title: 'Molecules/JSONView',
    component: JSONView,
} as Meta<typeof JSONView>;


const metadata = {
    test: true,
    valid_days: ['monday', 'wednesday', 'friday'],
};

export const Default = {
    args: {
        data: metadata,
    },
};


export const WithName = {
    args: {
        data: metadata,
    },
};
