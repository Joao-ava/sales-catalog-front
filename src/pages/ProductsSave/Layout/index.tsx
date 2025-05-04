import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState(""); // base64 ou URL local
  const [preco, setPreco] = useState("");
  const navigate = useNavigate();

  function handleImagemChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const urlImagem = URL.createObjectURL(file);
      setImagem(urlImagem);
    }
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const novoProduto = {
      nome,
      imagem,
      preco: parseFloat(preco),
    };

    const produtos = JSON.parse(localStorage.getItem("produtos") || "[]");
    produtos.push(novoProduto);
    localStorage.setItem("produtos", JSON.stringify(produtos));

    alert("Produto cadastrado com sucesso!");
    navigate("/produtos");
  }

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-white">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h4 className="text-center mb-4">Cadastro de produto</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nome do produto"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Imagem</label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={handleImagemChange}
              required
            />
          </div>

          <div className="mb-4 text-start">
            <label className="form-label">Preço</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ex: 6.00"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              step="0.01"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Salvar
          </button>

          <button
            type="button"
            className="btn btn-link text-success mt-3 w-100"
            onClick={() => navigate("/produtos")}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}
