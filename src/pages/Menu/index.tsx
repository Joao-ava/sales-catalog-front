import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import useIsLoggedEffect from '../../hook/useIsLoggedEffect';
import api from '../../services/api';

const Menu: React.FC = () => {
  const navigate = useNavigate()
  const [storeId, setStoreId] = useState(JSON.parse(localStorage.getItem('user') || '{}')?.storeId)

  useIsLoggedEffect();

  const onLogout = () => {
    // limpar localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Redirecionar
    navigate('/login');
  };

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/auth/my', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      localStorage.setItem('user', JSON.stringify(data))
      setStoreId(data.storeId);
    })();
  }, []);

  return <Layout onLogout={onLogout} storeId={storeId} />;
};

export default Menu;
