import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
      await axios.post('http://localhost:3000/auth/register', {
        email,
        password: senha,
        name: nome,
      });
      alert('Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erro ao cadastrar. Verifique os dados e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

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

