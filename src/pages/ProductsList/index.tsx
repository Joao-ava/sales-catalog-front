import React, { useState } from 'react';
import Layout from './Layout';
import Product from '../../dtos/Product';

const ProductsList: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      _id: '1',
      nome: 'Pipoca tamanho M',
      imagem: 'https://blog.gsuplementos.com.br/wp-content/uploads/2021/05/pipoca.jpg',
      preco: 20,
      createdAt: '2025-04-18T22:19:34.949Z'
    },
    {
      _id: '2',
      nome: 'Kalzone',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2v9ZfeGVTB6ftaiQk3_LHVWFQ8w6fPZX3TQ&s',
      preco: 20,
      createdAt: '2025-04-18T22:19:34.949Z'
    },
  ]);

  return (
    <Layout
      products={products}
      loading={false}
      canAdd={false}
    />
  );
};

export default ProductsList;
