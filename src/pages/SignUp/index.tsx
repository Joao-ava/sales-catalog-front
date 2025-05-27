import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import api from '../../services/api';
import SignUpLayout from './Layout';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }
    setLoading(true);
    try {
      await api.post('/users', {
        email,
        password: senha,
        name: nome,
      });
      alert('Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (err) {
      const error = err as AxiosError<{ message: string }>
      alert(error.response?.data?.message || 'Erro ao cadastrar. Verifique os dados e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const isLogged = localStorage.getItem('token');
  if (isLogged) return <Navigate to="/menu" />

  return (
    <SignUpLayout
      email={email}
      setEmail={setEmail}
      nome={nome}
      setNome={setNome}
      senha={senha}
      setSenha={setSenha}
      confirmarSenha={confirmarSenha}
      setConfirmarSenha={setConfirmarSenha}
      loading={loading}
      onSubmit={handleSubmit}
    />
  );
};

export default SignUp;

