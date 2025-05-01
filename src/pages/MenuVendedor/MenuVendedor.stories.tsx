// src/pages/MenuVendedor/MenuVendedor.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import MenuVendedor from './Layout'; // Caminho relativo correto

export default {
  title: 'pages/MenuVendedor',
  component: MenuVendedor,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta<typeof MenuVendedor>;

export const Padrao: StoryObj = {
  render: () => <MenuVendedor />,
};
