import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import Header from './components/header/Header';
import Pages from './pages/Pages';
import Cart from './common/Cart/Cart';
import Footer from './common/Footer/Footer';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import ShopPage from './pages/ShopPage';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />

        {/* Fallback */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;