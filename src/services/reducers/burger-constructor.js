import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SET_BUNS,
} from "../actions/burger-constructor";

const initialState = {
  bun: null,
  ingredients: [],
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUNS:
      return {
        ...state,
        bun: { ...action.payload },
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients].filter(
          (ingredient) => ingredient.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
