import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Store, Settings, LogOut } from 'lucide-react';
import './styles.css';

const MenuVendedor: React.FC = () => {
  return (
    <div className="menu-container">
      <h2><strong>Bem-vindo</strong></h2>
      <div className="menu-grid">
        <Link to="/produtos" className="menu-item">
          <Package size={32} />
          <span>Seus Produtos</span>
        </Link>
        <Link to="/cadastro-loja" className="menu-item">
          <Store size={32} />
          <span>Cadastro da Loja</span>
        </Link>
        <Link to="/configuracoes" className="menu-item">
          <Settings size={32} />
          <span>Configurações da Conta</span>
        </Link>
        <Link to="/logout" className="menu-item">
          <LogOut size={32} />
          <span>Sair</span>
        </Link>
      </div>
    </div>
  );
};

export default MenuVendedor;
