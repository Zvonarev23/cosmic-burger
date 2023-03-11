import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo, useState } from "react";
import styles from "./burger-ingredients.module.css";
import { IngrediensGroup } from "./ingredients-group/ingredients-group.jsx";
import PropTypes from "prop-types";

export const BurgerIngredients = (props) => {
  const [current, setCurrent] = useState("Булки");

  const buns = useMemo(() => {
    return props.ingredientsList.filter((item) => item.type === "bun");
  }, [props.ingredientsList]);

  const sauces = useMemo(() => {
    return props.ingredientsList.filter((item) => item.type === "sauce");
  }, [props.ingredientsList]);

  const mains = useMemo(() => {
    return props.ingredientsList.filter((item) => item.type === "main");
  }, [props.ingredientsList]);

  return (
    <div className="pt-10">
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
        <IngrediensGroup type="Булки" ingredientsType={buns} />

        <IngrediensGroup type="Соусы" ingredientsType={sauces} />

        <IngrediensGroup type="Начинки" ingredientsType={mains} />
      </div>
    </div>
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
