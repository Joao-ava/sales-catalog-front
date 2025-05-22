import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout'; // Caminho relativo correto
import { fn } from '@storybook/test';

const meta = {
  title: 'pages/Menu',
  component: Layout,
  args: {
    onLogout: fn(),
    storeId: ''
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta<typeof Layout>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
