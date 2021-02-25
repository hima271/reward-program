import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './home/Home';
import Cart from './cart/Cart';
import Reward from './reward/Reward';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {

  const [products, setProducts] = useState([]);

  const addProduct = (list) => {
    setProducts(products => [...products, ...list]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
        < nav className = "navbar navbar-light bg-light" >
          <ul className = "navbar-nav" >
              <li className="nav-item"> <Link to={{ pathname:"/home", state: {products: products}}}> Home </Link></li>
            < li className = "nav-item" > < Link to = "/cart" > Cart </Link></li >
            < li className = "nav-item" > < Link to = "/reward" > Reward </Link></li >
          </ul>
          </nav>
          <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route path="/home"> <Home/></Route>
            <Route path="/cart"> <Cart/> </Route>
          <Route path="/reward"><Reward/></Route>
        </Switch>
        </Router>
      </header>
    </div>
  );
}


export default App;
