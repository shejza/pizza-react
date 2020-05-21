import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Pizzas from "./scenes/pizzas/scenes/Pizzas";

export default class Index extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark bg-img">
            <div className="col-md-6 px-0">
              <h1 className="display-4 font-italic">
                The only place to go
                <br />
                <span className="bolded-orange"> for Pizza</span>
              </h1>
            </div>
          </div>
          <Pizzas />
        </React.Fragment>
      </Router>
    );
  }
}
