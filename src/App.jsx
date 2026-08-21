import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/header/Header';
import Pages from './pages/Pages';
import Cart from './common/Cart/Cart';
import Footer from './common/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes> 
          <Route path='/' element={<Pages />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;