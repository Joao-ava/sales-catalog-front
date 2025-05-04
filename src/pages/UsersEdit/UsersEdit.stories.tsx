import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Layout, { UsersEditProps } from './Layout'; // Caminho relativo correto

const defaultArgs: UsersEditProps = {
  email: '',
  name: '',
  password: '',
  loading: false,
  setEmail: fn(),
  setName: fn(),
  setPassword: fn(),
  onSubmit: fn(),
  onCancel: fn(),
}
const Component = (props: UsersEditProps) => {
  const [email, setEmail] = useState(props.email || '');
  const [name, setName] = useState(props.name || '');
  const [password, setPassword] = useState(props.password || '');
  return (
    <Layout
      {...props}
      email={email}
      setEmail={setEmail}
      name={name}
      setName={setName}
      password={password}
      setPassword={setPassword}
    />
  )
}
const meta: Meta<typeof Layout> = {
  title: 'pages/UsersEdit',
  component: Component,
  tags: ['pages'],
  args: defaultArgs,
};

export default meta;

export const Default: StoryObj = {};

export const Loading: StoryObj = {
  args: {
    loading: true
  }
};
