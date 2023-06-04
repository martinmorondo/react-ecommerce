import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Pages from './pages/Pages';
import Data from './components/Data';
import Sdata from './components/shop/Sdata';
import Tdata from './components/top/Tdata';
import Cart from './common/Cart/Cart';
import Footer from './common/Footer/Footer';


function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const { topItems } = Tdata; 
  
  const [cartItem, setCartItem] = useState([]);
  
  const addToCart = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);

    if (productExist) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item)));
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  }

  const decreaseQty = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);

    if (productExist.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : item)));
    }
  }

  return (
   <>
    <Router>
    <Header cartItem={cartItem}/>
    <Switch>
        <Route path = '/' exact>
          <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} topItems={topItems} />
        </Route>
        <Route path = '/cart' exact>
          <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
        </Route>
      </Switch>
      <Footer />
      </Router>
   </>
  )
}

export default App;
