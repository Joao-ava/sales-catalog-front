import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Store, { Horario } from '../../dtos/Store';
import api from '../../services/api';
import useIsLoggedEffect from '../../hook/useIsLoggedEffect';

const StoreSave: React.FC = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [bloco, setBloco] = useState('');
  const [referencia, setReferencia] = useState('');
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [imagem, setImagem] = useState<File | null>(null);
  const [horarios, setHorarios] = useState<Horario[]>([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('token') || ''

  useIsLoggedEffect();

  const fetchStore = useCallback(async () => {
    setLoading(true);
    try {
      const { data: store } = await api.get<Store>('/stores/my', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setId(store._id)
      setName(store.name)
      setBloco(store.bloco)
      setReferencia(store.referencia)
      setLat(store.lat || 0)
      setLng(store.lng || 0)
      const response = await fetch(store.imagem)
      const blobData = await response.blob()
      const items = store.imagem.split('/')
      const fileName = items[items.length - 1]
      const file = new File([blobData], fileName, {
        type: blobData.type || 'image/jpeg',
      });
      setImagem(file)
      setHorarios(store.horarios)
    } finally {
      setLoading(false)
    }
  }, [token])

  useEffect(() => {
    fetchStore()
  }, [fetchStore])

  const handleSave = async () => {
    setLoading(true);
    try {
      const form = new FormData();
      form.append('name', name);
      form.append('bloco', bloco);
      form.append('referencia', referencia);
      if (imagem) form.append('imagem', imagem);
      form.append('horarios', JSON.stringify(horarios));
      form.append('lat', lat.toString());
      form.append('lng', lng.toString());

      const headers = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
      if (id) {
        await api.put(`/stores/${id}`, form, headers)
      } else {
        await api.post('/stores', form, headers);
      }

      navigate('/menu');
    } catch (err) {
      console.error(err);
      alert('Erro ao salvar a loja');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      name={name}
      bloco={bloco}
      referencia={referencia}
      imagem={imagem ? URL.createObjectURL(imagem) : ''}
      horarios={horarios}
      setHorarios={setHorarios}
      loading={loading}
      lat={lat}
      setLat={setLat}
      lng={lng}
      setLng={setLng}
      setName={setName}
      setBloco={setBloco}
      setReferencia={setReferencia}
      onImageChange={(e) => setImagem(e.target.files?.[0] ?? null)}
      onSave={handleSave}
    />
  );
};

export default StoreSave;
