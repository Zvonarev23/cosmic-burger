import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../actions/burger-ingredients";
import { ingredientsReducer, initialState } from "./burger-ingredients";

describe("test burger-ingredients reducer", () => {
  it("Should create initial state", () => {
    expect(ingredientsReducer(undefined, {})).toEqual(initialState);
  });

  it("Should return state with action GET_INGREDIENTS_REQUEST", () => {
    expect(
      ingredientsReducer(undefined, { type: GET_INGREDIENTS_REQUEST })
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it("Should return state with action GET_INGREDIENTS_SUCCESS", () => {
    const ingredients = [
      {
        _id: "643d69a5c3f7b9001cfa093c",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
      },
    ];

    expect(
      ingredientsReducer(undefined, {
        type: GET_INGREDIENTS_SUCCESS,
        payload: ingredients,
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      ingredients: ingredients,
    });
  });

  it("Should return state with action GET_INGREDIENTS_FAILED", () => {
    expect(
      ingredientsReducer(undefined, { type: GET_INGREDIENTS_FAILED })
    ).toEqual({
      ...initialState,
      isLoading: false,
      isError: true,
    });
  });
});
