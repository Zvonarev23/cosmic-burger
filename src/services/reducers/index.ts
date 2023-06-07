import { combineReducers } from "redux";
import { burgerConstructorReducer } from "./burger-constructor";
import { ingredientsReducer } from "./burger-ingredients";
import { orderDetailsReducer } from "./order-details";
import { userReducer } from "./user";
import { profileOrdersReducer } from "./profile-orders";

export const rootReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  ingredients: ingredientsReducer,
  orderDetails: orderDetailsReducer,
  user: userReducer,
  profileOrders: profileOrdersReducer,
});
