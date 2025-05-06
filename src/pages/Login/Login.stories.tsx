import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BrowserRouter } from "react-router-dom";

import Layout, { LoginProps } from './Layout';

const defaultArgs = {
  loading: false,
  onSubmit: fn()
}
const Component = (props: LoginProps) => {
  return (
    <BrowserRouter>
      <Layout {...props} />
    </BrowserRouter>
  )
}
const meta = {
  title: 'Pages/Login',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['pages'],
  argTypes: {
    loading: { control: 'boolean' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
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
