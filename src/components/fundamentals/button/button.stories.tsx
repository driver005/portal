import { Meta } from '@storybook/react';
import React from 'react';
import Button from '.';
import HappyIcon from '../icons/happy-icon';

export default {
  title: 'Fundamentals/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'ghost'],
      },
    },
  },
} as Meta<typeof Button>;

const Template = (args) => <Button {...args}>Action</Button>;

export const PrimaryLarge = {
  render: Template,

  args: {
    variant: 'primary',
    size: 'large',
  },
};

export const PrimaryLargeLoading = {
  render: Template,

  args: {
    variant: 'primary',
    size: 'large',
    loading: true,
    children: 'Loading',
  },
};

export const PrimaryMedium = {
  render: Template,

  args: {
    variant: 'primary',
    size: 'medium',
  },
};

export const PrimaryMediumLoading = {
  render: Template,

  args: {
    variant: 'primary',
    size: 'medium',
    loading: true,
  },
};

export const PrimarySmall = {
  render: Template,

  args: {
    variant: 'primary',
    size: 'small',
  },
};

export const PrimarySmallLoading = {
  render: Template,

  args: {
    variant: 'primary',
    size: 'small',
    loading: true,
  },
};

export const SecondaryLarge = {
  render: Template,

  args: {
    variant: 'secondary',
    size: 'large',
  },
};

export const SecondaryLargeLoading = {
  render: Template,

  args: {
    variant: 'secondary',
    size: 'large',
    loading: true,
    children: 'Loading',
  },
};

export const SecondaryMedium = {
  render: Template,

  args: {
    variant: 'secondary',
    size: 'medium',
  },
};

export const SecondaryMediumLoading = {
  render: Template,

  args: {
    variant: 'secondary',
    size: 'medium',
    loading: true,
  },
};

export const SecondarySmall = {
  render: Template,

  args: {
    variant: 'secondary',
    size: 'small',
  },
};

export const SecondarySmallLoading = {
  render: Template,

  args: {
    variant: 'secondary',
    size: 'small',
    loading: true,
  },
};

export const GhostLarge = {
  render: Template,

  args: {
    variant: 'ghost',
    size: 'large',
  },
};

export const GhostLargeLoading = {
  render: Template,

  args: {
    variant: 'ghost',
    size: 'large',
    loading: true,
    children: 'Loading',
  },
};

export const GhostMedium = {
  render: Template,

  args: {
    variant: 'ghost',
    size: 'medium',
  },
};

export const GhostMediumLoading = {
  render: Template,

  args: {
    variant: 'ghost',
    size: 'medium',
    loading: true,
  },
};

export const GhostSmall = {
  render: Template,

  args: {
    variant: 'ghost',
    size: 'small',
  },
};

export const GhostSmallLoading = {
  render: Template,

  args: {
    variant: 'ghost',
    size: 'small',
    loading: true,
  },
};

const TemplateWithIcon = (args) => (
  <Button {...args}>
    <HappyIcon size={20} /> Action
  </Button>
);

export const PrimaryLargeIcon = {
  render: TemplateWithIcon,

  args: {
    variant: 'primary',
    size: 'large',
  },
};

export const PrimaryMediumIcon = {
  render: TemplateWithIcon,

  args: {
    variant: 'primary',
    size: 'medium',
  },
};

export const PrimarySmallIcon = {
  render: TemplateWithIcon,

  args: {
    variant: 'primary',
    size: 'small',
  },
};

export const SecondaryLargeIcon = {
  render: TemplateWithIcon,

  args: {
    variant: 'secondary',
    size: 'large',
  },
};

export const SecondaryMediumIcon = {
  render: TemplateWithIcon,

  args: {
    variant: 'secondary',
    size: 'medium',
  },
};

export const SecondarySmallIcon = {
  render: TemplateWithIcon,

  args: {
    variant: 'secondary',
    size: 'small',
  },
};

export const GhostLargeIcon = {
  render: TemplateWithIcon,

  args: {
    variant: 'ghost',
    size: 'large',
  },
};

export const GhostMediumIcon = {
  render: TemplateWithIcon,

  args: {
    variant: 'ghost',
    size: 'medium',
  },
};

export const GhostSmallIcon = {
  render: TemplateWithIcon,

  args: {
    variant: 'ghost',
    size: 'small',
  },
};
