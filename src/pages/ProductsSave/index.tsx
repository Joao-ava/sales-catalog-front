import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import api from '../../services/api';

export default function ProductsSave() {
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState<File>();
  const [preco, setPreco] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();
      form.append('nome', nome);
      form.append('preco', String(preco));
      if (imagem) form.append('imagem', imagem);

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
      await api.post('/products', form, config);

      alert('Produto cadastrado com sucesso!');
      navigate('/menu');
    } catch (error) {
      console.error(error);
      alert('Erro ao salvar produto');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout
      nome={nome}
      setNome={setNome}
      imagem={imagem ? URL.createObjectURL(imagem) : ''}
      setImagem={setImagem}
      preco={preco}
      setPreco={setPreco}
      loading={loading}
      onSubmit={onSubmit}
    />
  );
}
