import { Meta } from '@storybook/react';
import React from 'react';
import NotificationBell from '.';

export default {
  title: 'Molecules/NotificationBell',
  component: NotificationBell,
} as Meta<typeof NotificationBell>;

export const HasNotifications = {
  args: {
    hasNotifications: true,
  },
};

export const NoNotifications = {
  args: {
    hasNotifications: false,
  },
};
