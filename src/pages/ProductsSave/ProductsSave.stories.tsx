import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BrowserRouter } from 'react-router-dom';

import Layout, { ProductsSaveProps } from './Layout';

const defaultArgs: ProductsSaveProps = {
  isEdit: false,
  nome: '',
  imagem: '',
  preco: 0,
  setNome: fn(),
  setImagem: fn(),
  setPreco: fn(),
  loading: false,
  onSubmit: fn()
}

const Component = (props: ProductsSaveProps) => {
  const [nome, setNome] = useState(props.nome)
  const [imagem, setImagem] = useState<File>()
  const [preco, setPreco] = useState(props.preco)
  return (
    <BrowserRouter>
      <Layout
        {...props}
        nome={nome}
        setNome={setNome}
        imagem={imagem ? URL.createObjectURL(imagem) : ''}
        setImagem={setImagem}
        preco={preco}
        setPreco={setPreco}
      />
    </BrowserRouter>
  )
}

const meta = {
  title: 'Pages/ProductsSave',
  component: Component,
  tags: ['pages'],
  argTypes: {
    loading: { control: 'boolean' },
  },
  args: defaultArgs,
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    loading: true
  },
};
