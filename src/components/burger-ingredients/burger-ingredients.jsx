import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./burger-ingredients.module.css";
import { IngrediensGroup } from "./ingredients-group/ingredients-group.jsx";
import PropTypes from "prop-types";

export const BurgerIngredients = (props) => {
  const [current, setCurrent] = useState("Булки");

  const filterIngredientsListByType = (arr, type) => {
    return arr.filter((item) => item.type === type);
  };

  return (
    <section className={`pt-10 ${styles.container}`}>
      <h1 className={`text text_type_main-large mb-5`}>Соберите бургер</h1>

      <div className={`${styles.tabs} mb-10`}>
        <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
          Булки
        </Tab>

        <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
          Соусы
        </Tab>

        <Tab
          value="Начинки"
          active={current === "Начинки"}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </div>

      <div className={`${styles.wrapper} custom-scroll`}>
        <IngrediensGroup
          type="Булки"
          ingredientsType={filterIngredientsListByType(
            props.ingredientsList,
            "bun"
          )}
        />

        <IngrediensGroup
          type="Соусы"
          ingredientsType={filterIngredientsListByType(
            props.ingredientsList,
            "sauce"
          )}
        />

        <IngrediensGroup
          type="Начинки"
          ingredientsType={filterIngredientsListByType(
            props.ingredientsList,
            "main"
          )}
        />
      </div>
    </section>
  );
};

const burgerIngredientsPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
});

BurgerIngredients.propTypes = {
  ingredientsList: PropTypes.arrayOf(burgerIngredientsPropTypes).isRequired,
};
