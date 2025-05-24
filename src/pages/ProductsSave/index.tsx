import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from './Layout';
import api from '../../services/api';
import Product from '../../dtos/Product';

export default function ProductsSave() {
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState<File>();
  const [preco, setPreco] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>()

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
      if (!id) {
        await api.post('/products', form, config);
        alert('Produto cadastrado com sucesso!');
      } else {
        await api.put(`/products/${id}`, form, config);
        alert('Produto atualizado com sucesso!');
      }

      navigate('/menu');
    } catch (error) {
      console.error(error);
      alert('Erro ao salvar produto');
    } finally {
      setLoading(false);
    }
  }

  async function onDelete(e: React.FormEvent) {
    e.preventDefault();
    if (!id) return;
    setLoading(true);
    try {
      await api.delete(`/products/${id}`);
      navigate('/menu');
    } finally {
      setLoading(false);
    }
  }

  const fetchProduct = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    try {
      const { data } = await api.get<Product>(`/products/${id}`);
      setNome(data.nome);
      setPreco(data.preco);
      const response = await fetch(data.imagem)
      const blobData = await response.blob()
      const items = data.imagem.split('/')
      const fileName = items[items.length - 1]
      const file = new File([blobData], fileName, {
        type: blobData.type || 'image/jpeg',
      });
      setImagem(file);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <Layout
      isEdit={!!id}
      nome={nome}
      setNome={setNome}
      imagem={imagem ? URL.createObjectURL(imagem) : ''}
      setImagem={setImagem}
      preco={preco}
      setPreco={setPreco}
      loading={loading}
      onSubmit={onSubmit}
      onDelete={onDelete}
    />
  );
}
