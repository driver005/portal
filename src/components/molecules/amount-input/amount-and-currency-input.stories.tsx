import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Option } from '@type/shared';
import AmountAndCurrencyInput from './amount-and-currency-input';

export default {
  title: 'Molecules/AmountInput/AmountAndCurrencyInput',
  component: AmountAndCurrencyInput,
} as Meta<typeof AmountAndCurrencyInput>;

const TemplateWithCurrency: StoryFn<typeof AmountAndCurrencyInput> = (props) => {
  const [value, setValue] = React.useState<{
    amount: number | null | undefined;
    currency: Option | undefined | null;
  }>({
    amount: 1000,
    currency: {
      label: 'USD',
      value: 'USD',
    },
  });

  return (
    <div className="w-[280px]">
      <AmountAndCurrencyInput {...props} onChange={setValue} value={value} />
      <div className="mt-base rounded-rounded bg-grey-5 py-xsmall px-small">
        <pre className="mono-small-regular">{JSON.stringify(value, null, 2)}</pre>
      </div>
    </div>
  );
};

export const AmountAndCurrency = {
  render: TemplateWithCurrency,

  args: {
    label: 'Price',
  },
};
