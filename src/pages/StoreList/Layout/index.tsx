import React from 'react';
import Store from '../../../dtos/Store'
import './styles.css';

export interface StoreListProps {
  search: string
  setSearch: (value: string) => void
  status: string
  setStatus: (value: string) => void
  stores: Store[]
}

const Layout: React.FC<StoreListProps> = ({ status, search, setStatus, setSearch, stores }) => {
  const filterOptions = ['Todos', 'Ativos', 'Fechados']
  return (
    <div className="lista-container">
      <header className="lista-header">
        <h2>Lista de Vendedores</h2>
        <input
          type="text"
          placeholder="Buscar vendedor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filtros">
          {filterOptions.map((item) => (
            <button
              key={item}
              className={status === item ? 'ativo' : ''}
              onClick={() => setStatus(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </header>

      <div className="grid-vendedores">
        {stores.map((item) => (
          <div key={item._id} className="card-vendedor">
            <img src={item.imagem} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.bloco}</p>
            <p>{item.referencia}</p>
            <p>{item.horario}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
