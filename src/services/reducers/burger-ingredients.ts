import { TIngredient } from "../../utils/types";
import {
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
} from "../actions/burger-ingredients";
import { TBurgerIngredientsActions } from "../types/burger-ingredients";

export type TBurgerIngredientsState = {
  ingredients: TIngredient[];
  isLoading: boolean;
  isError: boolean;
};

export const initialState: TBurgerIngredientsState = {
  ingredients: [],
  isLoading: false,
  isError: false,
};

export const ingredientsReducer = (
  state = initialState,
  action: TBurgerIngredientsActions
): TBurgerIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ingredients: action.payload,
      };
    case GET_INGREDIENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
