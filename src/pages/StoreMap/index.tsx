import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Store from '../../dtos/Store';
import api from '../../services/api';

const StoreMap: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const { data } = await api.get('/stores');
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
