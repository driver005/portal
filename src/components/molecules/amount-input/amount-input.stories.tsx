import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import AmountAndCurrencyInput from './amount-and-currency-input';
import AmountInput from './amount-input';

export default {
    title: 'Molecules/AmountInput',
    component: AmountInput,
} as Meta<typeof AmountInput>;

const Template: StoryFn<typeof AmountInput> = (props) => {
    const [value, setValue] = React.useState<number | undefined | null>(1000);

    return (
        <div className="w-[280px]">
            <AmountInput {...props} onChange={setValue} value={value} currencyCode="usd" />
            <div className="mt-base rounded-rounded bg-grey-5 py-xsmall px-small">
                <pre className="mono-small-regular">{JSON.stringify(value, null, 2)}</pre>
            </div>
        </div>
    );
};

export const Amount = {
    render: Template,

    args: {
        label: 'Price',
    },
};
