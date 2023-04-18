import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Avatar from '.';

export default {
    title: 'Atoms/Avatar',
    component: Avatar,
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => (
    <div className="h-large w-large">
        <Avatar {...args} />
    </div>
);

export const User = {
    render: Template,

    args: {
        user: {
            first_name: 'Kasper',
            last_name: 'Kristensen',
            email: 'kasper@medusajs.com',
        },
    },
};

export const NoUser = {
    render: Template,
    args: {},
};
