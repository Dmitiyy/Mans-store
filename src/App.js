import React from 'react';
import Home from './components/pages/home';
import Cart from './components/cart/';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
