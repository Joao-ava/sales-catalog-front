import React from 'react';
import Product from '../../../dtos/Product'
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

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
        <Link to={canAdd ? '/menu' : '/'}>
          <ChevronLeft />
        </Link>
        <h4>{canAdd ? 'Seus Produtos' : 'Produtos'}</h4>
        {canAdd ? (
            <Link to="/products/save" className="btn btn-success btn-sm">
              Adicionar
            </Link>
          ) : <div />
        }
      </div>

      {loading && (<p className="text-center">Carregando...</p>)}
      {products.length === 0 ? (
        <p className="text-center">Nenhum produto cadastrado.</p>
      ) : (
        <div className="row">
          {products.map((item) => (
            <Link to={canAdd ? `/products/${item._id}/edit` : '#'} className="col-6 col-md-4 col-lg-3 mb-4 text-decoration-none text-body" key={item._id}>
              <div className="text-center">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "8px" }}
                />
                <p className="mt-2 mb-0 fw-bold">{item.nome}</p>
                <p className="text-muted">R$ {item.preco.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Layout
