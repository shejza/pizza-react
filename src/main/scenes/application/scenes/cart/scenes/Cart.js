import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../services/actions";
import PizzaItem from "./PizzaItem";

export default function Cart() {
  const dispatch = useDispatch();

  const { pizzas } = useSelector((state) => state.pizzas);
  const [pizzasList, setToDos] = useState([]);
  let [totalPrice] = useState(0.0);

  useEffect(() => {
    dispatch(actions.getAll());
  }, [dispatch]);

  useEffect(() => {
    if (!!pizzas) {
      setToDos(pizzas);
    }
  }, [pizzas]);

  // let totalPrice = 0.0;

  const renderedPizzas = pizzasList.map((pizza, index) => {
    totalPrice += +(pizza.price * pizza.quantity);
    return <PizzaItem key={pizza.id} pizza={pizza} />;
  });

  return (
    <React.Fragment>
      <div className="container">
        <div className="row mb-2">
          <div className="col-md-8">
            <h3 class="pb-3 mb-4 font-italic border-bottom">Your Items:</h3>
          </div>
        </div>
        <div className="row mb-2 ">{renderedPizzas}</div>

        <div className="row">
          <div className="col-md-3 mt40 mb40">
            <h3 className="mb20 mb40">Total: {totalPrice}</h3>
            <a class="btn btn-lg btn-primary" href="#" role="button">
              Proceed >>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
