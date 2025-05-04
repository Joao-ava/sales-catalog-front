import React from 'react';
import './styles.css';

export interface UsersEditProps {
  name: string
  setName: (value: string) => void
  email: string
  setEmail: (value: string) => void
  password: string
  setPassword: (value: string) => void
  loading: boolean
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onCancel: () => void
}

const Layout: React.FC<UsersEditProps> = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  loading,
  onSubmit,
  onCancel
}) => {
  return (
    <div className="form-container">
      <h2>Atualizar Conta</h2>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          name="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <div className="form-buttons">
          <button type="submit" className="btn btn-success w-100" disabled={loading}>Atualizar</button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm w-100"
            onClick={onCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Layout;
