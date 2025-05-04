export interface SignUpProps {
  loading: boolean
  onSubmit: () => Promise<void>
  onLogin: () => Promise<void>
}
function SignUpLayout({ loading, onSubmit, onLogin }: SignUpProps) {
  return (
    <div>
      <button onClick={onSubmit} disabled={loading}>Cadastrar</button>
      <button onClick={onLogin}>Login</button>
    </div>
  )
}

export default SignUpLayout
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

export function CadastroVendedor() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log("Dados cadastrados:", { nome, email, password });

    const vendedores = JSON.parse(localStorage.getItem("vendedores") || "[]");
    vendedores.push({ nome, email, password });
    localStorage.setItem("vendedores", JSON.stringify(vendedores));

    alert("Cadastro realizado com sucesso!");
    
    setNome("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h1 className="text-center mb-4">Cadastro de Vendedor</h1>
        <form onSubmit={handleSubmit}>
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
      required
    />
  </div>
  <div className="mb-4 text-start">
    <label className="form-label">Confirme a Senha</label>
    <input
      type="password"
      className="form-control"
      required
    />
  </div>
  <button type="submit" className="btn btn-success w-100">
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
