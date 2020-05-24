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
      type: "PIZZAS_GETALL",
      pizzas,
    };
  }
}

function increment(formValues) {
  return (dispatch) => {
    apiCalls.updatePizza(formValues).then((data) => {
      dispatch(success(data));
    });
  };

  function success(pizza) {
    return {
      type: "INCREMENT",
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
    console.log(id);
    return {
      type: "DELETE_ITEM",
      id,
    };
  }
}
