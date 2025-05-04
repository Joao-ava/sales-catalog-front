
import { Meta, StoryObj } from '@storybook/react';
import VendedorEditar from './Layout'; // Caminho relativo correto

export default {
  title: 'pages/UsersEdit',
  component: VendedorEditar,
} as Meta<typeof VendedorEditar>;

export const Padrao: StoryObj = {
  render: () => <VendedorEditar />,
};
