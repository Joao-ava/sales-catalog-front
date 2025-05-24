import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';
import Layout, { StoreSaveProps } from './Layout'

const defaultArgs: StoreSaveProps = {
  name: 'Pipoca do bloco C',
  bloco: 'C',
  referencia: 'Em frente ao bloco C',
  setBloco: fn(),
  onImageChange: fn(),
  setName: fn(),
  setReferencia: fn(),
  onSave: fn(),
  lat: 0,
  lng: 0,
  setLat: fn(),
  setLng: fn(),
  imagem: 'https://blog.gsuplementos.com.br/wp-content/uploads/2021/05/pipoca.jpg',
  horarios: [
    { weekDay: 'Segunda', from: '11:00', to: '14:00' },
    { weekDay: 'Terça', from: '11:00', to: '14:00' },
    { weekDay: 'Quarta', from: '11:00', to: '14:00' },
    { weekDay: 'Quinta', from: '11:00', to: '14:00' },
    { weekDay: 'Sexta', from: '11:00', to: '14:00' },
  ],
  setHorarios: fn(),
  loading: false
}

const Component = (props: StoreSaveProps) => {
  const [horarios, setHorarios] = useState(props.horarios || '');
  return (
    <Layout
      {...props}
      horarios={horarios}
      setHorarios={setHorarios}
    />
  )
}

const meta: Meta<typeof Layout> = {
  title: 'pages/StoreSave',
  component: Component,
  tags: ['pages'],
  args: defaultArgs,
};

export default meta;

export const Default: StoryObj = {}

export const Loading: StoryObj = {
  args: {
    loading: true
  }
}
