import { Meta } from '@storybook/react';
import React from 'react';
import ShippingOption from '.';

export default {
  title: 'Atoms/ShippingOption',
  component: ShippingOption,
} as Meta<typeof ShippingOption>;

export const FlatRate = {
  args: {
    option: {
      name: 'Standard',
      amount: 1000,
      price_type: 'flat_rate',
      requirements: [
        { type: 'max_subtotal', amount: 10000 },
        { type: 'min_subtotal', amount: 0 },
      ],
      admin_only: false,
      data: {
        name: 'FedEx',
      },
    },
    currency_code: 'USD',
    editFn: () => {},
  },
};

export const CalculatedRate = {
  args: {
    option: {
      name: 'Standard',
      amount: 1000,
      price_type: 'calculated',
      requirements: [
        { type: 'max_subtotal', amount: 10000 },
        { type: 'min_subtotal', amount: 0 },
      ],
      admin_only: false,
      data: {
        name: 'FedEx',
      },
    },
    currency_code: 'USD',
    editFn: () => {},
  },
};

export const AdminOnly = {
  args: {
    option: {
      name: 'Standard',
      amount: 1000,
      price_type: 'calculated',
      requirements: [],
      admin_only: true,
      data: {
        name: 'FedEx',
      },
    },
    currency_code: 'USD',
    editFn: () => {},
  },
};
