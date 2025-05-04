import React from 'react';
import Product from '../../../dtos/Product'

export interface ProductsListProps {
  loading: boolean
  products: Product[]
  canAdd: boolean
}

const Layout: React.FC<ProductsListProps> = ({
  loading,
  products,
  canAdd
}) => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>{canAdd ? 'Seus Produtos' : 'Produtos'}</h4>
        {canAdd && (
          <a href="/cadastro-produto" className="btn btn-success btn-sm">
            Adicionar
          </a>)
        }
      </div>

      {loading && (<p className="text-center">Carregando...</p>)}
      {products.length === 0 ? (
        <p className="text-center">Nenhum produto cadastrado.</p>
      ) : (
        <div className="row">
          {products.map((item) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={item._id}>
              <div className="text-center">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "8px" }}
                />
                <p className="mt-2 mb-0 fw-bold">{item.nome}</p>
                <p className="text-muted">R$ {item.preco.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Layout
