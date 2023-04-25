export const SET_INGREDIENT_DETAILS = "SET_INGGREDIENT_DETAILS";
export const RESET_INGREDIENT_DETAILS = "RESET_INGREDIENT_DETAILS";

export const setIngredientsDetails = (item) => ({
  type: SET_INGREDIENT_DETAILS,
  payload: item,
});

export const resetIngredientDetails = () => ({
  type: RESET_INGREDIENT_DETAILS,
});
