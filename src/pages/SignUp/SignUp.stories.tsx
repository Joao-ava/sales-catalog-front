import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BrowserRouter } from 'react-router-dom';

import Layout, { SignUpProps } from './Layout';

const defaultArgs: SignUpProps = {
  confirmarSenha: '',
  senha: '',
  setConfirmarSenha: fn(),
  setSenha: fn(),
  email: '',
  nome: '',
  setEmail: fn(),
  setNome: fn(),
  loading: false,
  onSubmit: fn()
}

const Component = (props: SignUpProps) => {
  const [nome, setNome] = useState(props.nome)
  const [email, setEmail] = useState(props.email)
  return (
    <BrowserRouter>
      <Layout
        {...props}
        nome={nome}
        setNome={setNome}
        email={email}
        setEmail={setEmail}
      />
    </BrowserRouter>
  )
}

const meta = {
  title: 'Pages/SignUp',
  component: Component,
  parameters: {
    layout: 'centered',
  },
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
