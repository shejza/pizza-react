export function pizzas(state = {}, action) {
  switch (action.type) {
    case "PIZZAS_GETALL":
      return {
        pizzas: action.pizzas,
      };

    default:
      return state;
  }
}
