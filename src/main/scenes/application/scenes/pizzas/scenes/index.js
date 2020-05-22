import React, { Component } from "react";

import Pizzas from "./Pizzas";

export default class IndexPizza extends Component {
  render() {
    return (
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
    );
  }
}
