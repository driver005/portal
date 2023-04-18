import { Meta } from '@storybook/react';
import React from 'react';
import OSShortcut from '.';

export default {
  title: 'Atoms/OSShortcut',
  component: OSShortcut,
} as Meta<typeof OSShortcut>;

export const CmdK = {
  args: {
    winModifiers: 'Control',
    macModifiers: '⌘',
    keys: 'K',
  },
};

export const CmdKL = {
  args: {
    winModifiers: 'Control',
    macModifiers: '⌘',
    keys: ['K', 'L'],
  },
};
