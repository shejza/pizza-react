export function pizzaOrders(state = {}, action) {
  switch (action.type) {
    case "PIZZAS_OREDERS_GETALL":
      return {
        pizzas: action.pizzas,
      };
    case "PIZZAS_OREDERS_INCREMENT":
      return {
        pizzas: state.pizzas.map((pizza) =>
          pizza.id === action.pizza.id ? action.pizza : pizza
        ),
      };
    case "PIZZAS_OREDERS_DELETE":
      return {
        pizzas: state.pizzas.filter((pizza) => pizza.id !== action.id),
      };

    default:
      return state;
  }
}
