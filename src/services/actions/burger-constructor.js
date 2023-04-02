export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

export const addIngredient = (item) => ({
  type: ADD_INGREDIENT,
  payload: item,
});

export const deleteIngredient = (item) => ({
  type: DELETE_INGREDIENT,
  payload: item,
});
