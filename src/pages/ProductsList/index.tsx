import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';
import Product from '../../dtos/Product';
import api from '../../services/api';

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const { storeId } = JSON.parse(localStorage.getItem('user') || '{}');
  const canAdd = id === storeId;

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const { data } = await api.get(`/stores/${id}/products`);
        setProducts(data); // ajuste conforme o retorno do backend
      } catch (err) {
        console.log(err);
        alert('Erro ao buscar produtos');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [id]);

  return (
    <Layout
      products={products}
      loading={loading}
      canAdd={canAdd}
    />
  );
};

export default ProductsList;
