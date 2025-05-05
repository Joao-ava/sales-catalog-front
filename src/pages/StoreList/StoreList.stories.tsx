
import { Meta, StoryObj } from '@storybook/react';
import Layout, { StoreListProps } from './Layout';
import { fn } from '@storybook/test';
import { useState } from 'react';

const defaultArgs: StoreListProps = {
  stores: [
    {
      _id: '1',
      name: 'Pipoca do bloco C',
      bloco: 'C',
      referencia: 'Em frente ao bloco C',
      horario: '13:00 - 20:40',
      imagem: 'https://blog.gsuplementos.com.br/wp-content/uploads/2021/05/pipoca.jpg',
      status: 'Ativos',
      horarios: []
    },
    {
      _id: '2',
      name: 'Kalzone',
      bloco: 'CC',
      referencia: 'Centro de convivência',
      horario: '13:00 - 20:40',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2v9ZfeGVTB6ftaiQk3_LHVWFQ8w6fPZX3TQ&s',
      status: 'Fechados',
      horarios: []
    },
  ],
  status: '',
  search: '',
  setStatus: fn(),
  setSearch: fn()
}

const Component = (props: StoreListProps) => {
  const [search, setSearch] = useState(props.search || '');
  const [status, setStatus] = useState(props.status || 'Todos');

  const data = props.stores.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (status === 'Todos' || item.status === status)
  );
  return (
    <Layout
      {...props}
      stores={data}
      search={search}
      setSearch={setSearch}
      status={status}
      setStatus={setStatus}
    />
  )
}

const meta: Meta<typeof Layout> = {
  title: 'pages/StoreList',
  component: Component,
  tags: ['pages'],
  args: defaultArgs,
};

export default meta;

export const Default: StoryObj = {}
