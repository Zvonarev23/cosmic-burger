import styles from "./ingredient-details-page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IngredientDetails } from "../../components/burger-ingredients/ingredient-details/ingredient-details.jsx";
import { loadIngredients } from "../../services/actions/burger-ingredients.js";

export const IngredientDetailsPage = () => {
  const { ingredients, isError, isLoading } = useSelector(
    (state) => state.ingredients
  );

  const { _id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredients());
  }, []);

  const currentIngredient = ingredients.find(
    (ingredient) => ingredient._id === _id
  );

  return (
    <div className={styles.container}>
      {isLoading && <h2 className="text text_type_main-medium">Загрузка...</h2>}

      {!isLoading && isError && (
        <h2 className="text text_type_main-medium">Ошибка...</h2>
      )}

      {!isLoading && currentIngredient && (
        <>
          <IngredientDetails ingredient={currentIngredient} heading="center" />
        </>
      )}
    </div>
  );
};
