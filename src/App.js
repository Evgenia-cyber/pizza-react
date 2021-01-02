import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((response) => response.json())
      .then((json) => setPizzas(json.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home pizzas={pizzas} />} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
