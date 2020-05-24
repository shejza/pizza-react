import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../services/actions";
import Pizza from "./Pizza";

export default function Pizzas() {
  const dispatch = useDispatch();

  const { pizzas } = useSelector((state) => state.pizzas);
  const [pizzasList, setToDos] = useState([]);
  let [visibility, setVisibility] = useState(false);

  useEffect(() => {
    dispatch(actions.getAll());
  }, [dispatch]);

  useEffect(() => {
    if (!!pizzas) {
      setToDos(pizzas);
    }
  }, [pizzas]);

  const renderedPizzas = pizzasList.map((pizza, index) => (
    <Pizza key={pizza.id} pizza={pizza} setVisibility={setVisibility} />
  ));

  return (
    <React.Fragment>
      <div className="container">
        {visibility && (
          <div className="alert alert-success" role="alert">
            Your Item was added to Cart!
          </div>
        )}
        <div className="row mb-2">{renderedPizzas}</div>
      </div>
    </React.Fragment>
  );
}
