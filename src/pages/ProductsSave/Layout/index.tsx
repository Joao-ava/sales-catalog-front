import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

export interface ProductsSaveProps {
  isEdit: boolean
  loading: boolean
  nome: string
  setNome: (value: string) => void
  imagem?: string
  setImagem: (value: File | undefined) => void
  preco: number
  setPreco: (value: number) => void
  onSubmit: (e: React.FormEvent) => void
}

export default function Layout({
  isEdit,
  nome,
  setNome,
  imagem,
  setImagem,
  preco,
  setPreco,
  loading,
  onSubmit
}: ProductsSaveProps) {
  function handleImagemChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setImagem(file);
  }

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-white">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h4 className="text-center mb-4">{isEdit ? 'Cadastro de produto' : 'Atualizar produto'}</h4>
        <form onSubmit={onSubmit}>
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
              required={!imagem}
            />
          </div>
          <img src={imagem} className="img-thumbnail" />

          <div className="mb-4 text-start">
            <label className="form-label">Preço</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ex: 6.00"
              value={preco}
              onChange={(e) => setPreco((e.target.value) as unknown as number)}
              step="0.01"
              required
            />
          </div>

          <button type="submit" disabled={loading} className="btn btn-success w-100">
            Salvar
          </button>

          <Link
            className="btn text-success mt-3 w-100"
            to="/produtos"
          >
            Cancelar
          </Link>
        </form>
      </div>
    </div>
  );
}
