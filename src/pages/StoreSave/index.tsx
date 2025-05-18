import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { Horario } from '../../dtos/Store';

const StoreSave: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [bloco, setBloco] = useState('');
  const [referencia, setReferencia] = useState('');
  const [imagem, setImagem] = useState<File | null>(null);
  const [horarios, setHorarios] = useState<Horario[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      const form = new FormData();
      form.append('name', name);
      form.append('bloco', bloco);
      form.append('referencia', referencia);
      if (imagem) form.append('imagem', imagem);
      form.append('horarios', JSON.stringify(horarios));

      const res = await fetch('http://localhost:3000/stores', {
        method: 'POST',
        body: form
      });

      if (!res.ok) throw new Error('Erro ao cadastrar');

      navigate('/Menu');
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
      onNameChange={(e) => setName(e.target.value)}
      onBlocoChange={(e) => setBloco(e.target.value)}
      onReferenciaChange={(e) => setReferencia(e.target.value)}
      onImageChange={(e) => setImagem(e.target.files?.[0] ?? null)}
      onSave={handleSave}
    />
  );
};

export default StoreSave;
