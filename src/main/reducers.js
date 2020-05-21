import { combineReducers } from "redux";
import { pizzas } from "../main/scenes/application/scenes/pizzas/services/reducers";

const rootReducer = combineReducers({
  pizzas,
});

export default rootReducer;
