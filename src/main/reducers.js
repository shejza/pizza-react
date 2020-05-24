import { combineReducers } from "redux";
import { pizzas } from "../main/scenes/application/scenes/pizzas/services/reducers";
import { pizzaOrders } from "../main/scenes/application/scenes/cart/services/reducers";

const rootReducer = combineReducers({
  pizzas,
  pizzaOrders,
});

export default rootReducer;
