import { v4 as uuidv4 } from "uuid";
import { TBurgerConstructorItem, TIngredient } from "../../utils/types";
import {
  IAddIngredientAction,
  IClearIngredientsAction,
  IDeleteIngredientAction,
  ISetBunsAction,
  ISortIngredientsAction,
} from "../types/burger-constructor";

export const SET_BUNS = "SET_BUNS";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

export const SORT_INGREDIENTS = "SORT_INGREDIENTS";
export const CLEAR_INGREDIENTS = "CLEAR_INGREDIENTS";

export const setBuns = (item: TIngredient): ISetBunsAction => ({
  type: SET_BUNS,
  payload: item,
});

export const addIngredient = (item: TIngredient): IAddIngredientAction => ({
  type: ADD_INGREDIENT,
  payload: { ...item, id: uuidv4() },
});

export const deleteIngredient = (
  item: TBurgerConstructorItem
): IDeleteIngredientAction => ({
  type: DELETE_INGREDIENT,
  payload: item.id,
});

export const sortIngredients = (
  ingredients: TBurgerConstructorItem[]
): ISortIngredientsAction => ({
  type: SORT_INGREDIENTS,
  payload: ingredients,
});

export const clearIngredients = (): IClearIngredientsAction => ({
  type: CLEAR_INGREDIENTS,
});
