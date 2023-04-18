import { Meta } from '@storybook/react';
import React from 'react';
import PageDescription from '.';

export default {
  title: 'Atoms/PageDescription',
  component: PageDescription,
} as Meta<typeof PageDescription>;

export const TitleAndSubtitle = {
  args: {
    title: 'Region',
    subtitle: 'Manage your regions',
  },
};

export const TitleOnly = {
  args: {
    title: 'Region',
  },
};

export const SubtitleOnly = {
  args: {
    subtitle: 'Manage your regions',
  },
};
