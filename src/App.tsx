import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import Menu from './pages/Menu';
import StoreList from './pages/StoreList';
import StoreMap from './pages/StoreMap';
import ProductsSave from './pages/ProductsSave';
import ProductsList from './pages/ProductsList';
import StoreSave from './pages/StoreSave';
import UsersEdit from './pages/UsersEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<StoreList />} />
        <Route path="/store" element={<StoreSave />} />
        <Route path="/stores/map" element={<StoreMap />} />
        <Route path="/stores/:id/products" element={<ProductsList />} />
        <Route path="/products/save" element={<ProductsSave />} />
        <Route path="/settings" element={<UsersEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
