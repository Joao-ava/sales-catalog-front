import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Store from '../../dtos/Store';

const StoreMap: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await fetch('http://localhost:3000/stores');
        if (!res.ok) throw new Error('Erro ao buscar lojas');
        const data = await res.json();
        setStores(data);
      } catch (error) {
        console.error(error);
        alert('Erro ao buscar lojas');
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  if (loading) return <p>Carregando lojas...</p>;

  return <Layout stores={stores} />;
};

export default StoreMap;
