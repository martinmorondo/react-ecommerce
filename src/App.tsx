import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/header/Header';
import Pages from './pages/Pages';
import Cart from './common/Cart/Cart';
import Footer from './common/Footer/Footer';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Pages />} />

        {/* Carrito */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Compra realizada */}
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;