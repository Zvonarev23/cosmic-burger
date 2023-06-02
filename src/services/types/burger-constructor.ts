import { TBurgerConstructorItem, TIngredient } from "../../utils/types";
import {
  ADD_INGREDIENT,
  CLEAR_INGREDIENTS,
  DELETE_INGREDIENT,
  SET_BUNS,
  SORT_INGREDIENTS,
} from "../actions/burger-constructor";

export interface ISetBunsAction {
  readonly type: typeof SET_BUNS;
  readonly payload: TIngredient;
}

export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: TBurgerConstructorItem;
}

export interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: string;
}

export interface ISortIngredientsAction {
  readonly type: typeof SORT_INGREDIENTS;
  readonly payload: TBurgerConstructorItem[];
}

export interface IClearIngredientsAction {
  readonly type: typeof CLEAR_INGREDIENTS;
}

export type TBurgerConstructorActions =
  | ISetBunsAction
  | IAddIngredientAction
  | IDeleteIngredientAction
  | ISortIngredientsAction
  | IClearIngredientsAction;
