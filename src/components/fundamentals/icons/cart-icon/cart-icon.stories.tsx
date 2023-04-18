import { Meta } from '@storybook/react';
import CartIcon from '.';

const cartIconMeta: Meta<typeof CartIcon> = {
  title: 'Fundamentals/Icons/CartIcon',
  component: CartIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['24', '20', '16'],
      },
    },
  },
};

export default cartIconMeta;

export const Icon = {
  args: {
    size: '24',
    color: 'currentColor',
  },
};
