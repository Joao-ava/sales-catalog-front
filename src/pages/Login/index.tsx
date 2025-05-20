import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import Layout from './Layout'; // Seu LoginLayout
import api from '../../services/api';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (email: string, senha: string) => {
    setLoading(true);
    try {
      const response = await api.post('/auth/login', {
        email,
        password: senha,
      });

      const { token, user } = response.data;

      // Salvar no localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Redirecionar
      navigate('/menu');
    } catch (err) {
      const error = err as AxiosError<{ message: string }>
      alert(error.response?.data?.message || 'Email ou senha inválidos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      loading={loading}
      onSubmit={handleSubmit}
    />
  );
};

export default Login;
