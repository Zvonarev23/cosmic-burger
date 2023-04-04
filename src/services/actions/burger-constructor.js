export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const SET_BUNS = "SET_BUNS";
import { v4 as uuidv4 } from "uuid";

export const addIngredient = (item) => ({
  type: ADD_INGREDIENT,
  payload: { ...item, id: uuidv4() },
});

export const setBuns = (item) => ({
  type: SET_BUNS,
  payload: item,
});

export const deleteIngredient = (item) => ({
  type: DELETE_INGREDIENT,
  payload: item.id,
});
