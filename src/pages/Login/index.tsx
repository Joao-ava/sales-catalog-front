import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout'; // Seu LoginLayout

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (email: string, senha: string) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password: senha,
      });

      const { token, user } = response.data;

      // Salvar no localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Redirecionar
      navigate('/home');
    } catch (error: any) {
      alert(error.response?.data?.message || 'Email ou senha inválidos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      loading={loading}
      onSignUp={async () => {}}
      onSubmit={handleSubmit}
    />
  );
};

export default Login;
