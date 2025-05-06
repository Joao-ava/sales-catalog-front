import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = async () => {
    navigate('/home')
  }
  return (
    <Layout
      loading={false}
      onSignUp={async () => {}}
      onSubmit={handleSubmit}
    />
  )
}

export default Login
