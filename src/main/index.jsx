import React from 'react';
import Login from './scenes/auth/scenes/Login';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Register from './scenes/auth/scenes/Register';
import Index from './scenes/application';

export default function index() {
  return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="(|/app/*)" component={Index} />
          </Switch>
        </Router>
    </React.Fragment>
  )
}


