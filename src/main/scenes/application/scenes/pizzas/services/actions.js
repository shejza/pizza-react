import { apiCalls } from "./api";

export const actions = {
  getAll,
  create,
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


function create(formValues) {
  return (dispatch) => {
    apiCalls.addPizza(formValues).then((data) => {
      dispatch(success(data));
    });
  };

  function success(pizza) {
    return {
      type: "ADD_PIZZA",
      pizza,
    };
  }
}
