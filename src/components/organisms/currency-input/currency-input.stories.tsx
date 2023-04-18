import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import CurrencyInput from '.';

export default {
  title: 'Organisms/CurrencyInput',
  component: CurrencyInput.Root,
} as Meta<typeof CurrencyInput.Root>;

const Template: StoryFn<typeof CurrencyInput.Root> = (args) => <CurrencyInput.Root {...args} />;

export const Default = {
  render: Template,

  args: {
    currentCurrency: 'usd',
    currencyCodes: ['usd', 'eur', 'gbp'],
  },
};

export const ReadOnly = {
  render: Template,

  args: {
    currentCurrency: 'usd',
    readOnly: true,
  },
};

const TemplateWithAmount = (args) => (
  <CurrencyInput.Root {...args.currencyArgs}>
    <CurrencyInput.Amount {...args.amountArgs}></CurrencyInput.Amount>
  </CurrencyInput.Root>
);

export const WithAmount = {
  render: TemplateWithAmount,

  args: {
    currencyArgs: {
      currentCurrency: 'usd',
      currencyCodes: ['usd', 'eur', 'krw'],
      size: 'small',
    },
    amountArgs: {
      label: 'Price',
      amount: 10000,
    },
  },
};
