import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../services/actions";
import PizzaItem from "./PizzaItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();

  const { pizzas } = useSelector((state) => state.pizzaOrders);
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

  const deleteItem = (pizzaID) => {
    dispatch(actions.deleteItem(pizzaID));
  };

  const renderedPizzas = pizzasList.map((pizza) => {
    totalPrice += +(pizza.price_order * pizza.quantity);

    return (
      <PizzaItem
        key={pizza.id + "-" + pizza.price_order + "-" + pizza.quantity}
        pizza={pizza}
        deleteItem={deleteItem}
      />
    );
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
            <h3 className="mb20 mb20">Total: {totalPrice.toFixed(2)} &euro;</h3>
            <h3 className="mb20 mb40">
              Total: &#36;{(totalPrice * 1.08).toFixed(2)}
            </h3>

            <Link
              to={{
                pathname: "/orders",
              }}
              tabIndex="-1"
              className="btn btn-lg btn-primary"
            >
              Proceed >>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
