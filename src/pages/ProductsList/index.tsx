import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Product from '../../dtos/Product';
import axios from 'axios';

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/produtos');
        setProducts(response.data); // ajuste conforme o retorno do backend
      } catch (error) {
        alert('Erro ao buscar produtos');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <Layout
      products={products}
      loading={loading}
      canAdd={false}
    />
  );
};

export default ProductsList;
