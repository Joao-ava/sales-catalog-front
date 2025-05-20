import React, { useCallback, useEffect, useState } from 'react';
import Layout from './Layout';
import Store from '../../dtos/Store';
import api from '../../services/api';

const StoreList: React.FC = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('Todos');
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(false);
  const data = stores.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (status === 'Todos' || item.status === status)
  );

  const listStores = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await api.get('/stores')
      setStores(data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    listStores()
    return () => {
      setStores([])
    }
  }, [listStores])

  return (
    <Layout
      loading={loading}
      search={search}
      setSearch={setSearch}
      status={status}
      setStatus={setStatus}
      stores={data}
    />
  );
};

export default StoreList;
