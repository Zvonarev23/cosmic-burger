import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Preloader } from "../../preloader/preloader.jsx";
import { TIngredient } from "../../../utils/types";

type TIngredientDetails = {
  heading: string;
};

export const IngredientDetails = ({ heading }: TIngredientDetails) => {
  const { ingredients, isError, isLoading } = useSelector(
    //@ts-ignore
    (state) => state.ingredients
  );

  const { _id } = useParams();

  const currentIngredient = ingredients.find(
    (ingredient: TIngredient) => ingredient._id === _id
  );

  return (
    <div className={styles.container}>
      {isLoading && <Preloader />}

      {!isLoading && isError && (
        <h2 className="text text_type_main-medium">Ошибка...</h2>
      )}

      {!isLoading && currentIngredient && (
        <>
          <h2
            className={
              heading === "start"
                ? `${styles.heading_start}`
                : `${styles.heading_center}`
            }
          >
            Детали ингредиента
          </h2>

          <figure className={`${styles.figure} mb-8`}>
            <img
              src={currentIngredient.image_large}
              alt={currentIngredient.name}
              className={styles.image}
            />

            <figcaption className="text text_type_main-medium">
              {currentIngredient.name}
            </figcaption>
          </figure>

          <ul className={styles.list}>
            <li className={styles.item}>
              <span
                className={`${styles.description} text text_type_main-default text_color_inactive`}
              >
                Калории, ккал
              </span>
              <span
                className={`${styles.value} text text_type_digits-default text_color_inactive`}
              >
                {currentIngredient.calories}
              </span>
            </li>
            <li className={styles.item}>
              <span
                className={`${styles.description} text text_type_main-default text_color_inactive`}
              >
                Белки, г
              </span>
              <span
                className={`${styles.value} text text_type_digits-default text_color_inactive`}
              >
                {currentIngredient.proteins}
              </span>
            </li>
            <li className={styles.item}>
              <span
                className={`${styles.description} text text_type_main-default text_color_inactive`}
              >
                Жиры, г
              </span>
              <span
                className={`${styles.value} text text_type_digits-default text_color_inactive`}
              >
                {currentIngredient.fat}
              </span>
            </li>
            <li className={styles.item}>
              <span
                className={`${styles.description} text text_type_main-default text_color_inactive`}
              >
                Углеводы, г
              </span>
              <span
                className={`${styles.value} text text_type_digits-default text_color_inactive`}
              >
                {currentIngredient.carbohydrates}
              </span>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};
