import { combineReducers } from "redux";
import { burgerConstructorReducer } from "./burger-constructor";
import { ingredientsReducer } from "./burger-ingredients";
import { orderDetailsReducer } from "./order-details";
import { ingredientDetailsReducer } from "./ingredient-details";

export const rootReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  ingredients: ingredientsReducer,
  orderDetails: orderDetailsReducer,
  ingredientDetails: ingredientDetailsReducer,
});
