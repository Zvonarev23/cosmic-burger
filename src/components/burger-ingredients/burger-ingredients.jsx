import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { commonPropTypes } from "../../utils/commonPropTypes.js";
import { useMemo, useRef, useState } from "react";
import styles from "./burger-ingredients.module.css";
import { IngrediensGroup } from "./ingredients-group/ingredients-group.jsx";
import PropTypes from "prop-types";
import { Modal } from "../modal/modal.jsx";
import { IngredientDetails } from "./ingredient-details/ingredient-details.jsx";

export const BurgerIngredients = ({ ingredientsList }) => {
  const [current, setCurrent] = useState("bun");
  const [ingredientDetails, setIngredientDetails] = useState({
    currentIngredient: null,
    isOpenIngredientDetails: false,
  });

  const tabBunRef = useRef(null);
  const tabSauceRef = useRef(null);
  const tabMainRef = useRef(null);

  const selectCategory = (category) => {
    setCurrent(category);

    switch (category) {
      case "bun":
        tabBunRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "sauce":
        tabSauceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "main":
        tabMainRef.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

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
        <Tab value="bun" active={current === "bun"} onClick={selectCategory}>
          Булки
        </Tab>

        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={selectCategory}
        >
          Соусы
        </Tab>

        <Tab value="main" active={current === "main"} onClick={selectCategory}>
          Начинки
        </Tab>
      </div>

      <div className={`${styles.wrapper} custom-scroll`}>
        <ul>
          <li ref={tabBunRef}>
            <IngrediensGroup
              type="Булки"
              openIngredientDetails={openIngredientDetails}
              ingredientsType={buns}
            />
          </li>

          <li ref={tabSauceRef}>
            <IngrediensGroup
              type="Соусы"
              openIngredientDetails={openIngredientDetails}
              ingredientsType={sauces}
            />
          </li>

          <li ref={tabMainRef}>
            <IngrediensGroup
              type="Начинки"
              openIngredientDetails={openIngredientDetails}
              ingredientsType={mains}
            />
          </li>
        </ul>
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
