
import { Meta, StoryObj } from '@storybook/react';
import ListaVendedores from './Layout';

const meta: Meta<typeof ListaVendedores> = {
  title: 'pages/ListaVendedores',
  component: ListaVendedores,
};

export default meta;

export const Padrao: StoryObj = {
  render: () => <ListaVendedores />,
};
