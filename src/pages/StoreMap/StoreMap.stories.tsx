
import { BrowserRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import Layout, { StoreMapProps } from './Layout';

const defaultArgs: StoreMapProps = {
  stores: [
    {
      _id: '1',
      name: 'Pipoca do bloco C',
      bloco: 'C',
      referencia: 'Em frente ao bloco C',
      horario: '13:00 - 20:40',
      imagem: 'https://blog.gsuplementos.com.br/wp-content/uploads/2021/05/pipoca.jpg',
      status: 'Ativos',
      lng: -38.48087968627769,
      lat: -3.769530196779092,
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
      lng: -38.479704878755804,
      lat: -3.7692786145603017,
      horarios: []
    },
  ],
}

const Component = (props: StoreMapProps) => {
  return (
    <BrowserRouter>
      <Layout {...props} />
    </BrowserRouter>
  )
}
const meta: Meta<typeof Layout> = {
  title: 'pages/StoreMap',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['pages'],
  args: defaultArgs,
};

export default meta;

export const Default: StoryObj = {}
