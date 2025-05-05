import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrash, FaPlus, FaImage } from 'react-icons/fa';

const FormularioLoja: React.FC = () => {
  const [horariosFuncionamento, setHorariosFuncionamento] = useState([
    { dia: 'Segunda', de: '11:00', ate: '14:00' },
    { dia: 'Terça', de: '11:00', ate: '14:00' },
    { dia: 'Quarta', de: '11:00', ate: '14:00' },
    { dia: 'Quinta', de: '11:00', ate: '14:00' },
    { dia: 'Sexta', de: '11:00', ate: '14:00' },
  ]);

  const adicionarDia = () => {
    setHorariosFuncionamento([...horariosFuncionamento, { dia: '', de: '', ate: '' }]);
  };

  const removerDia = (indice: number) => {
    setHorariosFuncionamento(horariosFuncionamento.filter((_, i) => i !== indice));
  };

  return (
    <div className="container mt-4 px-3" style={{ maxWidth: 400 }}>
      <h4 className="fw-bold mb-3 text-start">Cadastro de loja</h4>

      <div className="mb-2 text-start">
        <label className="form-label text-start">Nome</label>
        <input type="text" className="form-control rounded-3" placeholder="Nome do estabelecimento" />
      </div>

      <div className="mb-2 text-start">
        <label className="form-label text-start">Imagem</label>
        <div className="input-group">
          <input type="file" className="form-control rounded-start-3" />
          <span className="input-group-text rounded-end-3"><FaImage /></span>
        </div>
      </div>

      <div className="mb-2 text-start">
        <label className="form-label text-start">Bloco</label>
        <input type="text" className="form-control rounded-3" placeholder="Perto de qual bloco está" />
      </div>

      <div className="mb-2 text-start">
        <label className="form-label text-start">Ponto de referência</label>
        <input type="text" className="form-control rounded-3" placeholder="Cite um ponto de referência" />
      </div>

      <div className="mb-3 text-start">
        <label className="form-label text-start">Métodos de pagamento</label>
        <input type="text" className="form-control rounded-3" placeholder="Selecione seus métodos de pagamento" />
      </div>

      <h6 className="fw-bold mt-4 mb-2 text-start">Horário de funcionamento</h6>
      {horariosFuncionamento.map((item, indice) => (
        <div className="row mb-2 align-items-center" key={indice}>
          <div className="col-3 text-start">
            <small className="fw-semibold">{item.dia || `Dia ${indice + 1}`}</small>
          </div>
          <div className="col-3">
            <input type="time" className="form-control form-control-sm" defaultValue={item.de} />
          </div>
          <div className="col-3">
            <input type="time" className="form-control form-control-sm" defaultValue={item.ate} />
          </div>
          <div className="col-3 text-center">
            <button onClick={() => removerDia(indice)} className="btn btn-sm btn-outline-danger">
              <FaTrash size={14} />
            </button>
          </div>
        </div>
      ))}

      <div className="text-center mb-4">
        <button onClick={adicionarDia} className="btn btn-outline-secondary rounded-circle" style={{ width: 48, height: 48 }}>
          <FaPlus />
        </button>
      </div>

      <button className="btn btn-success w-100 rounded-3 mb-2">Salvar</button>
      <button className="btn btn-link text-danger w-100">Cancelar</button>
    </div>
  );
};

export default FormularioLoja;
