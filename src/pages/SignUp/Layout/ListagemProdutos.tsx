import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

type Produto = {
  nome: string;
  preco: number;
  imagem: string; // URL da imagem
};

export function ListagemProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("produtos") || "[]");
    setProdutos(dados);
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Seus Produtos</h4>
        <a href="/cadastro-produto" className="btn btn-success btn-sm">
          Adicionar
        </a>
      </div>

      {produtos.length === 0 ? (
        <p className="text-center">Nenhum produto cadastrado.</p>
      ) : (
        <div className="row">
          {produtos.map((produto, index) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
              <div className="text-center">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "8px" }}
                />
                <p className="mt-2 mb-0 fw-bold">{produto.nome}</p>
                <p className="text-muted">R$ {produto.preco.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
