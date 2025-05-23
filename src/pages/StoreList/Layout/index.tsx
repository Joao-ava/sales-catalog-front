import React from 'react';
import { Link } from "react-router-dom";
import Store from '../../../dtos/Store'
import './styles.css';
import { weekDays } from '../../../utils/weekdays';

export interface StoreListProps {
  loading: boolean
  search: string
  setSearch: (value: string) => void
  status: string
  setStatus: (value: string) => void
  stores: Store[]
}

const Layout: React.FC<StoreListProps> = ({ loading, status, search, setStatus, setSearch, stores }) => {
  const filterOptions = ['Todos', 'Ativos', 'Fechados']
  return (
    <div className="lista-container">
      <header className="lista-header">
        <div className="d-flex align-items-center justify-content-between">
          <div />
          <h2>Lista de Vendedores</h2>
          <div>
            <Link to="/stores/map" className="btn btn-success">
              Mapa
            </Link>
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
        </div>
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
        {loading ? <p>Carregando...</p> : ''}
        {stores.map((item) => {
          const today = new Date();
          const day = weekDays[today.getDay()];
          const hours = item.horarios
            .filter((item) => item.weekDay === day)
            .map((item) => `${item.from}:${item.to}`)
            .join('\n');
          return (
            <Link to={`/stores/${item._id}/products`} key={item._id} className="card-vendedor text-black">
              <img src={item.imagem} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.bloco}</p>
              <p>{item.referencia}</p>
              <p>{hours}</p>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default Layout;
