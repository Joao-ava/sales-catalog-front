import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

export default function ProductsSave() {
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [preco, setPreco] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, imagem, preco })
      });

      if (!response.ok) {
        throw new Error('Erro ao salvar o produto');
      }

      alert('Produto cadastrado com sucesso!');
      navigate('/produtos');
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
      imagem={imagem}
      setImagem={setImagem}
      preco={preco}
      setPreco={setPreco}
      loading={loading}
      onSubmit={onSubmit}
    />
  );
}
