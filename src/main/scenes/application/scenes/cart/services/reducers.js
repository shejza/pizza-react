export function pizzas(state = {}, action) {
  switch (action.type) {
    case "PIZZAS_GETALL":
      return {
        pizzas: action.pizzas,
      };
    case "INCREMENT":
      return {
        pizzas: [action.pizza, ...state.pizzas],
      };
    case "DELETE_ITEM": {
      return {
        pizzas: state.pizzas.filter((pizza) => pizza.pizza_id !== action.id),
      };
    }

    default:
      return state;
  }
}
