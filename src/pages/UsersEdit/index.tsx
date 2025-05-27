import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import api from '../../services/api';
import Layout from './Layout'
import useIsLoggedEffect from '../../hook/useIsLoggedEffect';

const UsersEdit = () => {
  const currentUser = JSON.parse(localStorage.getItem('user') || '{}')
  const [email, setEmail] = useState(currentUser.email || '');
  const [name, setName] = useState(currentUser.name || '');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  useIsLoggedEffect();

  const onCancel = () => {
    // voltar para página anterior
    navigate(-1);
  }

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { id } = JSON.parse(localStorage.getItem('user') || '{}')
      const { data: user } = await api.put(`/users/${id}`, {
        name,
        email,
        password
      });
      localStorage.setItem('user', JSON.stringify(user));
      alert('Atualizado com sucesso');
      navigate('/menu');
    } catch (err) {
      const error = err as AxiosError<{ error: string }>
      const message = error.response?.data.error
      alert(message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout
      email={email}
      setEmail={setEmail}
      name={name}
      setName={setName}
      password={password}
      setPassword={setPassword}
      loading={loading}
      onCancel={onCancel}
      onSubmit={onSubmit}
    />
  );
}

export default UsersEdit;
