import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Trash, Plus, Image } from 'lucide-react'
import { Horario } from '../../../dtos/Store';

export interface StoreSaveProps {
  name: string
  bloco: string
  referencia: string
  imagem: string
  horario: string
  horarios: Horario[]
  setHorarios: (values: Horario[]) => void
  loading: boolean
}

const FormularioLoja: React.FC<StoreSaveProps> = ({ horarios, setHorarios, loading }) => {
  const weekDays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  const addDay = () => {
    setHorarios([...horarios, { weekDay: weekDays[0], from: '', to: '' }]);
  };

  const removeDay = (indice: number) => {
    setHorarios(horarios.filter((_, i) => i !== indice));
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
          <span className="input-group-text rounded-end-3"><Image /></span>
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
      {horarios.map((item, indice) => (
        <div className="row mb-2 align-items-center" key={indice}>
          <div className="col-3 text-start">
            <select className="form-control form-control-sm" name="cars" id="cars">
              {weekDays.map((item) => (
                <option key={item} value="item">{item}</option>
              ))}
            </select>
          </div>
          <div className="col-3">
            <input type="time" className="form-control form-control-sm" defaultValue={item.from} />
          </div>
          <div className="col-3">
            <input type="time" className="form-control form-control-sm" defaultValue={item.to} />
          </div>
          <div className="col-3 text-center">
            <button onClick={() => removeDay(indice)} className="btn btn-sm btn-outline-danger">
              <Trash size={14} />
            </button>
          </div>
        </div>
      ))}

      <div className="text-center mb-4">
        <button onClick={addDay} className="btn btn-outline-secondary rounded-circle" style={{ width: 48, height: 48 }}>
          <Plus />
        </button>
      </div>

      <button disabled={loading} className="btn btn-success w-100 rounded-3 mb-2">Salvar</button>
      <button className="btn text-success w-100">Cancelar</button>
    </div>
  );
};

export default FormularioLoja;
