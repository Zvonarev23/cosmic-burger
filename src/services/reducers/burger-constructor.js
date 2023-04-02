import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
} from "../actions/burger-constructor";

const initialState = {
  bun: null,
  ingredients: [],
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (action.payload.type === "bun") {
        return {
          ...state,
          bun: { ...action.payload },
        };
      } else {
        return {
          ...state,
          ingredients: [...state.ingredients, action.payload],
        };
      }

    case DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: [
          state.ingredients.filter(
            (ingredient) => ingredient.key !== action.payload.key
          ),
        ],
      };

    default:
      return state;
  }
};
