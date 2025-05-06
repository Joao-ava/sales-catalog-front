import React, { useState } from 'react';
import Layout from './Layout';
import Store from '../../dtos/Store';

const StoreList: React.FC = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('Todos');
  const [stores] = useState<Store[]>([
    {
      _id: '1',
      name: 'Loja Exemplo',
      bloco: 'Bloco A',
      referencia: 'Ao lado do estacionamento',
      imagem: 'https://blog.gsuplementos.com.br/wp-content/uploads/2021/05/pipoca.jpg',
      horario: '09:00 - 18:00',
      horarios: [],
      status: 'Ativos'
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
    }
  ]);

  const data = stores.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (status === 'Todos' || item.status === status)
  );

  return (
    <Layout
      search={search}
      setSearch={setSearch}
      status={status}
      setStatus={setStatus}
      stores={data}
    />
  );
};

export default StoreList;
