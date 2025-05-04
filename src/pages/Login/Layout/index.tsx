import React, { useState } from 'react';
import './styles.css';

export interface LoginProps {
  loading: boolean;
  onSubmit: (email: string, senha: string) => Promise<void>;
  onSignUp: () => Promise<void>;
}

function LoginLayout({ loading, onSubmit, onSignUp }: LoginProps) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = () => {
    onSubmit(email, senha);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="email"
        placeholder="usuario@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="senha">Senha</label>
      <input
        id="senha"
        type="password"
        placeholder="********"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button className="botao-login" onClick={handleSubmit} disabled={loading}>
        {loading ? 'Entrando...' : 'Login'}
      </button>
      <p className="link-acao" onClick={onSignUp}>
        Cadastre-se
      </p>
    </div>
  );
}

export default LoginLayout;
