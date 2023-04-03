import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useRef, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./burger-ingredients.module.css";
import { IngrediensGroup } from "./ingredients-group/ingredients-group.jsx";
import { Modal } from "../modal/modal.jsx";
import { IngredientDetails } from "./ingredient-details/ingredient-details.jsx";
import { loadIngredients } from "../../services/actions/burger-ingredients";
import { resetIngredientDetails } from "../../services/actions/ingredient-details";

export const BurgerIngredients = () => {
  const { isLoading, isError, ingredients } = useSelector(
    (state) => state.ingredients
  );
  const ingredientDetailsData = useSelector(
    (state) => state.ingredientDetails.ingredient
  );
  const [current, setCurrent] = useState("bun");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredients());
  }, []);

  const rootRef = useRef(null);
  const tabBunRef = useRef(null);
  const tabSauceRef = useRef(null);
  const tabMainRef = useRef(null);

  const handleScroll = () => {
    const bunsLocation = Math.abs(
      rootRef.current.getBoundingClientRect().top -
        tabBunRef.current.getBoundingClientRect().top
    );
    const saucesLocation = Math.abs(
      rootRef.current.getBoundingClientRect().top -
        tabSauceRef.current.getBoundingClientRect().top
    );
    const mainsLocation = Math.abs(
      rootRef.current.getBoundingClientRect().top -
        tabMainRef.current.getBoundingClientRect().top
    );

    const currentLocation = Math.min(
      bunsLocation,
      saucesLocation,
      mainsLocation
    );

    bunsLocation === currentLocation
      ? setCurrent("bun")
      : saucesLocation === currentLocation
      ? setCurrent("sauce")
      : setCurrent("main");
  };

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

  const closeIngredientDetails = () => {
    dispatch(resetIngredientDetails());
  };

  const [buns, sauces, mains] = useMemo(() => {
    const buns = ingredients.filter((item) => item.type === "bun");
    const mains = ingredients.filter((item) => item.type === "main");
    const sauces = ingredients.filter((item) => item.type === "sauce");

    return [buns, sauces, mains];
  }, [ingredients]);

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (!isLoading && isError) {
    return <h1>Непредвиденная ошибка</h1>;
  }

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

      <div
        ref={rootRef}
        onScroll={handleScroll}
        className={`${styles.wrapper} custom-scroll`}
      >
        <ul>
          <li ref={tabBunRef}>
            <IngrediensGroup type="Булки" ingredientsType={buns} />
          </li>

          <li ref={tabSauceRef}>
            <IngrediensGroup type="Соусы" ingredientsType={sauces} />
          </li>

          <li ref={tabMainRef}>
            <IngrediensGroup type="Начинки" ingredientsType={mains} />
          </li>
        </ul>
      </div>
      {ingredientDetailsData && (
        <Modal onClose={closeIngredientDetails}>
          <IngredientDetails />
        </Modal>
      )}
    </div>
  );
};
