import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { commonPropTypes } from "../../utils/commonPropTypes.js";
import { useMemo, useState } from "react";
import styles from "./burger-ingredients.module.css";
import { IngrediensGroup } from "./ingredients-group/ingredients-group.jsx";
import PropTypes from "prop-types";
import { Modal } from "../modal/modal.jsx";
import { IngredientDetails } from "./ingredient-details/ingredient-details.jsx";

export const BurgerIngredients = ({ ingredientsList }) => {
  const [current, setCurrent] = useState("Булки");
  const [ingredientDetails, setIngredientDetails] = useState({
    currentIngredient: null,
    isOpenIngredientDetails: false,
  });

  const openIngredientDetails = (item) => {
    setIngredientDetails({
      currentIngredient: item,
      isOpenIngredientDetails: true,
    });
  };

  const closeIngredientDetails = () => {
    setIngredientDetails({
      ...ingredientDetails,
      isOpenIngredientDetails: false,
    });
  };

  const buns = useMemo(() => {
    return ingredientsList.filter((item) => item.type === "bun");
  }, [ingredientsList]);

  const sauces = useMemo(() => {
    return ingredientsList.filter((item) => item.type === "sauce");
  }, [ingredientsList]);

  const mains = useMemo(() => {
    return ingredientsList.filter((item) => item.type === "main");
  }, [ingredientsList]);

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
        <IngrediensGroup
          type="Булки"
          openIngredientDetails={openIngredientDetails}
          ingredientsType={buns}
        />

        <IngrediensGroup
          type="Соусы"
          openIngredientDetails={openIngredientDetails}
          ingredientsType={sauces}
        />

        <IngrediensGroup
          type="Начинки"
          openIngredientDetails={openIngredientDetails}
          ingredientsType={mains}
        />
      </div>
      {ingredientDetails.isOpenIngredientDetails && (
        <Modal onClose={closeIngredientDetails}>
          <IngredientDetails ingredient={ingredientDetails.currentIngredient} />
        </Modal>
      )}
    </div>
  );
};

BurgerIngredients.propTypes = {
  ingredientsList: PropTypes.arrayOf(commonPropTypes.isRequired).isRequired,
};
