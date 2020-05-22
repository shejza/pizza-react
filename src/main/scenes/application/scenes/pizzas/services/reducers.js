export function pizzas(state = {}, action) {
  switch (action.type) {
    case "PIZZAS_GETALL":
      return {
        pizzas: action.pizzas,
      };
    case "ADD_PIZZA":
      return {
        pizzas: [action.pizzas, ...state.pizzas],
      };
    default:
      return state;
  }
}
