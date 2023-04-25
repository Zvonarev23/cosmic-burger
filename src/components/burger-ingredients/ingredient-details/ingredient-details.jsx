import { useSelector } from "react-redux";
import styles from "./ingredient-details.module.css";

export const IngredientDetails = () => {
  const ingredient = useSelector((state) => state.ingredientDetails.ingredient);

  return (
    <div className={styles.container}>
      <h2 className={`${styles.heading} text text_type_main-large`}>
        Детали ингредиента
      </h2>

      <figure className={`${styles.figure} mb-8`}>
        <img
          src={ingredient.image_large}
          alt={ingredient.name}
          className={styles.image}
        />

        <figcaption className="text text_type_main-medium">
          {ingredient.name}
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
            {ingredient.calories}
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
            {ingredient.proteins}
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
            {ingredient.fat}
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
            {ingredient.carbohydrates}
          </span>
        </li>
      </ul>
    </div>
  );
};
