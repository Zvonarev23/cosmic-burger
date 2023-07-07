import {
  ADD_INGREDIENT,
  CLEAR_INGREDIENTS,
  DELETE_INGREDIENT,
  SET_BUNS,
  SORT_INGREDIENTS,
} from "../actions/burger-constructor";
import { burgerConstructorReducer, initialState } from "./burger-constructor";

describe("test burger-constructor reducer", () => {
  it("Should create initial state", () => {
    expect(burgerConstructorReducer(undefined, {})).toEqual(initialState);
  });

  it("Should return state with action SET_BUNS", () => {
    const bun = {
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
    };

    expect(
      burgerConstructorReducer(undefined, {
        type: SET_BUNS,
        payload: bun,
      })
    ).toEqual({
      ...initialState,
      bun: bun,
    });
  });

  it("Should return state with action ADD_INGREDIENT", () => {
    const ingredient = {
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
    };

    expect(
      burgerConstructorReducer(undefined, {
        type: ADD_INGREDIENT,
        payload: ingredient,
      })
    ).toEqual({
      ...initialState,
      ingredients: [ingredient],
    });
  });

  it("Should return state with action DELETE_INGREDIENT", () => {
    const id = "643d69a5c3f7b9001cfa093c";

    const ingredients = [
      {
        id: "643d69a5c3f7b9001cfa093c",
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
      burgerConstructorReducer(undefined, {
        type: DELETE_INGREDIENT,
        payload: id,
      })
    ).toEqual({
      ...initialState,
      ingredients: ingredients.filter((ingredient) => ingredient.id !== id),
    });
  });

  it("Should return state with action SORT_INGREDIENTS", () => {
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
      burgerConstructorReducer(undefined, {
        type: SORT_INGREDIENTS,
        payload: ingredients,
      })
    ).toEqual({
      ...initialState,
      ingredients: ingredients,
    });
  });

  it("Should return state with action CLEAR_INGREDIENTS", () => {
    expect(
      burgerConstructorReducer(undefined, {
        type: CLEAR_INGREDIENTS,
      })
    ).toEqual({
      ...initialState,
    });
  });
});
