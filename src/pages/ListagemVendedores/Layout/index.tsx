import React, { useState } from 'react';
import './styles.css';

const vendedores = [
  {
    id: 1,
    nome: 'Pipoca do bloco C',
    local: 'Em frente ao bloco C',
    horario: '13:00 - 20:40',
    imagem: 'https://blog.gsuplementos.com.br/wp-content/uploads/2021/05/pipoca.jpg',
    status: 'Ativos',
  },
  {
    id: 2,
    nome: 'Kalzone',
    local: 'Centro de convivência',
    horario: '13:00 - 20:40',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2v9ZfeGVTB6ftaiQk3_LHVWFQ8w6fPZX3TQ&s',
    status: 'Fechados',
  },
  // Você pode adicionar mais vendedores aqui
];

const ListaVendedores: React.FC = () => {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState('Todos');

  const filtrados = vendedores.filter(v =>
    v.nome.toLowerCase().includes(busca.toLowerCase()) &&
    (filtro === 'Todos' || v.status === filtro)
  );

  return (
    <div className="lista-container">
      <header className="lista-header">
        <h2>Lista de Vendedores</h2>
        <input
          type="text"
          placeholder="Buscar vendedor..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <div className="filtros">
          {['Todos', 'Ativos', 'Fechados'].map((f) => (
            <button
              key={f}
              className={filtro === f ? 'ativo' : ''}
              onClick={() => setFiltro(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <div className="grid-vendedores">
        {filtrados.map((v) => (
          <div key={v.id} className="card-vendedor">
            <img src={v.imagem} alt={v.nome} />
            <h3>{v.nome}</h3>
            <p>{v.local}</p>
            <p>{v.horario}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaVendedores;
