import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const Menu: React.FC = () => {
  const navigate = useNavigate()
  const onLogout = () => {
    // limpar localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Redirecionar
    navigate('/login');
  }
  return <Layout onLogout={onLogout} />;
};

export default Menu;
