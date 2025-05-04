import React, { useState } from 'react';
import './styles.css';

const VendedorEditar: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados atualizados:', formData);
    alert('Dados atualizados com sucesso!');
    // colocar api 
  };

  const handleCancel = () => {
    setFormData({ nome: '', email: '', senha: '' });
    alert('Atualização cancelada.');
  };

  return (
    <div className="form-container">
      <h2>Atualizar Conta</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          placeholder="Senha"
        />
        <div className="form-buttons">
          <button type="submit">Atualizar</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default VendedorEditar;
