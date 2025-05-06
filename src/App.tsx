import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
// import { CadastroVendedor } from './pages/SignUp/Layout';
// import { CadastroProduto } from './pages/ProductsSave/Layout';
// import { ListagemProdutos } from './pages/ProductsList/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/cadastro-produto" element={<CadastroProduto />} /> */}
        {/* <Route path="/produtos" element={<ListagemProdutos />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
