import {
  SET_BUNS,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SORT_INGREDIENTS,
  CLEAR_INGREDIENTS,
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
    case SORT_INGREDIENTS:
      return {
        ...state,
        ingredients: [...action.payload],
      };

    case CLEAR_INGREDIENTS:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
