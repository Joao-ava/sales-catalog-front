import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Trash, Plus, Image } from 'lucide-react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Horario } from '../../../dtos/Store';
import { weekDays } from '../../../utils/weekdays';
import MapLocationInput from '../../../components/MapLocationInput';
import { LatLng } from 'leaflet';
import { Link } from 'react-router-dom';

export interface StoreSaveProps {
  name: string;
  bloco: string;
  referencia: string;
  imagem: string;
  horarios: Horario[];
  setHorarios: (values: Horario[]) => void;
  lat: number;
  lng: number;
  setLat: (value: number) => void
  setLng: (value: number) => void
  loading: boolean;
  setName: (value: string) => void;
  setBloco: (value: string) => void;
  setReferencia: (value: string) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
}

const FormularioLoja: React.FC<StoreSaveProps> = ({
  name,
  bloco,
  referencia,
  imagem,
  horarios,
  setHorarios,
  loading,
  lat,
  lng,
  setLat,
  setLng,
  setName,
  setBloco,
  setReferencia,
  onImageChange,
  onSave,
}) => {
  const addDay = () => {
    setHorarios([...horarios, { weekDay: weekDays[0], from: '', to: '' }]);
  };

  const removeDay = (indice: number) => {
    setHorarios(horarios.filter((_, i) => i !== indice));
  };

  const onChangePosition = (position: LatLng) => {
    setLat(position.lat);
    setLng(position.lng);
  };

  return (
    <div className="container mt-4 px-3" style={{ maxWidth: 400 }}>
      <h4 className="fw-bold mb-3 text-start">Cadastro de loja</h4>

      <div className="mb-2 text-start">
        <label className="form-label text-start">Nome</label>
        <input type="text" className="form-control rounded-3" placeholder="Nome do estabelecimento" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="mb-2 text-start">
        <label className="form-label text-start">Imagem</label>
        <div className="input-group">
          <input type="file" className="form-control rounded-start-3" onChange={onImageChange} />
          <span className="input-group-text rounded-end-3"><Image /></span>
        </div>
        {imagem && <img src={imagem} alt="Preview" className="mt-2 w-100 rounded" />}
      </div>

      <div className="mb-2 text-start">
        <label className="form-label text-start">Bloco</label>
        <input type="text" className="form-control rounded-3" placeholder="Perto de qual bloco está" value={bloco} onChange={(e) => setBloco(e.target.value)} />
      </div>

      <div className="mb-2 text-start">
        <label className="form-label text-start">Ponto de referência</label>
        <input type="text" className="form-control rounded-3" placeholder="Cite um ponto de referência" value={referencia} onChange={(e) => setReferencia(e.target.value)} />
      </div>

      <MapContainer center={[-3.769516294283572, -38.480243680943545]} zoom={20} style={{ height: "300px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapLocationInput position={[lat, lng]} onChange={onChangePosition} />
      </MapContainer>

      <h6 className="fw-bold mt-4 mb-2 text-start">Horário de funcionamento</h6>
      {horarios.map((item, indice) => (
        <div className="row mb-2 align-items-center" key={indice}>
          <div className="col-3 text-start">
            <select className="form-control form-control-sm" value={item.weekDay} onChange={(e) => {
              const novos = [...horarios];
              novos[indice].weekDay = e.target.value;
              setHorarios(novos);
            }}>
              {weekDays.map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>
          <div className="col-3">
            <input type="time" className="form-control form-control-sm" value={item.from} onChange={(e) => {
              const novos = [...horarios];
              novos[indice].from = e.target.value;
              setHorarios(novos);
            }} />
          </div>
          <div className="col-3">
            <input type="time" className="form-control form-control-sm" value={item.to} onChange={(e) => {
              const novos = [...horarios];
              novos[indice].to = e.target.value;
              setHorarios(novos);
            }} />
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

      <button disabled={loading} onClick={onSave} className="btn btn-success w-100 rounded-3 mb-2">Salvar</button>
      <Link to="/menu" className="btn text-success w-100">Cancelar</Link>
    </div>
  );
};

export default FormularioLoja;
