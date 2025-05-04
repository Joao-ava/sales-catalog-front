
import { Meta, StoryObj } from '@storybook/react';
import Layout, { ProductsListProps } from './Layout';

const defaultArgs: ProductsListProps = {
  products: [
    {
      _id: '1',
      nome: 'Pipoca do bloco C',
      imagem: 'https://blog.gsuplementos.com.br/wp-content/uploads/2021/05/pipoca.jpg',
      preco: 20,
      createdAt: '2025-04-18T22:19:34.949Z'
    },
    {
      _id: '2',
      nome: 'Kalzone',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2v9ZfeGVTB6ftaiQk3_LHVWFQ8w6fPZX3TQ&s',
      preco: 20,
      createdAt: '2025-04-18T22:19:34.949Z'
    },
  ],
  canAdd: false,
  loading: false
}

const meta: Meta<typeof Layout> = {
  title: 'pages/ProductsList',
  component: Layout,
  tags: ['pages'],
  args: defaultArgs,
};

export default meta;

export const Default: StoryObj = {}

export const CanAdd: StoryObj = {
  args: {
    canAdd: true
  }
}

export const Loading: StoryObj = {
  args: {
    loading: true
  }
}

export const NoData: StoryObj = {
  args: {
    products: []
  }
}
