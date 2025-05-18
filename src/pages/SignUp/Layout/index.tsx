export interface SignUpProps {
  email: string;
  setEmail: (value: string) => void;
  nome: string;
  setNome: (value: string) => void;
  senha: string;
  setSenha: (value: string) => void;
  confirmarSenha: string;
  setConfirmarSenha: (value: string) => void;
  loading: boolean;
  onSubmit: (e?: React.FormEvent) => Promise<void>;
}

function SignUpLayout({
  email, setEmail,
  nome, setNome,
  senha, setSenha,
  confirmarSenha, setConfirmarSenha,
  loading, onSubmit
}: SignUpProps) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="card p-4 shadow">
        <h1 className="text-center mb-4">Cadastro de Vendedor</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-3 text-start">
            <label className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 text-start">
            <label className="form-label">Confirme a Senha</label>
            <input
              type="password"
              className="form-control"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading} className="btn btn-success w-100">
            Cadastrar
          </button>

          <div className="text-center mt-3">
            <a href="/login" className="btn btn-outline-secondary btn-sm w-100">
              Voltar
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpLayout;
