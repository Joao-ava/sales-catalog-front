import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Aqui você pode adicionar a lógica de cadastro
      navigate('/menu');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      email={email}
      setEmail={setEmail}
      nome={nome}
      setNome={setNome}
      loading={loading}
      onSubmit={handleSubmit}
    />
  );
};

export default SignUp;
