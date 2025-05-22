import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Store, Settings, LogOut } from 'lucide-react';
import './styles.css';

interface MenuProps {
  storeId: string
  onLogout: () => void
}
const Layout: React.FC<MenuProps> = ({ onLogout, storeId }) => {
  return (
    <div className="container">
      <h2><strong>Bem-vindo</strong></h2>
      <div className="row menu-grid">
        <Link to={`/stores/${storeId}/products`} className="col-sm-2 m-2 menu-item">
          <Package size={32} />
          <span>Seus Produtos</span>
        </Link>
        <Link to="/store" className="col-sm-2 m-2 menu-item">
          <Store size={32} />
          <span>Cadastro da Loja</span>
        </Link>
        <Link to="/settings" className="col-sm-2 m-2 menu-item">
          <Settings size={32} />
          <span>Configurações da Conta</span>
        </Link>
        <button onClick={onLogout} className="col-sm-2 m-2 menu-item">
          <LogOut size={32} />
          <span>Sair</span>
        </button>
      </div>
    </div>
  );
};

export default Layout;
