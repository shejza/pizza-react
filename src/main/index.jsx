import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import Cart from './scenes/application/scenes/cart/scenes/Cart';
import IndexPizza from './scenes/application/scenes/pizzas/scenes';
import Header from './scenes/application/scenes/layout/Header';

export default function index() {
  return (
      <React.Fragment>
        <Router>
           <Header/>
          <Switch>
           
            <Route exact path="/cart" component={Cart} />
            <Route path="/" component={IndexPizza} />
        
          </Switch>
        </Router>
    </React.Fragment>
  )
}


