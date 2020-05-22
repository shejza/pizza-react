import { apiCalls } from "./api";

export const actions = {
  getAll,
  increment,
};

function getAll() {
  return (dispatch) => {
    apiCalls.getPizzas().then((pizzas) => dispatch(success(pizzas)));
  };

  function success(pizzas) {
    return {
      type: "PIZZAS_GETALL",
      pizzas,
    };
  }
}

function increment() {
  return {
    type: "INCREMENT",
  };
}
