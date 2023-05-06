import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Pages from './pages/Pages';
import Data from './components/Data';
import Cart from './common/Cart/Cart';


function App() {
  const { productItems } = Data;
  
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
          <Pages productItems={productItems} addToCart={addToCart} />
        </Route>
        <Route path = '/cart' exact>
          <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
        </Route>
      </Switch>
      </Router>
   </>
  )
}

export default App;
