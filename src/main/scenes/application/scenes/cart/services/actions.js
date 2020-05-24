import { apiCalls } from "./api";

export const actions = {
  getAll,
  increment,
  deleteItem,
};

function getAll() {
  return (dispatch) => {
    apiCalls.getPizzas().then((pizzas) => dispatch(success(pizzas)));
  };

  function success(pizzas) {
    return {
      type: "PIZZAS_OREDERS_GETALL",
      pizzas,
    };
  }
}

function increment(formValues) {
  return (dispatch) => {
    apiCalls.updatePizza(formValues).then(() => {
      dispatch(success(formValues));
    });
  };

  function success(pizza) {
   
    return {
      type: "PIZZAS_OREDERS_INCREMENT",
      pizza,
    };
  }
}

function deleteItem(id) {
  return (dispatch) => {
    apiCalls.deleteItem(id).then(() => {
      dispatch(success(id));
    });
  };

  function success(id) {
    return {
      type: "PIZZAS_OREDERS_DELETE",
      id,
    };
  }
}
