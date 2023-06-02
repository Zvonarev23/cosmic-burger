import { TIngredient } from "../../utils/types";
import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../actions/burger-ingredients";

export interface IGetIngredientsRequestAction {
  type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction {
  type: typeof GET_INGREDIENTS_SUCCESS;
  payload: TIngredient[];
}

export interface IGetIngredientsFailedAction {
  type: typeof GET_INGREDIENTS_FAILED;
}

export type TBurgerIngredientsActions =
  | IGetIngredientsRequestAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction;
