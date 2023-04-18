import { Meta } from '@storybook/react';
import React from 'react';
import SettingsCard from '.';
import HappyIcon from '@components/fundamentals/icons/happy-icon';

export default {
  title: 'Atoms/SettingsCard',
  component: SettingsCard,
} as Meta<typeof SettingsCard>;

const icon = <HappyIcon />;

export const CustomerService = {
  args: {
    icon: icon,
    heading: 'Customer Service',
    description: 'Reach out to our customer service team',
    to: '/customer-service',
    externalLink: null,
    disabled: false,
  },
};
