import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IngredientDetails } from "../ingredient-details/ingredient-details.jsx";

export const IngredientDetailsView = () => {
  const { ingredients, isError, isLoading } = useSelector(
    (state) => state.ingredients
  );

  const { _id } = useParams();

  const currentIngredient = ingredients.find(
    (ingredient) => ingredient._id === _id
  );

  return (
    <>
      {isLoading && <h2 className="text text_type_main-medium">Загрузка...</h2>}

      {!isLoading && isError && (
        <h2 className="text text_type_main-medium">Ошибка...</h2>
      )}

      {!isLoading && currentIngredient && (
        <>
          <IngredientDetails ingredient={currentIngredient} heading="start" />
        </>
      )}
    </>
  );
};
