import { getIngredients } from "../../utils/request-to-api";
import { AppDispatch, AppThunk } from "../types";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const loadIngredients = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_INGREDIENTS_REQUEST,
  });

  return getIngredients()
    .then((res) => {
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: GET_INGREDIENTS_FAILED,
      });
    });
};
